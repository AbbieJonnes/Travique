import { useEffect, useState } from "react";

import AdminLayout from "../../components/AdminLayout";

import {
  getAllBookings,
  updateBookingStatus,
} from "../../services/bookingService";

function AdminBookings() {

  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    loadBookings();
  }, []);

  async function loadBookings() {
    const data = await getAllBookings();
    setBookings(data);
  }

  async function handleStatus(id, status) {

    await updateBookingStatus(id, status);

    loadBookings();

  }

  return (

    <AdminLayout>

      <h1 className="text-4xl font-bold mb-8">
        Manage Bookings
      </h1>

      <div className="bg-white rounded-2xl shadow-md overflow-hidden">

        <table className="w-full">

          <thead className="bg-slate-100">

            <tr>

              <th className="p-4 text-left">
                Traveller
              </th>

              <th className="p-4 text-left">
                Destination
              </th>

              <th className="p-4 text-left">
                Status
              </th>

              <th className="p-4 text-left">
                Action
              </th>

            </tr>

          </thead>

          <tbody>

            {bookings.map((booking) => (

              <tr
                key={booking.id}
                className="border-t"
              >

                <td className="p-4">
                  {booking.fullName}
                </td>

                <td className="p-4">
                  {booking.destination}
                </td>

                <td className="p-4">

                  <span
                    className={`px-3 py-1 rounded-full text-sm

                    ${
                      booking.status==="Approved"
                      ? "bg-green-100 text-green-700"

                      : booking.status==="Rejected"

                      ? "bg-red-100 text-red-700"

                      : "bg-yellow-100 text-yellow-700"

                    }`}
                  >

                    {booking.status}

                  </span>

                </td>

                <td className="p-4 space-x-3">

                  <button

                    onClick={() =>
                      handleStatus(
                        booking.id,
                        "Approved"
                      )
                    }

                    className="bg-green-600 text-white px-4 py-2 rounded-lg"

                  >

                    Approve

                  </button>

                  <button

                    onClick={() =>
                      handleStatus(
                        booking.id,
                        "Rejected"
                      )
                    }

                    className="bg-red-600 text-white px-4 py-2 rounded-lg"

                  >

                    Reject

                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </AdminLayout>

  );

}

export default AdminBookings;