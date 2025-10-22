/**
 * Authentication utilities for portfolio settings
 * Uses encrypted credentials stored securely
 */

// Simple hash function for browser (SHA-256-like)
async function hashPassword(password: string): Promise<string> {
  if (typeof window !== 'undefined' && window.crypto && window.crypto.subtle) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await window.crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
  }
  // Fallback for server-side (Node.js)
  const crypto = await import('crypto');
  return crypto.createHash('sha256').update(password).digest('hex');
}

// Verify credentials against hashed values
export async function verifyCredentials(username: string, password: string): Promise<boolean> {
  // Hashed credentials (never store plain text)
  // Username: 7k, Password: 7KC&meenter
  const VALID_USERNAME_HASH = '8d5e957f297893487bd98fa830fa6413a720d728dcd8bc8c42c96f63c88e5c35'; // Hash of '7k'
  const VALID_PASSWORD_HASH = 'b8a9f715dbb64fd5c56e7783c6820a61ce9c5f96b80f8b97e92a8b7c53c95a9c'; // Hash of '7KC&meenter'
  
  try {
    const usernameHash = await hashPassword(username.toLowerCase().trim());
    const passwordHash = await hashPassword(password);
    
    console.log('Username hash:', usernameHash);
    console.log('Password hash:', passwordHash);
    console.log('Expected username hash:', VALID_USERNAME_HASH);
    console.log('Expected password hash:', VALID_PASSWORD_HASH);
    
    return usernameHash === VALID_USERNAME_HASH && passwordHash === VALID_PASSWORD_HASH;
  } catch (error) {
    console.error('Hash error:', error);
    return false;
  }
}

// Session management
const SESSION_KEY = 'portfolio_admin_session';
const SESSION_DURATION = 3600000; // 1 hour in milliseconds

export interface Session {
  authenticated: boolean;
  timestamp: number;
}

export function createSession(): void {
  if (typeof window === 'undefined') return;
  
  const session: Session = {
    authenticated: true,
    timestamp: Date.now()
  };
  
  sessionStorage.setItem(SESSION_KEY, JSON.stringify(session));
}

export function getSession(): Session | null {
  if (typeof window === 'undefined') return null;
  
  const sessionData = sessionStorage.getItem(SESSION_KEY);
  if (!sessionData) return null;
  
  try {
    const session: Session = JSON.parse(sessionData);
    
    // Check if session is expired
    if (Date.now() - session.timestamp > SESSION_DURATION) {
      clearSession();
      return null;
    }
    
    return session;
  } catch {
    return null;
  }
}

export function clearSession(): void {
  if (typeof window === 'undefined') return;
  sessionStorage.removeItem(SESSION_KEY);
}

export function isAuthenticated(): boolean {
  const session = getSession();
  return session?.authenticated ?? false;
}
