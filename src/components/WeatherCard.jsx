import { useEffect, useState } from "react";
import { getWeather } from "../services/weatherService";

function WeatherCard({ city }) {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchWeather() {
      try {
        const data = await getWeather(city);
        setWeather(data);
      } catch (err) {
       console.error(err);
        setError("Unable to load weather.");
      } finally {
        setLoading(false);
      }
    }

    if (city) {
      fetchWeather();
    }
  }, [city]);

  if (loading) {
    return (
      <div className="bg-white rounded-2xl shadow-md p-6">
        Loading weather...
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100 text-red-600 rounded-2xl p-6">
        {error}
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-4">
        Current Weather
      </h2>

      <div className="flex items-center gap-4">

        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt={weather.weather[0].description}
        />

        <div>

          <h3 className="text-xl font-semibold">
            {weather.name}
          </h3>

          <p className="capitalize">
            {weather.weather[0].description}
          </p>

          <p className="text-4xl font-bold mt-2">
            {Math.round(weather.main.temp)}°C
          </p>

        </div>

      </div>

      <div className="grid grid-cols-2 gap-4 mt-6">

        <div>
          <p className="text-gray-500">Humidity</p>
          <p className="font-semibold">
            {weather.main.humidity}%
          </p>
        </div>

        <div>
          <p className="text-gray-500">Wind</p>
          <p className="font-semibold">
            {weather.wind.speed} m/s
          </p>
        </div>

      </div>

    </div>
  );
}

export default WeatherCard;