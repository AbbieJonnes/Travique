import {
    Landmark,
    MapPin,
    Info,
    Clock3,
    Star,
    Globe,
    Map,
  } from "lucide-react";
  
  function AttractionCard({ attraction }) {
    const props = attraction.properties;
  
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      props.formatted || props.name
    )}`;
  
    const description =
      props.datasource?.raw?.description ||
      props.description ||
      null;
  
    return (
      <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-6 border border-sky-100">
  
        {/* Header */}
        <div className="flex items-center gap-3 mb-5">
  
          <div className="bg-blue-100 p-3 rounded-full">
            <Landmark className="text-blue-600" />
          </div>
  
          <h2 className="text-xl font-bold text-slate-800">
            {props.name || "Unnamed Attraction"}
          </h2>
  
        </div>
  
        {/* Content */}
        <div className="space-y-4 text-slate-600">
  
          <div className="flex gap-3">
            <MapPin
              className="text-red-500 mt-1"
              size={18}
            />
  
            <p>
              {props.formatted || "Location unavailable"}
            </p>
          </div>
  
          {description && (
            <div className="flex gap-3">
  
              <Info
                className="text-sky-600 mt-1"
                size={18}
              />
  
              <p className="line-clamp-3">
                {description}
              </p>
  
            </div>
          )}
  
          {props.opening_hours && (
            <div className="flex gap-3">
  
              <Clock3
                className="text-green-600 mt-1"
                size={18}
              />
  
              <p>{props.opening_hours}</p>
  
            </div>
          )}
  
          {props.rating && (
            <div className="flex gap-3">
  
              <Star
                className="text-yellow-500 mt-1"
                size={18}
              />
  
              <p>{props.rating} / 5</p>
  
            </div>
          )}
  
        </div>
  
        {/* Buttons */}
        <div className="flex flex-wrap gap-3 mt-8">
  
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-sky-600 text-white px-5 py-2 rounded-full hover:bg-sky-700 transition"
          >
            <Map size={18} />
            View on Maps
          </a>
  
          {props.website && (
            <a
              href={props.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-sky-600 text-sky-600 px-5 py-2 rounded-full hover:bg-sky-50 transition"
            >
              <Globe size={18} />
              Website
            </a>
          )}
  
        </div>
  
      </div>
    );
  }
  
  export default AttractionCard;