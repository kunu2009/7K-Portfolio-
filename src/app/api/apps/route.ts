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
    
    // Update the apps-data.ts file
    const filePath = path.join(process.cwd(), 'src', 'lib', 'apps-data.ts');
    const fileContent = await fs.readFile(filePath, 'utf-8');
    
    // Find the appsData array and replace it
    const appsDataString = JSON.stringify(apps, null, 2);
    const updatedContent = fileContent.replace(
      /export const appsData: App\[\] = \[[\s\S]*?\];/,
      `export const appsData: App[] = ${appsDataString};`
    );
    
    // Write the updated content
    await fs.writeFile(filePath, updatedContent, 'utf-8');
    
    // Commit changes to git
    const { execSync } = require('child_process');
    try {
      execSync('git add src/lib/apps-data.ts', { cwd: process.cwd() });
      execSync(`git commit -m "${commitMessage || 'Update apps data from settings panel'}"`, { 
        cwd: process.cwd() 
      });
      execSync('git push origin main', { cwd: process.cwd() });
    } catch (gitError) {
      console.error('Git error:', gitError);
      // Continue even if git fails
    }
    
    return NextResponse.json({
      success: true,
      message: 'Apps updated and changes committed'
    });
  } catch (error) {
    console.error('Update apps error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to update apps' },
      { status: 500 }
    );
  }
}
