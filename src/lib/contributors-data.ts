/**
 * Contributors Data
 * Store and manage supporters/contributors information
 * 
 * In production, this should be connected to a database like:
 * - Supabase
 * - Firebase Firestore
 * - MongoDB
 * - PostgreSQL
 * 
 * And integrated with UPI payment webhook/callback to automatically add contributors
 */

export type Contributor = {
  id?: string;
  name: string;
  amount: number;
  date: string;
  message?: string;
  transactionId?: string;
};

// Contributors data - Update this list when someone donates
export const MOCK_CONTRIBUTORS: Contributor[] = [
  {
    id: '1',
    name: 'Razi S.',
    amount: 50,
    date: '2025-01-23',
    message: 'Keep building amazing projects!'
  },
];

/**
 * Get all contributors sorted by date (newest first)
 */
export async function getContributors(): Promise<Contributor[]> {
  // TODO: Replace with actual database query
  // Example with Supabase:
  // const { data, error } = await supabase
  //   .from('contributors')
  //   .select('*')
  //   .order('date', { ascending: false });
  
  return MOCK_CONTRIBUTORS.sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

/**
 * Add a new contributor
 * This should be called after verifying the payment
 */
export async function addContributor(contributor: Omit<Contributor, 'id'>): Promise<Contributor> {
  // TODO: Replace with actual database insert
  // Example with Supabase:
  // const { data, error } = await supabase
  //   .from('contributors')
  //   .insert([contributor])
  //   .select()
  //   .single();
  
  const newContributor: Contributor = {
    ...contributor,
    id: Date.now().toString(),
  };
  
  MOCK_CONTRIBUTORS.unshift(newContributor);
  return newContributor;
}

/**
 * Get total amount raised
 */
export async function getTotalRaised(): Promise<number> {
  const contributors = await getContributors();
  return contributors.reduce((sum, c) => sum + c.amount, 0);
}

/**
 * Get contributor count
 */
export async function getContributorCount(): Promise<number> {
  const contributors = await getContributors();
  return contributors.length;
}

/**
 * Verify UPI payment (placeholder)
 * 
 * In production, you would:
 * 1. Set up UPI payment gateway with webhook support (Razorpay, PhonePe, etc.)
 * 2. Receive payment confirmation via webhook
 * 3. Verify the transaction
 * 4. Add contributor automatically
 * 
 * Example flow:
 * - User pays via UPI
 * - Payment gateway sends webhook to your API
 * - API verifies transaction
 * - API calls addContributor()
 * - User sees thank you message and appears in contributors list
 */
export async function verifyAndAddContributor(
  transactionId: string,
  name: string,
  amount: number,
  message?: string
): Promise<{ success: boolean; contributor?: Contributor }> {
  try {
    // TODO: Verify transaction with payment gateway
    // const verified = await paymentGateway.verifyTransaction(transactionId);
    
    // if (!verified) {
    //   return { success: false };
    // }
    
    const contributor = await addContributor({
      name,
      amount,
      date: new Date().toISOString(),
      message,
      transactionId,
    });
    
    return { success: true, contributor };
  } catch (error) {
    console.error('Error verifying payment:', error);
    return { success: false };
  }
}
