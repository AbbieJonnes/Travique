import {
    UtensilsCrossed,
    MapPin,
    Star,
    Phone,
    Globe,
    Map,
  } from "lucide-react";
  
  function RestaurantCard({ restaurant }) {
    const props = restaurant.properties;
  
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      props.formatted || props.name
    )}`;
  
    return (
      <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-6 border border-sky-100">
  
        <div className="flex items-center gap-3 mb-5">
  
          <div className="bg-orange-100 p-3 rounded-full">
            <UtensilsCrossed className="text-orange-500" />
          </div>
  
          <h2 className="text-xl font-bold text-slate-800">
            {props.name || "Unnamed Restaurant"}
          </h2>
  
        </div>
  
        <div className="space-y-4 text-slate-600">
  
          <div className="flex gap-3">
            <MapPin
              className="text-red-500 mt-1"
              size={18}
            />
  
            <p>
              {props.formatted || "Address unavailable"}
            </p>
          </div>
  
          {props.catering && (
            <div className="flex gap-3">
  
              <UtensilsCrossed
                className="text-orange-500 mt-1"
                size={18}
              />
  
              <p>{props.catering}</p>
  
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
  
          {props.contact?.phone && (
            <div className="flex gap-3">
  
              <Phone
                className="text-green-600 mt-1"
                size={18}
              />
  
              <p>{props.contact.phone}</p>
  
            </div>
          )}
  
        </div>
  
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
  
  export default RestaurantCard;