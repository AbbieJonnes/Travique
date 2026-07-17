import { createContext, useContext, useEffect, useState } from "react";

import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  getDocs,
  query,
  where,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "../config/firebase";

import { useAuth } from "./AuthContext";


export const FavoritesContext = createContext();


export function FavoritesProvider({ children }) {

  const { currentUser } = useAuth();

  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);



  async function fetchFavorites() {

    if (!currentUser) {
      setFavorites([]);
      setLoading(false);
      return;
    }


    try {

      setLoading(true);


      const q = query(
        collection(db, "favorites"),
        where("userId", "==", currentUser.uid)
      );


      const snapshot = await getDocs(q);


      const data = snapshot.docs.map((item) => ({
        id: item.id,
        ...item.data(),
      }));


      setFavorites(data);


    } catch (error) {

      console.error(
        "Failed to fetch favorites:",
        error
      );

    } finally {

      setLoading(false);

    }
  }



  async function addFavorite(destination) {

    if (!currentUser) return;


    await addDoc(collection(db, "favorites"), {

      userId: currentUser.uid,

      destinationId: destination.id,

      name: destination.name,

      city: destination.city,

      country: destination.country,

      image: destination.image,

      price: destination.price,

      createdAt: serverTimestamp(),

    });


    fetchFavorites();

  }




  async function removeFavorite(id) {

    await deleteDoc(
      doc(db, "favorites", id)
    );


    fetchFavorites();

  }




  function isFavorite(destinationId) {

    return favorites.some(
      (item) =>
        item.destinationId === destinationId
    );

  }



  useEffect(() => {

    fetchFavorites();

  }, [currentUser]);



  const value = {

    favorites,

    loading,

    addFavorite,

    removeFavorite,

    isFavorite,

    fetchFavorites,

  };



  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );

}



export function useFavorites() {

  return useContext(FavoritesContext);

}