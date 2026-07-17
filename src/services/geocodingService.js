const API_KEY = import.meta.env.VITE_GEOAPIFY_API_KEY;

export async function getCoordinates(city) {
  try {
    const response = await fetch(
      `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(
        city
      )}&limit=1&apiKey=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch coordinates.");
    }

    const data = await response.json();

    if (data.features.length === 0) {
      return null;
    }

    return {
      lat: data.features[0].properties.lat,
      lon: data.features[0].properties.lon,
    };
  } catch (error) {
    console.error(error);
    return null;
  }
}