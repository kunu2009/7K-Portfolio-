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

export { db, app };
