import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  MapPin,
  Star,
  Clock,
  Calendar,
  ArrowLeft,
} from "lucide-react";

import Loader from "../components/Loader";
import WeatherCard from "../components/WeatherCard";
import MapView from "../components/MapView";
import HotelCard from "../components/HotelCard";
import RestaurantCard from "../components/RestaurantCard";
import AttractionCard from "../components/AttractionCard";

import { getWeather } from "../services/weatherService";
import {
  getHotels,
  getRestaurants,
  getAttractions,
} from "../services/placesService";

function DestinationDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [destination, setDestination] = useState(null);
  const [loading, setLoading] =useState(true);
  const [weather, setWeather] = useState(null);

const [coordinates, setCoordinates] = useState(null);

const [hotels, setHotels] = useState([]);

const [restaurants, setRestaurants] = useState([]);

const [attractions, setAttractions] = useState([]);


  useEffect(() => {
    async function fetchDestination() {
      try {
        const response = await fetch("/destination.json");
        const data = await response.json();
    
        const selectedDestination = data.find(
          (item) => item.id === Number(id)
        );
    
        setDestination(selectedDestination);
    
        if (!selectedDestination) return;
    
        // Weather
        const weatherData = await getWeather(selectedDestination.city);
        setWeather(weatherData);

        
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchDestination();
}, [id]);

  if (loading) {
    return <Loader />;
  }

  if (!destination) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <h2 className="text-3xl font-bold">
          Destination not found.
        </h2>
      </div>
    );
  }

  return (
    <div className="bg-sky-50 min-h-screen py-12">

      <div className="max-w-7xl mx-auto px-8">

        <Link
          to="/destinations"
          className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:underline mb-8"
        >
          <ArrowLeft size={20} />
          Back to Destinations
        </Link>

        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-[500px] object-cover rounded-3xl shadow-xl"
        />

        <div className="mt-10 flex justify-between items-start flex-wrap gap-6">

          <div>

            <h1 className="text-5xl font-bold">
              {destination.name}
            </h1>

            <div className="flex items-center gap-2 mt-4 text-gray-600">

              <MapPin size={20} />

              <span>
                {destination.city}, {destination.country}
              </span>

            </div>

          </div>

          <div className="flex items-center gap-2 text-amber-500 text-xl">

            <Star fill="currentColor" />

            <span className="font-bold">
              {destination.rating}
            </span>

          </div>

        </div>

        <p className="mt-8 text-lg leading-8 text-gray-700">
          {destination.description}
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">

          <div className="bg-white rounded-2xl shadow-lg p-6">

            <Clock className="text-blue-700 mb-4" />

            <h3 className="font-bold text-xl">
              Duration
            </h3>

            <p className="mt-2 text-gray-600">
              {destination.duration}
            </p>

          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">

            <Calendar className="text-blue-700 mb-4" />

            <h3 className="font-bold text-xl">
              Best Time To Visit
            </h3>

            <p className="mt-2 text-gray-600">
              {destination.bestTimeToVisit}
            </p>

          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">

            <h3 className="text-blue-700 text-4xl font-bold">
              ${destination.price}
            </h3>

            <p className="mt-2 text-gray-600">
              Starting Price
            </p>

          </div>

        </div>

        {/* Weather */}

{weather && (
  <div className="mt-14">
    <h2 className="text-3xl font-bold mb-6">
      Current Weather
    </h2>

    <WeatherCard weather={weather} />
  </div>
)}

{/* Map */}

{coordinates && (
  <div className="mt-14">
    <h2 className="text-3xl font-bold mb-6">
      Location
    </h2>

    <MapView
      lat={coordinates.lat}
      lon={coordinates.lon}
      destination={destination}
    />
  </div>
)}


      {/* Hotels */}

{hotels.length > 0 && (
  <div className="mt-14">

    <h2 className="text-3xl font-bold mb-6">
      Hotels Nearby
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

      {hotels.map((hotel) => (
        <HotelCard
          key={hotel.properties.place_id}
          hotel={hotel}
        />
      ))}

    </div>

  </div>
)}


   {/* Restaurants */}

{restaurants.length > 0 && (
  <div className="mt-14">

    <h2 className="text-3xl font-bold mb-6">
      Restaurants Nearby
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

      {restaurants.map((restaurant) => (
        <RestaurantCard
          key={restaurant.properties.place_id}
          restaurant={restaurant}
        />
      ))}

    </div>

  </div>
)}


   {/* Attractions */}

{attractions.length > 0 && (
  <div className="mt-14">

    <h2 className="text-3xl font-bold mb-6">
      Tourist Attractions
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

      {attractions.map((attraction) => (
        <AttractionCard
          key={attraction.properties.place_id}
          attraction={attraction}
        />
      ))}

    </div>

  </div>
)}
   


        <div className="mt-14">

          <h2 className="text-3xl font-bold mb-6">
            Activities
          </h2>

          <div className="flex flex-wrap gap-4">

            {destination.activities.map((activity) => (
              <span
                key={activity}
                className="bg-blue-700 text-white px-5 py-3 rounded-full"
              >
                {activity}
              </span>
            ))}

          </div>

        </div>

        <div className="mt-16 flex gap-6">

        <button
  onClick={() =>
    navigate("/booking", {
      state: {
        destination,
      },
    })
  }
  className="bg-blue-700 hover:bg-blue-800 text-white px-10 py-4 rounded-xl font-semibold transition"
>
  Book Trip
</button>
          <Link
            to="/destinations"
            className="border-2 border-blue-700 text-blue-700 px-10 py-4 rounded-xl font-semibold hover:bg-blue-700 hover:text-white transition"
          >
            Explore More
          </Link>

        </div>

      </div>

    </div>
  );
}

export default DestinationDetails;