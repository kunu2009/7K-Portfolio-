import { NextRequest, NextResponse } from 'next/server';
import { portfolioData } from '@/lib/portfolio-data';
import fs from 'fs/promises';
import path from 'path';

export async function GET(request: NextRequest) {
  try {
    return NextResponse.json({
      success: true,
      portfolio: portfolioData
    });
  } catch (error) {
    console.error('Get portfolio error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch portfolio' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const { portfolio, commitMessage } = await request.json();
    
    if (!portfolio) {
      return NextResponse.json(
        { success: false, message: 'Invalid portfolio data' },
        { status: 400 }
      );
    }
    
    const isProduction = process.env.VERCEL === '1';
    
    if (isProduction) {
      return NextResponse.json({
        success: false,
        message: 'Cannot update portfolio in production. Please update portfolio-data.ts directly in your GitHub repository.'
      }, { status: 403 });
    }
    
    // Local development: Update the portfolio-data.ts file
    const filePath = path.join(process.cwd(), 'src', 'lib', 'portfolio-data.ts');
    const fileContent = await fs.readFile(filePath, 'utf-8');
    
    // Find the portfolioData object and replace it
    const portfolioDataString = JSON.stringify(portfolio, null, 2);
    const updatedContent = fileContent.replace(
      /export const portfolioData: PortfolioData = \{[\s\S]*?\};/,
      `export const portfolioData: PortfolioData = ${portfolioDataString};`
    );
    
    // Write the updated content
    await fs.writeFile(filePath, updatedContent, 'utf-8');
    
    // Commit changes to git
    const { execSync } = require('child_process');
    try {
      execSync('git add src/lib/portfolio-data.ts', { cwd: process.cwd() });
      execSync(`git commit -m "${commitMessage || 'Update portfolio data from admin panel'}"`, { 
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
      message: 'Portfolio updated and changes committed to GitHub.'
    });
  } catch (error) {
    console.error('Update portfolio error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to update portfolio' },
      { status: 500 }
    );
  }
}
