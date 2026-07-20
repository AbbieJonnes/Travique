import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../config/firebase";

import {
  Map,
  Plane,
  Hotel,
  User,
  Clock,
  CheckCircle,
  Briefcase,
} from "lucide-react";

function Dashboard() {
  const { currentUser } = useAuth();

  const [fullName, setFullName] = useState("");

  useEffect(() => {
    async function loadUser() {
      if (!currentUser) return;

      try {
        const docRef = doc(db, "users", currentUser.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setFullName(docSnap.data().fullName);
        }
      } catch (error) {
        console.error(error);
      }
    }

    loadUser();
  }, [currentUser]);

  return (
    <div className="min-h-screen bg-sky-50">

      {/* Header */}

      <div className="bg-blue-700 text-white py-12">

        <div className="max-w-7xl mx-auto px-8">

          <h1 className="text-4xl font-bold">
            Hello {fullName || "Traveller"} 
          </h1>

          <p className="mt-4 text-lg">
            Ready for your next adventure?
          </p>

          <Link
            to="/destinations"
            className="inline-block mt-8 bg-amber-400 text-black px-8 py-4 rounded-xl font-semibold hover:bg-amber-300 transition"
          >
            Browse Destinations
          </Link>

        </div>

      </div>

      <div className="max-w-7xl mx-auto px-8 py-16">

        {/* Quick Actions */}

        <h2 className="text-3xl font-bold mb-8">
          Quick Actions
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <Link
            to="/destinations"
            className="bg-white rounded-3xl shadow-lg p-8 hover:-translate-y-2 transition"
          >
            <Map className="text-blue-700 mb-5" size={40} />

            <h3 className="text-xl font-bold">
              Destinations
            </h3>

            <p className="text-gray-600 mt-2">
              Explore amazing places.
            </p>

          </Link>

          <Link
            to="/my-trips"
            className="bg-white rounded-3xl shadow-lg p-8 hover:-translate-y-2 transition"
          >
            <Plane className="text-blue-700 mb-5" size={40} />

            <h3 className="text-xl font-bold">
              My Trips
            </h3>

            <p className="text-gray-600 mt-2">
              View your bookings.
            </p>

          </Link>

          <Link
            to="/hotel"
            className="bg-white rounded-3xl shadow-lg p-8 hover:-translate-y-2 transition"
          >
            <Hotel className="text-blue-700 mb-5" size={40} />

            <h3 className="text-xl font-bold">
              Hotels
            </h3>

            <p className="text-gray-600 mt-2">
              Reserve accommodation.
            </p>

          </Link>

          <Link
            to="/profile"
            className="bg-white rounded-3xl shadow-lg p-8 hover:-translate-y-2 transition"
          >
            <User className="text-blue-700 mb-5" size={40} />

            <h3 className="text-xl font-bold">
              Profile
            </h3>

            <p className="text-gray-600 mt-2">
              Manage your account.
            </p>

          </Link>

        </div>

        {/* Booking Overview */}

        <h2 className="text-3xl font-bold mt-20 mb-8">
          Booking Overview
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white rounded-3xl shadow-lg p-8">

            <Clock className="text-amber-500 mb-5" size={40} />

            <h3 className="text-4xl font-bold">
              0
            </h3>

            <p className="text-gray-600 mt-2">
              Pending Trips
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8">

            <CheckCircle className="text-green-600 mb-5" size={40} />

            <h3 className="text-4xl font-bold">
              0
            </h3>

            <p className="text-gray-600 mt-2">
              Approved Trips
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8">

            <Briefcase className="text-blue-700 mb-5" size={40} />

            <h3 className="text-4xl font-bold">
              0
            </h3>

            <p className="text-gray-600 mt-2">
              Completed Trips
            </p>

          </div>

        </div>

        {/* Recent Activity */}

        <div className="bg-white rounded-3xl shadow-lg p-10 mt-20">

          <h2 className="text-3xl font-bold mb-6">
            Recent Activity
          </h2>

          <p className="text-gray-500">
            You haven't booked any trips yet.
          </p>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;