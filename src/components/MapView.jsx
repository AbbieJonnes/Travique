import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
  } from "react-leaflet";
  
  import "leaflet/dist/leaflet.css";
  
  import L from "leaflet";
  
  // Fix missing Leaflet marker icons in Vite
  delete L.Icon.Default.prototype._getIconUrl;
  
  L.Icon.Default.mergeOptions({
    iconRetinaUrl:
      "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    iconUrl:
      "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl:
      "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  });
  
  function MapView({
    center,
    hotels = [],
    restaurants = [],
    attractions = [],
  }) {
    if (!center) return null;
  
    return (
      <div className="w-full h-[600px] rounded-3xl overflow-hidden shadow-xl border border-sky-100">
  
        <MapContainer
          center={[center.lat, center.lon]}
          zoom={13}
          scrollWheelZoom={true}
          className="h-full w-full"
        >
          <TileLayer
            attribution='&copy; OpenStreetMap contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
  
          {/* Destination Marker */}
  
          <Marker position={[center.lat, center.lon]}>
            <Popup>
  
              📍 Destination
  
            </Popup>
          </Marker>
  
          {/* Hotels */}
  
          {hotels.map((hotel) => (
  
            <Marker
              key={hotel.properties.place_id}
              position={[
                hotel.properties.lat,
                hotel.properties.lon,
              ]}
            >
              <Popup>
  
                🏨 {hotel.properties.name}
  
              </Popup>
            </Marker>
  
          ))}
  
          {/* Restaurants */}
  
          {restaurants.map((restaurant) => (
  
            <Marker
              key={restaurant.properties.place_id}
              position={[
                restaurant.properties.lat,
                restaurant.properties.lon,
              ]}
            >
              <Popup>
  
                🍽️ {restaurant.properties.name}
  
              </Popup>
            </Marker>
  
          ))}
  
          {/* Attractions */}
  
          {attractions.map((attraction) => (
  
            <Marker
              key={attraction.properties.place_id}
              position={[
                attraction.properties.lat,
                attraction.properties.lon,
              ]}
            >
              <Popup>
  
                🏛️ {attraction.properties.name}
  
              </Popup>
            </Marker>
  
          ))}
  
        </MapContainer>
  
      </div>
    );
  }
  
  export default MapView;