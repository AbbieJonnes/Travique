import {
    MapPin,
    Landmark,
    ExternalLink,
    Info,
  } from "lucide-react";
  
  function AttractionCard({ attraction }) {
    return (
      <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
  
        {/* Header */}
        <div className="bg-gradient-to-r from-sky-500 to-blue-600 p-5">
  
          <div className="flex items-center gap-3">
  
            <div className="bg-white/20 p-3 rounded-full">
              <Landmark
                size={24}
                className="text-white"
              />
            </div>
  
            <h3 className="text-xl font-bold text-white">
              {attraction.properties.name ||
                "Unnamed Attraction"}
            </h3>
  
          </div>
  
        </div>
  
        {/* Content */}
        <div className="p-5 space-y-4">
  
          <div className="flex items-start gap-2 text-gray-600">
  
            <MapPin
              size={18}
              className="text-red-500 mt-1"
            />
  
            <p>
              {attraction.properties.formatted ||
                "Location unavailable"}
            </p>
  
          </div>
  
          {attraction.properties.datasource?.raw?.description && (
            <div className="flex items-start gap-2">
  
              <Info
                size={18}
                className="text-sky-600 mt-1"
              />
  
              <p className="text-gray-600 text-sm">
                {attraction.properties.datasource.raw.description}
              </p>
  
            </div>
          )}
  
          {attraction.properties.website ? (
            <a
              href={attraction.properties.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition"
            >
              Visit Attraction
  
              <ExternalLink size={18} />
            </a>
          ) : (
            <p className="text-sm text-gray-400">
              No website available
            </p>
          )}
  
        </div>
  
      </div>
    );
  }
  
  export default AttractionCard;