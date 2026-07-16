const API_KEY = import.meta.env.VITE_GEOAPIFY_API_KEY;

const BASE_URL = "https://api.geoapify.com/v2/places";

async function fetchPlaces(category, lat, lon) {
  try {
    const response = await fetch(
      `${BASE_URL}?categories=${category}&filter=circle:${lon},${lat},5000&limit=10&apiKey=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch places.");
    }

    const data = await response.json();

    return data.features;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getHotels(lat, lon) {
  return fetchPlaces("accommodation.hotel", lat, lon);
}

export async function getRestaurants(lat, lon) {
  return fetchPlaces("catering.restaurant", lat, lon);
}

export async function getAttractions(lat, lon) {
  return fetchPlaces("tourism.attraction", lat, lon);
}