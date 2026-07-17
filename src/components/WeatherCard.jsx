function WeatherCard({ weather }) {
  if (!weather) {
    return (
      <div className="bg-white rounded-2xl shadow-md p-6">
        Loading weather...
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