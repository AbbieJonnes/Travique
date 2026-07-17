import { Link } from "react-router-dom";
import { AlertTriangle } from "lucide-react";

function NotFound() {
  return (
    <div className="min-h-screen bg-sky-50 flex items-center justify-center px-6">

      <div className="bg-white rounded-3xl shadow-xl p-12 text-center max-w-xl">

        <AlertTriangle
          size={80}
          className="mx-auto text-yellow-500"
        />

        <h1 className="text-7xl font-bold text-blue-700 mt-6">
          404
        </h1>

        <h2 className="text-3xl font-bold mt-5">
          Page Not Found
        </h2>

        <p className="text-gray-600 mt-5 leading-8">
          Sorry, the page you are looking for doesn't exist or may
          have been moved.
        </p>

        <Link
          to="/"
          className="inline-block mt-10 bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-xl font-bold"
        >
          Back Home
        </Link>

      </div>

    </div>
  );
}

export default NotFound;