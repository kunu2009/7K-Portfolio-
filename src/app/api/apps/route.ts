import { NextRequest, NextResponse } from 'next/server';
import { appsData } from '@/lib/apps-data';
import fs from 'fs/promises';
import path from 'path';

export async function GET(request: NextRequest) {
  try {
    return NextResponse.json({
      success: true,
      apps: appsData
    });
  } catch (error) {
    console.error('Get apps error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch apps' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const { apps, commitMessage } = await request.json();
    
    if (!apps || !Array.isArray(apps)) {
      return NextResponse.json(
        { success: false, message: 'Invalid apps data' },
        { status: 400 }
      );
    }
    
    const isProduction = process.env.VERCEL === '1';
    
    // On Vercel, the filesystem is read-only, so we can't save changes
    if (isProduction) {
      return NextResponse.json({
        success: false,
        message: 'Cannot update apps in production. Please update apps-data.ts directly in your GitHub repository and push the changes. Vercel will automatically redeploy.'
      }, { status: 403 });
    }
    
    // Local development: Update the apps-data.ts file
    const filePath = path.join(process.cwd(), 'src', 'lib', 'apps-data.ts');
    const fileContent = await fs.readFile(filePath, 'utf-8');
    
    // Find the appsData array and replace it with proper formatting
    const appsDataString = JSON.stringify(apps, null, 2);
    
    // Use a more robust regex that handles the entire array including the closing bracket and semicolon
    const regex = /export const appsData: App\[\] = \[\s*\{[\s\S]*?\}\s*\];/;
    
    if (!regex.test(fileContent)) {
      console.error('Could not find appsData array in file');
      return NextResponse.json({
        success: false,
        message: 'Could not locate appsData array in apps-data.ts'
      }, { status: 500 });
    }
    
    const updatedContent = fileContent.replace(
      regex,
      `export const appsData: App[] = ${appsDataString};`
    );
    
    // Verify the replacement worked
    if (updatedContent === fileContent) {
      console.error('Content was not updated - regex replacement failed');
      return NextResponse.json({
        success: false,
        message: 'Failed to update content - no changes were made'
      }, { status: 500 });
    }
    
    // Write the updated content
    await fs.writeFile(filePath, updatedContent, 'utf-8');
    
    console.log('Successfully updated apps-data.ts file');
    
    // Commit changes to git
    const { execSync } = require('child_process');
    let gitSuccess = false;
    try {
      execSync('git add src/lib/apps-data.ts', { cwd: process.cwd() });
      execSync(`git commit -m "${commitMessage || 'Update apps data from settings panel'}"`, { 
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
      message: 'Apps updated and changes committed to GitHub. Vercel will automatically redeploy.'
    });
  } catch (error) {
    console.error('Update apps error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to update apps' },
      { status: 500 }
    );
  }
}
