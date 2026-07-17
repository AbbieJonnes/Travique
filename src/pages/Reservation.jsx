import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Hotel,
  Compass,
  CreditCard,
} from "lucide-react";

import { auth } from "../config/firebase";

import {
  getApprovedBookings,
} from "../services/bookingService";

import {
  getCoordinates,
} from "../services/geocodingService";

import {
  getHotels,
  getAttractions,
} from "../services/placesService";

function Reservation() {

  const [booking, setBooking] = useState(null);

  const [hotels, setHotels] = useState([]);

  const [attractions, setAttractions] = useState([]);

  const [selectedHotel, setSelectedHotel] = useState(null);

  const [selectedTours, setSelectedTours] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function loadReservation() {

      try {

        const bookings = await getApprovedBookings(
          auth.currentUser.uid
        );

        if (bookings.length === 0) {

          setLoading(false);
          return;

        }

        const approvedBooking = bookings[0];

        setBooking(approvedBooking);

        const coordinates = await getCoordinates(
          approvedBooking.city
        );

        if (!coordinates) {

          setLoading(false);
          return;

        }

        const hotelsData = await getHotels(
          coordinates.lat,
          coordinates.lon
        );

        const attractionsData =
          await getAttractions(
            coordinates.lat,
            coordinates.lon
          );

        const hotelsWithPrices =
          hotelsData.map((hotel) => ({

            ...hotel,

            demoPrice:
              Math.floor(Math.random() * 120) + 80,

          }));

        const attractionsWithPrices =
          attractionsData.map((tour) => ({

            ...tour,

            demoPrice:
              Math.floor(Math.random() * 60) + 20,

          }));

        setHotels(hotelsWithPrices);

        setAttractions(attractionsWithPrices);

      } catch (error) {

        console.error(error);

      }

      setLoading(false);

    }

    loadReservation();

  }, []);

  function toggleTour(tour) {

    const exists = selectedTours.find(

      (item) =>

        item.properties.place_id ===
        tour.properties.place_id

    );

    if (exists) {

      setSelectedTours(

        selectedTours.filter(

          (item) =>

            item.properties.place_id !==
            tour.properties.place_id

        )

      );

    } else {

      setSelectedTours([

        ...selectedTours,

        tour,

      ]);

    }

  }

  function toggleTour(tour) {

    const exists = selectedTours.find(

      (item) =>

        item.properties.place_id ===
        tour.properties.place_id

    );

    if (exists) {

      setSelectedTours(

        selectedTours.filter(

          (item) =>

            item.properties.place_id !==
            tour.properties.place_id

        )

      );

    } else {

      setSelectedTours([

        ...selectedTours,

        tour,

      ]);

    }

  }
  const total = useMemo(() => {

    if (!booking) return 0;

    const hotelPrice =

      selectedHotel
        ? selectedHotel.demoPrice
        : 0;

    const toursPrice =
      selectedTours.reduce(

        (sum, tour) => sum + tour.demoPrice,

        0

      );

    return booking.price + hotelPrice + toursPrice;

  }, [

    booking,

    selectedHotel,

    selectedTours,

  ]);

  if (loading) {

    return (

      <div className="min-h-screen flex justify-center items-center">

        <h2 className="text-2xl font-bold">

          Loading reservation...

        </h2>

      </div>

    );

  }

  if (!booking) {

    return (

      <div className="min-h-screen flex justify-center items-center">

        <h2 className="text-2xl font-bold">

          No approved booking found.

        </h2>

      </div>

    );

  }

  return (<div className="min-h-screen bg-sky-50 py-12 px-6">

    <div className="max-w-6xl mx-auto">
  
      <h1 className="text-4xl font-bold text-center text-blue-700">
        Continue Your Reservation
      </h1>
  
      <p className="text-center text-gray-600 mt-3">
        Your booking has been approved. Complete your reservation by selecting your hotel and optional tours.
      </p>
  
      {/* Destination */}
  
      <div className="bg-white rounded-3xl shadow-lg p-8 mt-10">
  
        <div className="flex items-center gap-3 mb-8">
  
          <MapPin className="text-blue-700" />
  
          <h2 className="text-3xl font-bold">
            Approved Trip
          </h2>
  
        </div>
  
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
  
          <div>
  
            <p className="text-gray-500">Destination</p>
  
            <p className="font-bold text-xl">
              {booking.destinationName}
            </p>
  
          </div>
  
          <div>
  
            <p className="text-gray-500">Country</p>
  
            <p className="font-bold text-xl">
              {booking.country}
            </p>
  
          </div>
  
          <div>
  
            <p className="text-gray-500">Travel Date</p>
  
            <p className="font-bold">
              {booking.travelDate}
            </p>
  
          </div>
  
          <div>
  
            <p className="text-gray-500">Travellers</p>
  
            <p className="font-bold">
              {booking.travellers}
            </p>
  
          </div>
  
          <div>
  
            <p className="text-gray-500">Trip Cost</p>
  
            <p className="text-3xl font-bold text-blue-700">
              USD {booking.price}
            </p>
  
          </div>
  
        </div>
  
      </div>
  
      {/* Hotels */}
  
      <div className="bg-white rounded-3xl shadow-lg p-8 mt-8">
  
        <div className="flex items-center gap-3 mb-8">
  
          <Hotel className="text-blue-700" />
  
          <h2 className="text-3xl font-bold">
            Choose Your Hotel
          </h2>
  
        </div>
  
        <div className="grid md:grid-cols-2 gap-6">
  
          {hotels.map((hotel) => (
  
            <div
  
              key={hotel.properties.place_id}
  
              onClick={() => setSelectedHotel(hotel)}
  
              className={`border rounded-2xl p-6 cursor-pointer transition
  
              ${
                selectedHotel?.properties.place_id === hotel.properties.place_id
                  ? "border-blue-700 bg-blue-50"
                  : "hover:shadow-lg"
              }`}
  
            >
  
              <h3 className="text-xl font-bold">
                {hotel.properties.name || "Hotel"}
              </h3>
  
              <p className="text-gray-500 mt-2">
                {hotel.properties.address_line2}
              </p>
  
              <p className="text-blue-700 font-bold mt-5">
                USD {hotel.demoPrice}
              </p>
  
            </div>
  
          ))}
  
        </div>
  
      </div>
  
      {/* Tours */}
  
      <div className="bg-white rounded-3xl shadow-lg p-8 mt-8">
  
        <div className="flex items-center gap-3 mb-8">
  
          <Compass className="text-blue-700" />
  
          <h2 className="text-3xl font-bold">
            Optional Tours
          </h2>
  
        </div>
  
        <div className="grid md:grid-cols-2 gap-6">
  
          {attractions.map((tour) => (
  
            <div
  
              key={tour.properties.place_id}
  
              onClick={() => toggleTour(tour)}
  
              className={`border rounded-2xl p-6 cursor-pointer transition
  
              ${
                selectedTours.find(
                  (item) =>
                    item.properties.place_id === tour.properties.place_id
                )
                  ? "border-green-600 bg-green-50"
                  : "hover:shadow-lg"
              }`}
  
            >
  
              <h3 className="text-xl font-bold">
                {tour.properties.name || "Tour"}
              </h3>
  
              <p className="text-gray-500 mt-2">
                {tour.properties.address_line2}
              </p>
  
              <p className="text-green-700 font-bold mt-5">
                USD {tour.demoPrice}
              </p>
  
            </div>
  
          ))}
  
        </div>
  
      </div>
  
      {/* Reservation Summary */}
  
      <div className="bg-white rounded-3xl shadow-lg p-8 mt-8">
  
        <h2 className="text-3xl font-bold mb-8">
          Reservation Summary
        </h2>
  
        <div className="space-y-4">
  
          <div className="flex justify-between">
  
            <span>Trip</span>
  
            <span>USD {booking.price}</span>
  
          </div>
  
          <div className="flex justify-between">
  
            <span>Hotel</span>
  
            <span>
              USD {selectedHotel?.demoPrice || 0}
            </span>
  
          </div>
  
          <div className="flex justify-between">
  
            <span>Tours</span>
  
            <span>
  
              USD {
  
                selectedTours.reduce(
  
                  (sum, item) => sum + item.demoPrice,
  
                  0
  
                )
  
              }
  
            </span>
  
          </div>
  
          <hr />
  
          <div className="flex justify-between text-3xl font-bold text-blue-700">
  
            <span>Total</span>
  
            <span>USD {total}</span>
  
          </div>
  
        </div>
  
      </div>
  
      {/* Buttons */}
  
      <div className="flex flex-wrap gap-4 mt-10">
  
        <button
  
          className="flex-1 bg-blue-700 hover:bg-blue-800 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2"
  
        >
  
          <CreditCard size={20} />
  
          Continue to Payment
  
        </button>
  
        <Link
  
          to="/profile"
  
          className="flex-1 border-2 border-blue-700 text-blue-700 py-4 rounded-xl text-center font-semibold hover:bg-blue-700 hover:text-white"
  
        >
  
          Back to Profile
  
        </Link>
  
        <Link
  
          to="/"
  
          className="flex-1 border-2 border-gray-300 py-4 rounded-xl text-center font-semibold hover:bg-gray-100"
  
        >
  
          Back to Home
  
        </Link>
  
      </div>
  
    </div>
  
  </div>
    );
}

export default Reservation;