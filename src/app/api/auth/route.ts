import { NextRequest, NextResponse } from 'next/server';
import { verifyCredentials } from '@/lib/auth';

// Portfolio Settings Authentication API
export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json();
    
    if (!username || !password) {
      return NextResponse.json(
        { success: false, message: 'Username and password required' },
        { status: 400 }
      );
    }
    
    const isValid = await verifyCredentials(username, password);
    
    console.log('[AUTH API] Login attempt:', { username, isValid });
    
    if (isValid) {
      return NextResponse.json({
        success: true,
        message: 'Authentication successful'
      });
    } else {
      return NextResponse.json(
        { success: false, message: 'Invalid credentials' },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error('Auth error:', error);
    return NextResponse.json(
      { success: false, message: 'Authentication failed' },
      { status: 500 }
    );
  }
}
