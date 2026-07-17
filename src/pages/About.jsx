import { Plane, Globe, ShieldCheck, HeartHandshake } from "lucide-react";

function About() {
  return (
    <div className="min-h-screen bg-sky-50 py-16 px-6">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-bold text-center text-blue-700">
          About Travique
        </h1>

        <p className="text-center text-gray-600 mt-5 max-w-3xl mx-auto">
          Travique is a modern travel booking platform designed to help
          travellers discover amazing destinations, make bookings,
          complete reservations, and manage their trips with ease.
        </p>

        <div className="grid md:grid-cols-2 gap-10 mt-16">

          <div className="bg-white rounded-3xl shadow-lg p-8">

            <Plane className="text-blue-700 mb-5" size={40} />

            <h2 className="text-2xl font-bold mb-4">
              Our Mission
            </h2>

            <p className="text-gray-600 leading-8">
              To simplify travel planning by bringing destinations,
              accommodation, reservations and secure payments together
              into one easy-to-use platform.
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8">

            <Globe className="text-blue-700 mb-5" size={40} />

            <h2 className="text-2xl font-bold mb-4">
              Our Vision
            </h2>

            <p className="text-gray-600 leading-8">
              To become Africa's most trusted travel companion by helping
              travellers discover the world confidently and affordably.
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8">

            <ShieldCheck className="text-blue-700 mb-5" size={40} />

            <h2 className="text-2xl font-bold mb-4">
              Secure Bookings
            </h2>

            <p className="text-gray-600 leading-8">
              Every booking is reviewed by our administrators to ensure
              accuracy and provide a safe travel experience.
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8">

            <HeartHandshake className="text-blue-700 mb-5" size={40} />

            <h2 className="text-2xl font-bold mb-4">
              Customer First
            </h2>

            <p className="text-gray-600 leading-8">
              From booking to payment and reservation, Travique is built
              around making every traveller's journey simple and memorable.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default About;