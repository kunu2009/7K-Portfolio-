# Production Payment System Setup Guide

## Overview
This guide explains how to set up a production-grade payment system with automatic contributor tracking for your portfolio.

## Current Status
- ✅ Frontend UI with dynamic QR generation
- ✅ UPI payment integration
- ✅ Cumulative amount feature (click to add amounts)
- ⚠️ Mock data (needs database)
- ❌ No automatic tracking (needs webhook)

---

## 🚀 Production Setup Options

### Option 1: Razorpay + Supabase (Recommended)

**Why?**
- Razorpay is trusted and widely used in India
- Free tier for Supabase (500MB database)
- Easy integration with Next.js
- Automatic webhook for payment verification

#### Step 1: Setup Razorpay

1. **Create Account**
   - Go to https://razorpay.com
   - Sign up for a free account
   - Complete KYC verification (required for live payments)

2. **Get API Keys**
   ```bash
   # Add to your .env.local
   RAZORPAY_KEY_ID=rzp_test_xxxxx
   RAZORPAY_KEY_SECRET=xxxxx
   RAZORPAY_WEBHOOK_SECRET=xxxxx
   ```

3. **Install Razorpay SDK**
   ```bash
   npm install razorpay
   ```

#### Step 2: Setup Supabase Database

1. **Create Supabase Project**
   - Go to https://supabase.com
   - Create new project (free tier)
   - Save your project URL and anon key

2. **Create Contributors Table**
   ```sql
   -- Run this in Supabase SQL Editor
   create table contributors (
     id uuid default uuid_generate_v4() primary key,
     name text not null,
     amount numeric not null,
     date timestamp with time zone default now(),
     message text,
     transaction_id text unique,
     payment_status text default 'pending',
     email text,
     phone text,
     created_at timestamp with time zone default now()
   );

   -- Add index for faster queries
   create index idx_contributors_date on contributors(date desc);
   create index idx_transaction_id on contributors(transaction_id);
   ```

3. **Install Supabase Client**
   ```bash
   npm install @supabase/supabase-js
   ```

4. **Add Environment Variables**
   ```bash
   # Add to .env.local
   NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=xxxxx
   SUPABASE_SERVICE_ROLE_KEY=xxxxx
   ```

#### Step 3: Create Supabase Client

Create `src/lib/supabase.ts`:
```typescript
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseKey);

// For server-side operations (webhooks)
export const supabaseAdmin = createClient(
  supabaseUrl,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);
```

#### Step 4: Update Contributors Data File

Replace `src/lib/contributors-data.ts` with:
```typescript
import { supabase } from './supabase';

export type Contributor = {
  id?: string;
  name: string;
  amount: number;
  date: string;
  message?: string;
  transaction_id?: string;
  payment_status?: 'pending' | 'success' | 'failed';
};

export async function getContributors(): Promise<Contributor[]> {
  const { data, error } = await supabase
    .from('contributors')
    .select('*')
    .eq('payment_status', 'success')
    .order('date', { ascending: false });
  
  if (error) {
    console.error('Error fetching contributors:', error);
    return [];
  }
  
  return data || [];
}

export async function addContributor(contributor: Omit<Contributor, 'id'>): Promise<Contributor | null> {
  const { data, error } = await supabase
    .from('contributors')
    .insert([contributor])
    .select()
    .single();
  
  if (error) {
    console.error('Error adding contributor:', error);
    return null;
  }
  
  return data;
}

export async function getTotalRaised(): Promise<number> {
  const { data, error } = await supabase
    .from('contributors')
    .select('amount')
    .eq('payment_status', 'success');
  
  if (error) return 0;
  
  return data?.reduce((sum, c) => sum + c.amount, 0) || 0;
}

export async function getContributorCount(): Promise<number> {
  const { count, error } = await supabase
    .from('contributors')
    .select('*', { count: 'exact', head: true })
    .eq('payment_status', 'success');
  
  if (error) return 0;
  
  return count || 0;
}
```

#### Step 5: Create Razorpay Payment Flow

Create `src/app/api/create-payment/route.ts`:
```typescript
import { NextRequest, NextResponse } from 'next/server';
import Razorpay from 'razorpay';

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

export async function POST(request: NextRequest) {
  try {
    const { amount, name, message } = await request.json();
    
    const options = {
      amount: amount * 100, // Razorpay expects amount in paise
      currency: 'INR',
      receipt: `receipt_${Date.now()}`,
      notes: {
        name,
        message: message || '',
      },
    };
    
    const order = await razorpay.orders.create(options);
    
    return NextResponse.json({ 
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
    });
  } catch (error) {
    console.error('Error creating payment:', error);
    return NextResponse.json(
      { error: 'Failed to create payment' },
      { status: 500 }
    );
  }
}
```

#### Step 6: Create Webhook Handler

Create `src/app/api/webhook/payment/route.ts`:
```typescript
import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import { supabaseAdmin } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    const signature = request.headers.get('x-razorpay-signature');
    
    // Verify webhook signature
    const expectedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_WEBHOOK_SECRET!)
      .update(body)
      .digest('hex');
    
    if (signature !== expectedSignature) {
      return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
    }
    
    const event = JSON.parse(body);
    
    // Handle payment success
    if (event.event === 'payment.captured') {
      const payment = event.payload.payment.entity;
      const order = await razorpay.orders.fetch(payment.order_id);
      
      // Add to database
      const { error } = await supabaseAdmin
        .from('contributors')
        .insert([{
          name: order.notes.name,
          amount: payment.amount / 100,
          message: order.notes.message,
          transaction_id: payment.id,
          payment_status: 'success',
          email: payment.email,
          phone: payment.contact,
        }]);
      
      if (error) {
        console.error('Error adding contributor:', error);
      }
    }
    
    return NextResponse.json({ status: 'ok' });
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json({ error: 'Webhook failed' }, { status: 500 });
  }
}
```

#### Step 7: Update Frontend Component

Update `src/components/sections/support-section.tsx`:
```typescript
// Add this function
const handleRazorpayPayment = async () => {
  if (!amount || parseInt(amount) < 1) {
    toast({
      title: 'Invalid Amount',
      description: 'Please enter a valid amount',
      variant: 'destructive',
    });
    return;
  }

  try {
    // Create order
    const response = await fetch('/api/create-payment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        amount: parseInt(amount),
        name: 'Supporter', // You can add a name input field
        message: '', // Optional message field
      }),
    });

    const { orderId } = await response.json();

    // Open Razorpay checkout
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: parseInt(amount) * 100,
      currency: 'INR',
      name: 'Support Kunal',
      description: 'Thank you for your support!',
      order_id: orderId,
      handler: function (response: any) {
        toast({
          title: 'Payment Successful! 🎉',
          description: 'Thank you for your support!',
        });
        // Refresh contributors list
        window.location.reload();
      },
      prefill: {
        name: '',
        email: '',
        contact: '',
      },
      theme: {
        color: '#3399cc',
      },
    };

    const razorpay = new (window as any).Razorpay(options);
    razorpay.open();
  } catch (error) {
    toast({
      title: 'Payment Failed',
      description: 'Something went wrong. Please try again.',
      variant: 'destructive',
    });
  }
};
```

#### Step 8: Add Razorpay Script

Add to `src/app/layout.tsx`:
```tsx
<Script src="https://checkout.razorpay.com/v1/checkout.js" />
```

#### Step 9: Update Support Section to Use Real Data

Update the component to fetch real contributors:
```typescript
const [contributors, setContributors] = useState<Contributor[]>([]);

useEffect(() => {
  async function loadContributors() {
    const data = await getContributors();
    setContributors(data);
  }
  loadContributors();
}, []);

// Replace MOCK_CONTRIBUTORS with contributors in JSX
```

---

### Option 2: PhonePe + Firebase (Alternative)

1. **Setup PhonePe**
   - Register at https://business.phonepe.com
   - Complete merchant onboarding
   - Get API credentials

2. **Setup Firebase**
   - Create project at https://firebase.google.com
   - Enable Firestore Database
   - Create Cloud Function for webhook

3. **Similar flow to Razorpay** but using PhonePe APIs

---

## 🎯 Quick Start (Development)

For now, to test the UI without production setup:

1. Keep using `MOCK_CONTRIBUTORS` from `contributors-data.ts`
2. The UPI payment works but doesn't auto-track
3. Manually add contributors to `MOCK_CONTRIBUTORS` array

---

## 💡 Features Implemented

✅ **Cumulative Amount**
- Click +₹50, +₹100, +₹500, +₹1000 to add up amounts
- Example: Click +₹1000 then +₹500 = ₹1500
- Reset button to clear amount

✅ **Dynamic QR Code**
- Generates QR with amount embedded
- Works with all UPI apps (GPay, PhonePe, Paytm, etc.)

✅ **Contributors Display**
- Shows supporter cards with avatars
- Displays total raised and supporter count
- Beautiful animations and gradients

---

## 📝 Next Steps

1. **Choose payment provider** (Razorpay recommended)
2. **Setup database** (Supabase free tier is enough)
3. **Implement webhook** (automatic tracking)
4. **Add thank you modal** (after successful payment)
5. **Test with test payments** (before going live)
6. **Complete KYC** (required for live payments)

---

## 🔒 Security Notes

- Never expose secret keys in frontend code
- Always verify webhook signatures
- Use environment variables for sensitive data
- Enable Row Level Security (RLS) in Supabase
- Validate all inputs on the server side

---

## 📞 Support

If you need help with setup, let me know which option you want to pursue and I can provide more detailed steps!
