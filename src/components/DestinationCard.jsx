import { Link } from "react-router-dom";
import { MapPin, Star, Clock } from "lucide-react";

function DestinationCard({ destination }) {
  return (
    <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition duration-300">

      <img
        src={destination.image}
        alt={destination.name}
        className="h-64 w-full object-cover"
      />

      <div className="p-6">

        <div className="flex justify-between items-center">

          <h2 className="text-2xl font-bold">
            {destination.name}
          </h2>

          <div className="flex items-center gap-1 text-amber-500">

            <Star size={18} fill="currentColor" />

            <span className="font-semibold">
              {destination.rating}
            </span>

          </div>

        </div>

        <div className="flex items-center gap-2 text-gray-500 mt-3">

          <MapPin size={18} />

          <span>
            {destination.city}, {destination.country}
          </span>

        </div>

        <p className="text-gray-600 mt-4 line-clamp-3">
          {destination.description}
        </p>

        <div className="flex justify-between items-center mt-6">

          <div>

            <p className="text-gray-500 text-sm">
              Starting From
            </p>

            <h3 className="text-2xl font-bold text-blue-700">
              ${destination.price}
            </h3>

          </div>

          <div className="flex items-center gap-2 text-gray-500">

            <Clock size={18} />

            <span>
              {destination.duration}
            </span>

          </div>

        </div>

        <Link
          to={`/destinations/${destination.id}`}
          className="block text-center mt-8 bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-xl font-semibold transition"
        >
          View Details
        </Link>

      </div>

    </div>
  );
}

export default DestinationCard;