const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

export async function getWeather(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error("Weather not found");
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

