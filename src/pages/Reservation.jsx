import { Link } from "react-router-dom";
import { MapPin, Hotel, Compass, CreditCard } from "lucide-react";

function Reservation() {
  return (
    <div className="min-h-screen bg-sky-50 py-12 px-6">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold text-center text-blue-700">
          Continue Your Reservation
        </h1>

        <p className="text-center text-gray-600 mt-3">
          Your booking has been approved.
          Complete your reservation by selecting your hotel,
          optional tours and payment.
        </p>

        {/* Destination */}

        <div className="bg-white rounded-3xl shadow-lg p-8 mt-10">

          <div className="flex items-center gap-3 mb-6">

            <MapPin className="text-blue-700" />

            <h2 className="text-2xl font-bold">
              Destination
            </h2>

          </div>

          <p className="text-gray-600">
            Your approved destination will appear here.
          </p>

        </div>

        {/* Hotel */}

        <div className="bg-white rounded-3xl shadow-lg p-8 mt-8">

          <div className="flex items-center gap-3 mb-6">

            <Hotel className="text-blue-700" />

            <h2 className="text-2xl font-bold">
              Choose Your Hotel
            </h2>

          </div>

          <p className="text-gray-600">
            Hotels will appear here.
          </p>

        </div>

        {/* Tours */}

        <div className="bg-white rounded-3xl shadow-lg p-8 mt-8">

          <div className="flex items-center gap-3 mb-6">

            <Compass className="text-blue-700" />

            <h2 className="text-2xl font-bold">
              Optional Tours
            </h2>

          </div>

          <p className="text-gray-600">
            Optional activities will appear here.
          </p>

        </div>

        {/* Summary */}

        <div className="bg-white rounded-3xl shadow-lg p-8 mt-8">

          <h2 className="text-2xl font-bold mb-6">
            Reservation Summary
          </h2>

          <div className="space-y-3">

            <div className="flex justify-between">
              <span>Destination</span>
              <span>KES 0</span>
            </div>

            <div className="flex justify-between">
              <span>Hotel</span>
              <span>KES 0</span>
            </div>

            <div className="flex justify-between">
              <span>Tours</span>
              <span>KES 0</span>
            </div>

            <hr />

            <div className="flex justify-between text-2xl font-bold">

              <span>Total</span>

              <span>KES 0</span>

            </div>

          </div>

        </div>

        {/* Buttons */}

        <div className="flex gap-4 mt-10">

          <button
            className="flex-1 bg-blue-700 hover:bg-blue-800 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2"
          >

            <CreditCard />

            Continue to Payment

          </button>

          <Link
            to="/profile"
            className="flex-1 border-2 border-blue-700 text-blue-700 text-center py-4 rounded-xl font-semibold hover:bg-blue-700 hover:text-white"
          >

            Back to Profile

          </Link>


          <Link
  to="/"
  className="inline-flex items-center text-blue-700 font-semibold hover:underline mb-6"
>
  ← Back to Home
</Link>

        </div>

      </div>

    </div>
  );
}

export default Reservation;