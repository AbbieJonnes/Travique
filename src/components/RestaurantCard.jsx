import { MapPin, UtensilsCrossed, ExternalLink } from "lucide-react";

function RestaurantCard({ restaurant }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-5 hover:shadow-xl transition duration-300">

      <div className="flex items-center gap-2 mb-3">
        <UtensilsCrossed className="text-orange-500" size={22} />

        <h3 className="text-lg font-semibold text-gray-800">
          {restaurant.properties.name || "Unnamed Restaurant"}
        </h3>
      </div>

      <div className="flex items-start gap-2 text-gray-600 mb-4">
        <MapPin
          size={18}
          className="mt-1 text-red-500"
        />

        <p>
          {restaurant.properties.formatted ||
            "Address unavailable"}
        </p>
      </div>

      {restaurant.properties.website ? (
        <a
          href={restaurant.properties.website}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
        >
          Visit Website
          <ExternalLink size={18} />
        </a>
      ) : (
        <p className="text-sm text-gray-400">
          No website available
        </p>
      )}

    </div>
  );
}

export default RestaurantCard;