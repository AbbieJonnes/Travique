import { Link, useLocation } from "react-router-dom";
import { CheckCircle } from "lucide-react";

function Reservation() {
  const { state } = useLocation();

  const destination = state?.destination;

  return (
    <div className="min-h-screen bg-sky-50 flex items-center justify-center px-6">

      <div className="bg-white shadow-xl rounded-3xl p-10 max-w-2xl w-full">

        <div className="flex justify-center mb-6">

          <CheckCircle
            size={70}
            className="text-green-600"
          />

        </div>

        <h1 className="text-4xl font-bold text-center">
          Booking Submitted Successfully!
        </h1>

        <p className="text-center text-gray-600 mt-4">
          Your booking request has been received successfully.
        </p>

        {destination && (

          <div className="mt-8 bg-sky-50 rounded-2xl p-6">

            <h2 className="text-xl font-bold">
              Destination
            </h2>

            <p className="mt-2">
              {destination.name}
            </p>

            <p className="mt-4">
              <span className="font-semibold">
                Status:
              </span>

              <span className="ml-2 bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">

                Pending Approval

              </span>

            </p>

          </div>

        )}

        <div className="mt-8 bg-gray-50 rounded-2xl p-6">

          <h2 className="font-bold text-xl mb-4">
            What Happens Next?
          </h2>

          <p className="text-gray-600 leading-8">

            A confirmation email has already been sent to your email address.

            <br /><br />

            Our administrators will review your booking request.

            <br /><br />

            Once approved, you'll receive another email with a quick link that allows you to continue with your reservation.

          </p>

        </div>

        <div className="flex gap-4 mt-10">

          <Link
            to="/"
            className="flex-1 bg-blue-700 text-white text-center py-4 rounded-xl font-semibold hover:bg-blue-800"
          >
            Back to Home
          </Link>

          <Link
            to="/profile"
            className="flex-1 border-2 border-blue-700 text-blue-700 text-center py-4 rounded-xl font-semibold hover:bg-blue-700 hover:text-white"
          >
            View My Profile
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Reservation;