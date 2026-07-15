import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { MapPin, Star, Clock, Calendar } from "lucide-react";

function DestinationDetails() {
  const { id } = useParams();

  const [destination, setDestination] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDestination() {
      try {
        const response = await fetch("/destination.json");
        const data = await response.json();

        const selectedDestination = data.find(
          (item) => item.id === Number(id)
        );

        setDestination(selectedDestination);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchDestination();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        Loading...
      </div>
    );
  }

  if (!destination) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        Destination not found.
      </div>
    );
  }

  return (
    <div className="bg-sky-50 min-h-screen py-12">

      <div className="max-w-7xl mx-auto px-8">

        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-[500px] object-cover rounded-3xl shadow-xl"
        />

        <div className="mt-10">

          <div className="flex justify-between items-center flex-wrap gap-4">

            <div>

              <h1 className="text-5xl font-bold">
                {destination.name}
              </h1>

              <div className="flex items-center gap-2 text-gray-600 mt-4">

                <MapPin size={20} />

                <span>
                  {destination.city}, {destination.country}
                </span>

              </div>

            </div>

            <div className="flex items-center gap-2 text-amber-500">

              <Star fill="currentColor" />

              <span className="font-bold text-xl">
                {destination.rating}
              </span>

            </div>

          </div>

          <p className="mt-8 text-lg text-gray-700 leading-8">
            {destination.description}
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">

            <div className="bg-white rounded-2xl p-6 shadow">

              <Clock className="text-blue-700 mb-4" />

              <h3 className="font-bold">
                Duration
              </h3>

              <p>{destination.duration}</p>

            </div>

            <div className="bg-white rounded-2xl p-6 shadow">

              <Calendar className="text-blue-700 mb-4" />

              <h3 className="font-bold">
                Best Time
              </h3>

              <p>{destination.bestTimeToVisit}</p>

            </div>

            <div className="bg-white rounded-2xl p-6 shadow">

              <h3 className="font-bold text-blue-700 text-3xl">
                ${destination.price}
              </h3>

              <p className="text-gray-500">
                Starting Price
              </p>

            </div>

          </div>

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

            <Link
              to="/booking"
              className="bg-blue-700 text-white px-10 py-4 rounded-xl font-semibold hover:bg-blue-800"
            >
              Book Trip
            </Link>

            <Link
              to="/destinations"
              className="border-2 border-blue-700 text-blue-700 px-10 py-4 rounded-xl font-semibold hover:bg-blue-700 hover:text-white"
            >
              Back
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}

export default DestinationDetails;