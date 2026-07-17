import { MapPin, Building2, ExternalLink } from "lucide-react";

function HotelCard({ hotel }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-5 hover:shadow-xl transition duration-300">

      <div className="flex items-center gap-2 mb-3">
        <Building2 className="text-blue-600" size={22} />
        <h3 className="text-lg font-semibold text-gray-800">
          {hotel.properties.name || "Unnamed Hotel"}
        </h3>
      </div>

      <div className="flex items-start gap-2 text-gray-600 mb-4">
        <MapPin size={18} className="mt-1 text-red-500" />
        <p>
          {hotel.properties.formatted || "Address unavailable"}
        </p>
      </div>

      {hotel.properties.website ? (
        <a
          href={hotel.properties.website}
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

export default HotelCard;