import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import { createBooking } from "../services/bookingService";

function BookingForm() {
  const location = useLocation();
  const navigate = useNavigate();

  const destination = location.state?.destination;

  const user = auth.currentUser;


  const [formData, setFormData] = useState({
    fullName: "",
    email: user?.email || "",
    phone: "",
    travelDate: "",
    travellers: 1,
    specialRequests: "",
  });


  const [loading, setLoading] = useState(false);


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!destination) {
      alert("No destination selected");
      return;
    }


    try {
      setLoading(true);


      const bookingData = {

        userId: user.uid,

        destinationId: destination.id,
        destinationName: destination.name,
        country: destination.country,
        price: destination.price,

        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,

        travelDate: formData.travelDate,
        travellers: Number(formData.travellers),

        specialRequests: formData.specialRequests,

      };


      await createBooking(bookingData);


      alert(
        "Your booking request has been submitted successfully."
      );


      navigate("/profile");


    } catch (error) {

      console.error(error);
      alert("Failed to submit booking");

    } finally {

      setLoading(false);

    }
  };


  if (!destination) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-bold">
          No destination selected
        </h2>
      </div>
    );
  }


  return (
    <div className="min-h-screen bg-sky-50 py-12 px-6">

      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-8">

        <h1 className="text-4xl font-bold mb-3">
          Book {destination.name}
        </h1>


        <p className="text-gray-600 mb-8">
          {destination.city}, {destination.country}
        </p>


        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full border p-3 rounded-xl"
            required
          />


          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-3 rounded-xl"
            required
          />


          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border p-3 rounded-xl"
            required
          />


          <label className="block font-semibold">
            Travel Date
          </label>

          <input
            type="date"
            name="travelDate"
            value={formData.travelDate}
            onChange={handleChange}
            className="w-full border p-3 rounded-xl"
            required
          />


          <input
            type="number"
            name="travellers"
            min="1"
            value={formData.travellers}
            onChange={handleChange}
            className="w-full border p-3 rounded-xl"
          />


          <textarea
            name="specialRequests"
            placeholder="Special requests"
            value={formData.specialRequests}
            onChange={handleChange}
            className="w-full border p-3 rounded-xl"
          />


          <button
            disabled={loading}
            className="w-full bg-blue-700 text-white py-4 rounded-xl font-bold hover:bg-blue-800"
          >

            {loading ? "Submitting..." : "Confirm Booking"}

          </button>


        </form>

      </div>

    </div>
  );
}

export default BookingForm;