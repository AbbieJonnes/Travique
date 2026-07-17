import { Mail, Phone, MapPin } from "lucide-react";

function Contact() {
  return (
    <div className="min-h-screen bg-sky-50 py-16 px-6">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-5xl font-bold text-center text-blue-700">
          Contact Us
        </h1>

        <p className="text-center text-gray-600 mt-4">
          We'd love to hear from you.
        </p>

        <div className="grid md:grid-cols-2 gap-10 mt-16">

          <div className="bg-white rounded-3xl shadow-lg p-8 space-y-8">

            <div className="flex gap-5">

              <Mail className="text-blue-700" />

              <div>

                <h3 className="font-bold">
                  Email
                </h3>

                <p className="text-gray-600">
                  support@travique.com
                </p>

              </div>

            </div>

            <div className="flex gap-5">

              <Phone className="text-blue-700" />

              <div>

                <h3 className="font-bold">
                  Phone
                </h3>

                <p className="text-gray-600">
                  +254 700 123 456
                </p>

              </div>

            </div>

            <div className="flex gap-5">

              <MapPin className="text-blue-700" />

              <div>

                <h3 className="font-bold">
                  Office
                </h3>

                <p className="text-gray-600">
                  Nairobi, Kenya
                </p>

              </div>

            </div>

          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8">

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full border rounded-xl p-4"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full border rounded-xl p-4"
              />

              <textarea
                rows="6"
                placeholder="Your Message"
                className="w-full border rounded-xl p-4"
              />

              <button
                className="w-full bg-blue-700 hover:bg-blue-800 text-white py-4 rounded-xl font-bold"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Contact;