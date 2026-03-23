// Firebase configuration and initialization
import { initializeApp, getApps } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, doc, updateDoc, query, where, orderBy, Timestamp, deleteDoc } from "firebase/firestore";

// Firebase configuration - using environment variables
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase only if not already initialized
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);

// Testimonial interface
export interface Testimonial {
  id?: string;
  clientName: string;
  clientRole: string;
  clientCompany?: string;
  clientPhoto?: string;
  rating: number;
  text: string;
  projectType: string;
  date: string;
  createdAt: Timestamp | Date;
  status: "pending" | "approved" | "rejected";
  featured: boolean;
  helpful: number; // Number of people who found this helpful
  verified: boolean; // Verified purchase/project
}

// Collection reference
const testimonialCollection = collection(db, "testimonials");

// Add a new testimonial (public submission)
export async function submitTestimonial(testimonial: Omit<Testimonial, "id" | "createdAt" | "status" | "helpful" | "verified">): Promise<string> {
  const docRef = await addDoc(testimonialCollection, {
    ...testimonial,
    createdAt: Timestamp.now(),
    status: "pending", // All new submissions are pending
    helpful: 0,
    verified: false,
  });
  return docRef.id;
}

// Get all approved testimonials (for public display)
export async function getApprovedTestimonials(): Promise<Testimonial[]> {
  const q = query(
    testimonialCollection,
    where("status", "==", "approved"),
    orderBy("createdAt", "desc")
  );
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Testimonial[];
}

// Get all testimonials (for admin)
export async function getAllTestimonials(): Promise<Testimonial[]> {
  const q = query(testimonialCollection, orderBy("createdAt", "desc"));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Testimonial[];
}

// Update testimonial status (admin action)
export async function updateTestimonialStatus(
  id: string,
  status: "approved" | "rejected",
  verified?: boolean,
  featured?: boolean
): Promise<void> {
  const docRef = doc(db, "testimonials", id);
  await updateDoc(docRef, {
    status,
    ...(verified !== undefined && { verified }),
    ...(featured !== undefined && { featured }),
  });
}

// Delete testimonial (admin action)
export async function deleteTestimonial(id: string): Promise<void> {
  const docRef = doc(db, "testimonials", id);
  await deleteDoc(docRef);
}

// Increment helpful count
export async function markHelpful(id: string): Promise<void> {
  const docRef = doc(db, "testimonials", id);
  // Note: In production, use increment() from firebase/firestore
  const snapshot = await getDocs(query(testimonialCollection, where("__name__", "==", id)));
  if (!snapshot.empty) {
    const currentHelpful = snapshot.docs[0].data().helpful || 0;
    await updateDoc(docRef, { helpful: currentHelpful + 1 });
  }
}

// ==========================================
// DONOR SUBMISSION SYSTEM
// ==========================================

// Donor interface
export interface DonorSubmission {
  id?: string;
  name: string;
  amount: number;
  message?: string;
  email?: string; // For verification only, not displayed
  transactionId?: string;
  createdAt: Timestamp | Date;
  status: "pending" | "approved" | "rejected";
}

// Collection reference
const donorCollection = collection(db, "donors");

// Submit donor info for recognition
export async function submitDonor(donor: Omit<DonorSubmission, "id" | "createdAt" | "status">): Promise<string> {
  const docRef = await addDoc(donorCollection, {
    ...donor,
    createdAt: Timestamp.now(),
    status: "pending", // All new submissions need verification
  });
  return docRef.id;
}

// Get all approved donors (for public display)
export async function getApprovedDonors(): Promise<DonorSubmission[]> {
  const q = query(
    donorCollection,
    where("status", "==", "approved"),
    orderBy("createdAt", "desc")
  );
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as DonorSubmission[];
}

// Get all donors (for admin)
export async function getAllDonors(): Promise<DonorSubmission[]> {
  const q = query(donorCollection, orderBy("createdAt", "desc"));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as DonorSubmission[];
}

// Update donor status (admin action)
export async function updateDonorStatus(
  id: string,
  status: "approved" | "rejected"
): Promise<void> {
  const docRef = doc(db, "donors", id);
  await updateDoc(docRef, { status });
}

// ==========================================
// APP REVIEWS SYSTEM (Like App Store)
// ==========================================

// App Review interface
export interface AppReview {
  id?: string;
  appSlug: string; // e.g., "7k-life", "7k-lawprep"
  appName: string;
  userName: string;
  rating: number; // 1-5 stars
  title: string;
  review: string;
  createdAt: Timestamp | Date;
  status: "pending" | "approved" | "rejected";
  helpful: number;
  version?: string; // App version reviewed
}

// Collection reference
const appReviewCollection = collection(db, "app_reviews");

// Submit an app review
export async function submitAppReview(review: Omit<AppReview, "id" | "createdAt" | "status" | "helpful">): Promise<string> {
  const docRef = await addDoc(appReviewCollection, {
    ...review,
    createdAt: Timestamp.now(),
    status: "pending",
    helpful: 0,
  });
  return docRef.id;
}

// Get approved reviews for a specific app
export async function getAppReviews(appSlug: string): Promise<AppReview[]> {
  const q = query(
    appReviewCollection,
    where("appSlug", "==", appSlug),
    where("status", "==", "approved"),
    orderBy("createdAt", "desc")
  );
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as AppReview[];
}

// Get all app reviews (for admin)
export async function getAllAppReviews(): Promise<AppReview[]> {
  const q = query(appReviewCollection, orderBy("createdAt", "desc"));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as AppReview[];
}

// Update app review status (admin action)
export async function updateAppReviewStatus(
  id: string,
  status: "approved" | "rejected"
): Promise<void> {
  const docRef = doc(db, "app_reviews", id);
  await updateDoc(docRef, { status });
}

// Mark app review as helpful
export async function markAppReviewHelpful(id: string): Promise<void> {
  const docRef = doc(db, "app_reviews", id);
  const snapshot = await getDocs(query(appReviewCollection, where("__name__", "==", id)));
  if (!snapshot.empty) {
    const currentHelpful = snapshot.docs[0].data().helpful || 0;
    await updateDoc(docRef, { helpful: currentHelpful + 1 });
  }
}

// Get average rating for an app
export async function getAppAverageRating(appSlug: string): Promise<{ average: number; count: number }> {
  const reviews = await getAppReviews(appSlug);
  if (reviews.length === 0) return { average: 0, count: 0 };
  const total = reviews.reduce((sum, r) => sum + r.rating, 0);
  return { average: total / reviews.length, count: reviews.length };
}

export { db, app };
