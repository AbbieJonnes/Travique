import { MapPin } from "lucide-react";

function RestaurantCard({ restaurant }) {
  const info = restaurant.properties;

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">

      <h3 className="text-xl font-bold">
        {info.name || "Restaurant"}
      </h3>

      <div className="flex items-center gap-2 mt-3 text-gray-600">
        <MapPin size={18} />
        <span>
          {info.address_line2 || info.formatted}
        </span>
      </div>

      <a
        href={`https://www.google.com/maps/search/?api=1&query=${info.lat},${info.lon}`}
        target="_blank"
        rel="noreferrer"
        className="inline-block mt-5 bg-blue-700 text-white px-5 py-2 rounded-lg hover:bg-blue-800"
      >
        View on Maps
      </a>

    </div>
  );
}

export default RestaurantCard;