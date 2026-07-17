import { Link, useLocation } from "react-router-dom";
import { CheckCircle, Receipt, Download, Home, User } from "lucide-react";

function ReceiptPage() {
  const { state } = useLocation();

  if (!state) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-bold">
          No receipt available.
        </h2>
      </div>
    );
  }

  const {
    booking,
    hotel,
    tours,
    total,
    phone,
    paymentMethod,
    receiptNumber,
    paymentDate,
  } = state;

  return (
    <div className="min-h-screen bg-sky-50 py-12 px-6">

      <div className="max-w-4xl mx-auto">

        {/* Success Card */}

        <div className="bg-white rounded-3xl shadow-xl p-10">

          <div className="flex justify-center">

            <CheckCircle
              size={80}
              className="text-green-600"
            />

          </div>

          <h1 className="text-4xl font-bold text-center mt-6 text-green-700">
            Payment Successful
          </h1>

          <p className="text-center text-gray-600 mt-3">
            Thank you for booking with Travique.
          </p>

          {/* Receipt */}

          <div className="bg-slate-50 rounded-3xl p-8 mt-10">

            <div className="flex justify-between items-center mb-8">

              <div>

                <h2 className="text-3xl font-bold text-blue-700">
                  Travique
                </h2>

                <p className="text-gray-500">
                  Travel Receipt
                </p>

              </div>

              <Receipt
                size={45}
                className="text-blue-700"
              />

            </div>

            <div className="grid md:grid-cols-2 gap-8">

              <div>

                <p className="text-gray-500">
                  Receipt Number
                </p>

                <p className="font-bold">
                  {receiptNumber}
                </p>

              </div>

              <div>

                <p className="text-gray-500">
                  Payment Date
                </p>

                <p className="font-bold">
                  {paymentDate}
                </p>

              </div>

              <div>

                <p className="text-gray-500">
                  Traveller
                </p>

                <p className="font-bold">
                  {booking?.fullName}
                </p>

              </div>

              <div>

                <p className="text-gray-500">
                  Phone
                </p>

                <p className="font-bold">
                  {phone}
                </p>

              </div>

              <div>

                <p className="text-gray-500">
                  Destination
                </p>

                <p className="font-bold">
                  {booking?.destinationName}
                </p>

              </div>

              <div>

                <p className="text-gray-500">
                  Country
                </p>

                <p className="font-bold">
                  {booking?.country}
                </p>

              </div>

              <div>

                <p className="text-gray-500">
                  Hotel
                </p>

                <p className="font-bold">
                  {hotel?.properties?.name || "No Hotel Selected"}
                </p>

              </div>

              <div>

                <p className="text-gray-500">
                  Payment Method
                </p>

                <p className="font-bold">
                  {paymentMethod}
                </p>

              </div>

            </div>

            {/* Tours */}

            <div className="mt-10">

              <h3 className="font-bold text-xl mb-4">
                Tours Selected
              </h3>

              {tours && tours.length > 0 ? (

                <ul className="space-y-3">

                  {tours.map((tour) => (

                    <li
                      key={tour.properties.place_id}
                      className="flex justify-between"
                    >

                      <span>
                        {tour.properties.name}
                      </span>

                      <span>
                        USD {tour.demoPrice}
                      </span>

                    </li>

                  ))}

                </ul>

              ) : (

                <p className="text-gray-500">
                  No optional tours selected.
                </p>

              )}

            </div>

            {/* Total */}

            <div className="mt-10 border-t pt-6 flex justify-between items-center">

              <span className="text-2xl font-bold">
                Total Paid
              </span>

              <span className="text-3xl font-bold text-blue-700">
                USD {total}
              </span>

            </div>

          </div>

          {/* Buttons */}

          <div className="grid md:grid-cols-3 gap-4 mt-10">

            <button
              className="bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-bold flex justify-center items-center gap-2"
            >

              <Download size={20} />

              Download Receipt

            </button>

            <Link
              to="/profile"
              className="border-2 border-blue-700 text-blue-700 rounded-xl py-4 font-bold flex justify-center items-center gap-2 hover:bg-blue-700 hover:text-white"
            >

              <User size={20} />

              My Profile

            </Link>

            <Link
              to="/"
              className="bg-blue-700 hover:bg-blue-800 text-white rounded-xl py-4 font-bold flex justify-center items-center gap-2"
            >

              <Home size={20} />

              Back Home

            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ReceiptPage;