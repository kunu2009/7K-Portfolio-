import { NextRequest, NextResponse } from 'next/server';
import { booksData } from '@/lib/books-data';
import fs from 'fs/promises';
import path from 'path';

export async function GET(request: NextRequest) {
  try {
    return NextResponse.json({
      success: true,
      books: booksData
    });
  } catch (error) {
    console.error('Get books error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch books' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const { books, commitMessage } = await request.json();
    
    if (!books || !Array.isArray(books)) {
      return NextResponse.json(
        { success: false, message: 'Invalid books data' },
        { status: 400 }
      );
    }
    
    const isProduction = process.env.VERCEL === '1';
    
    if (isProduction) {
      return NextResponse.json({
        success: false,
        message: 'Cannot update books in production. Please update books-data.ts directly in your GitHub repository and push the changes.'
      }, { status: 403 });
    }
    
    // Local development: Update the books-data.ts file
    const filePath = path.join(process.cwd(), 'src', 'lib', 'books-data.ts');
    const fileContent = await fs.readFile(filePath, 'utf-8');
    
    // Find the booksData array and replace it
    const booksDataString = JSON.stringify(books, null, 2);
    const updatedContent = fileContent.replace(
      /export const booksData: Book\[\] = \[[\s\S]*?\];/,
      `export const booksData: Book[] = ${booksDataString};`
    );
    
    // Write the updated content
    await fs.writeFile(filePath, updatedContent, 'utf-8');
    
    // Commit changes to git
    const { execSync } = require('child_process');
    let gitSuccess = false;
    try {
      execSync('git add src/lib/books-data.ts', { cwd: process.cwd() });
      execSync(`git commit -m "${commitMessage || 'Update books data from settings panel'}"`, { 
        cwd: process.cwd() 
      });
      execSync('git push origin main', { cwd: process.cwd() });
      gitSuccess = true;
    } catch (gitError: any) {
      console.error('Git error:', gitError);
      return NextResponse.json({
        success: false,
        message: `File updated locally but git commit failed: ${gitError.message}`
      }, { status: 500 });
    }
    
    return NextResponse.json({
      success: true,
      message: 'Books updated and changes committed to GitHub.'
    });
  } catch (error) {
    console.error('Update books error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to update books' },
      { status: 500 }
    );
  }
}
