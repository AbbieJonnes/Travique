import { useEffect, useState } from "react";
import AdminLayout from "../../components/AdminLayout";

import {
  getAllBookings,
  updateBookingStatus,
} from "../../services/bookingService";

import { sendEmail } from "../../services/emailService";

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
    try {
      // Update Firestore
      await updateBookingStatus(id, status);

      // Find booking
      const booking = bookings.find((b) => b.id === id);

      if (booking) {
        if (status === "Approved") {
          await sendEmail({
            email: booking.email,
            user_name: booking.fullName,
            subject: "🎉 Your Travique Booking Has Been Approved!",
            message: `
Hello ${booking.fullName},

Congratulations!

Your booking request for:

Destination:
${booking.destinationName}

has been APPROVED.

You can now continue your reservation.

Click the link below to continue your reservation:

https://travique-orpin.vercel.app/reservation

Your next steps are:

✔ Choose your preferred hotel
✔ Select optional tours
✔ Confirm your reservation
✔ Complete your payment
✔ Receive your receipt

Thank you for choosing Travique.

Safe Travels!

Travique Team
            `,
          });
        } else {
          await sendEmail({
            email: booking.email,
            user_name: booking.fullName,
            subject: "Travique Booking Update",
            message: `
Hello ${booking.fullName},

Unfortunately, your booking request for:

${booking.destinationName}

was not approved.

You are welcome to make another booking anytime.

Thank you for choosing Travique.

Travique Team
            `,
          });
        }
      }

      await loadBookings();

      alert(`Booking ${status.toLowerCase()} successfully.`);
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }
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
                Travel Date
              </th>

              <th className="p-4 text-left">
                Travellers
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
                  {booking.destinationName}
                </td>

                <td className="p-4">
                  {booking.travelDate}
                </td>

                <td className="p-4">
                  {booking.travellers}
                </td>

                <td className="p-4">

                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
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

                <td className="p-4 space-x-2">

                  <button
                    disabled={booking.status === "Approved"}
                    onClick={() =>
                      handleStatus(
                        booking.id,
                        "Approved"
                      )
                    }
                    className="bg-green-600 text-white px-4 py-2 rounded-lg disabled:opacity-50"
                  >
                    Approve
                  </button>

                  <button
                    disabled={booking.status === "Rejected"}
                    onClick={() =>
                      handleStatus(
                        booking.id,
                        "Rejected"
                      )
                    }
                    className="bg-red-600 text-white px-4 py-2 rounded-lg disabled:opacity-50"
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