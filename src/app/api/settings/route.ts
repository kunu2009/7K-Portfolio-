import { NextRequest, NextResponse } from 'next/server';
import { siteSettings } from '@/lib/portfolio-data';
import fs from 'fs/promises';
import path from 'path';

export async function GET(request: NextRequest) {
  try {
    return NextResponse.json({
      success: true,
      settings: siteSettings
    });
  } catch (error) {
    console.error('Get settings error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch settings' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const { settings, commitMessage } = await request.json();
    
    if (!settings) {
      return NextResponse.json(
        { success: false, message: 'Invalid settings data' },
        { status: 400 }
      );
    }
    
    const isProduction = process.env.VERCEL === '1';
    
    if (isProduction) {
      return NextResponse.json({
        success: false,
        message: 'Cannot update settings in production. Please update portfolio-data.ts directly in your GitHub repository.'
      }, { status: 403 });
    }
    
    // Local development: Update the portfolio-data.ts file
    const filePath = path.join(process.cwd(), 'src', 'lib', 'portfolio-data.ts');
    const fileContent = await fs.readFile(filePath, 'utf-8');
    
    // Find the siteSettings object and replace it
    const settingsDataString = JSON.stringify(settings, null, 2);
    const updatedContent = fileContent.replace(
      /export const siteSettings: SiteSettings = \{[\s\S]*?\};/,
      `export const siteSettings: SiteSettings = ${settingsDataString};`
    );
    
    // Write the updated content
    await fs.writeFile(filePath, updatedContent, 'utf-8');
    
    // Commit changes to git
    const { execSync } = require('child_process');
    try {
      execSync('git add src/lib/portfolio-data.ts', { cwd: process.cwd() });
      execSync(`git commit -m "${commitMessage || 'Update site settings from admin panel'}"`, { 
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
      message: 'Settings updated and changes committed to GitHub.'
    });
  } catch (error) {
    console.error('Update settings error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to update settings' },
      { status: 500 }
    );
  }
}
