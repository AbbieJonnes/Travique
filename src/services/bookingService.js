import {
    collection,
    addDoc,
    getDocs,
    getDoc,
    doc,
    query,
    where,
    updateDoc,
    serverTimestamp,
  } from "firebase/firestore";
  
  import { db } from "../config/firebase";
  
  // Create a new booking
  export async function createBooking(bookingData) {
    const docRef = await addDoc(collection(db, "bookings"), {
      ...bookingData,
      status: "Pending",
      createdAt: serverTimestamp(),
    });
  
    return docRef.id;
  }
  
  // Get bookings for one user
  export async function getUserBookings(userId) {
    const q = query(
      collection(db, "bookings"),
      where("userId", "==", userId)
    );
  
    const snapshot = await getDocs(q);
  
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  }
  
  // Get all bookings (Admin)
  export async function getAllBookings() {
    const snapshot = await getDocs(collection(db, "bookings"));
  
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  }
  
  // Get one booking
  export async function getBooking(id) {
    const snapshot = await getDoc(doc(db, "bookings", id));
  
    if (!snapshot.exists()) {
      return null;
    }
  
    return {
      id: snapshot.id,
      ...snapshot.data(),
    };
  }
  
  // Update booking status
  export async function updateBookingStatus(id, status) {
    await updateDoc(doc(db, "bookings", id), {
      status,
    });
  }

  // Get all users (Admin)
export async function getAllUsers() {
  const snapshot = await getDocs(collection(db, "users"));

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}