import { createContext, useContext, useEffect, useState } from "react";

import { useAuth } from "./AuthContext";

import { getUserBookings } from "../services/bookingService";


export const BookingContext = createContext();


export function BookingProvider({ children }) {

  const { currentUser } = useAuth();

  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);


  async function fetchBookings() {

    if (!currentUser) {
      setBookings([]);
      setLoading(false);
      return;
    }


    try {

      setLoading(true);

      const data = await getUserBookings(
        currentUser.uid
      );

      setBookings(data);


    } catch (error) {

      console.error(
        "Failed to fetch bookings:",
        error
      );

    } finally {

      setLoading(false);

    }
  }



  useEffect(() => {

    fetchBookings();

  }, [currentUser]);



  const value = {

    bookings,

    loading,

    fetchBookings,

  };


  return (
    <BookingContext.Provider value={value}>
      {children}
    </BookingContext.Provider>
  );
}



export function useBooking() {

  return useContext(BookingContext);

}