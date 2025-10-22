import { NextRequest, NextResponse } from 'next/server';
import { portfolioSections } from '@/lib/sections-data';
import fs from 'fs/promises';
import path from 'path';

export async function GET(request: NextRequest) {
  try {
    return NextResponse.json({
      success: true,
      sections: portfolioSections
    });
  } catch (error) {
    console.error('Get sections error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch sections' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const { sections, commitMessage } = await request.json();
    
    if (!sections) {
      return NextResponse.json(
        { success: false, message: 'Invalid sections data' },
        { status: 400 }
      );
    }
    
    const isProduction = process.env.VERCEL === '1';
    
    if (isProduction) {
      return NextResponse.json({
        success: false,
        message: 'Cannot update sections in production. Please update sections-data.ts directly in your GitHub repository.'
      }, { status: 403 });
    }
    
    // Local development: Update the sections-data.ts file
    const filePath = path.join(process.cwd(), 'src', 'lib', 'sections-data.ts');
    const fileContent = await fs.readFile(filePath, 'utf-8');
    
    // Find the portfolioSections object and replace it
    const sectionsDataString = JSON.stringify(sections, null, 2);
    const updatedContent = fileContent.replace(
      /export const portfolioSections: PortfolioSections = \{[\s\S]*\};/,
      `export const portfolioSections: PortfolioSections = ${sectionsDataString};`
    );
    
    // Write the updated content
    await fs.writeFile(filePath, updatedContent, 'utf-8');
    
    // Commit changes to git
    const { execSync } = require('child_process');
    try {
      execSync('git add src/lib/sections-data.ts', { cwd: process.cwd() });
      execSync(`git commit -m "${commitMessage || 'Update portfolio sections from admin panel'}"`, { 
        cwd: process.cwd() 
      });
      execSync('git push origin main', { cwd: process.cwd() });
    } catch (gitError: any) {
      console.error('Git error:', gitError);
      return NextResponse.json({
        success: false,
        message: `File updated locally but git commit failed: ${gitError.message}`
      }, { status: 500 });
    }
    
    return NextResponse.json({
      success: true,
      message: 'Sections updated and changes committed to GitHub.'
    });
  } catch (error) {
    console.error('Update sections error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to update sections' },
      { status: 500 }
    );
  }
}
