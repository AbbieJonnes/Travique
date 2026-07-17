import { useEffect, useState } from "react";
import {
  ClipboardList,
  Clock,
  CheckCircle,
  XCircle,
} from "lucide-react";

import AdminLayout from "../../components/AdminLayout";
import { getAllBookings } from "../../services/bookingService";

function AdminDashboard() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    async function loadBookings() {
      const data = await getAllBookings();
      setBookings(data);
    }

    loadBookings();
  }, []);

  const pending = bookings.filter(
    (booking) => booking.status === "Pending"
  ).length;

  const approved = bookings.filter(
    (booking) => booking.status === "Approved"
  ).length;

  const rejected = bookings.filter(
    (booking) => booking.status === "Rejected"
  ).length;

  return (
    <AdminLayout>

      <h1 className="text-4xl font-bold mb-2">
        Welcome Back 👋
      </h1>

      <p className="text-gray-500 mb-10">
        Here's what's happening on Travique today.
      </p>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

        <div className="bg-white rounded-2xl shadow-md p-6">

          <ClipboardList
            className="text-blue-700 mb-4"
            size={40}
          />

          <h2 className="text-gray-500">
            Total Bookings
          </h2>

          <p className="text-4xl font-bold mt-3">
            {bookings.length}
          </p>

        </div>

        <div className="bg-white rounded-2xl shadow-md p-6">

          <Clock
            className="text-yellow-500 mb-4"
            size={40}
          />

          <h2 className="text-gray-500">
            Pending
          </h2>

          <p className="text-4xl font-bold mt-3">
            {pending}
          </p>

        </div>

        <div className="bg-white rounded-2xl shadow-md p-6">

          <CheckCircle
            className="text-green-600 mb-4"
            size={40}
          />

          <h2 className="text-gray-500">
            Approved
          </h2>

          <p className="text-4xl font-bold mt-3">
            {approved}
          </p>

        </div>

        <div className="bg-white rounded-2xl shadow-md p-6">

          <XCircle
            className="text-red-600 mb-4"
            size={40}
          />

          <h2 className="text-gray-500">
            Rejected
          </h2>

          <p className="text-4xl font-bold mt-3">
            {rejected}
          </p>

        </div>

      </div>

      <div className="bg-white rounded-2xl shadow-md mt-10 p-6">

        <h2 className="text-2xl font-bold mb-6">
          Recent Bookings
        </h2>

        <table className="w-full">

          <thead>

            <tr className="border-b">

              <th className="text-left py-4">Traveller</th>

              <th className="text-left">Destination</th>

              <th className="text-left">Status</th>

            </tr>

          </thead>

          <tbody>

            {bookings.slice(0, 5).map((booking) => (

              <tr
                key={booking.id}
                className="border-b"
              >

                <td className="py-4">
                  {booking.fullName}
                </td>

                <td>
                  {booking.destination}
                </td>

                <td>

                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold
                    ${
                      booking.status === "Approved"
                        ? "bg-green-100 text-green-700"
                        : booking.status === "Rejected"
                        ? "bg-red-100 text-red-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {booking.status}
                  </span>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </AdminLayout>
  );
}

export default AdminDashboard;