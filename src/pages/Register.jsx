import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);

      await register(name, email, password);

      navigate("/login");

    } catch (error) {
        switch (error.code) {
          case "auth/email-already-in-use":
            setError("This email is already registered.");
            break;
      
          case "auth/weak-password":
            setError("Password must be at least 6 characters.");
            break;
      
          case "auth/invalid-email":
            setError("Please enter a valid email address.");
            break;
      
          default:
            setError("Failed to create account. Please try again.");
        }
      }

    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-sky-50 flex justify-center items-center px-6">

      <div className="bg-white shadow-xl rounded-3xl p-10 w-full max-w-md">

        <h1 className="text-4xl font-bold text-center text-blue-700">
          Create Account
        </h1>

        <p className="text-center text-gray-500 mt-3 mb-8">
          Welcome to Travique
        </p>

        {error && (
          <div className="bg-red-100 text-red-600 p-3 rounded-lg mb-5">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full border rounded-xl p-4"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full border rounded-xl p-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded-xl p-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full border rounded-xl p-4"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

<button
  disabled={loading}
  className="w-full bg-blue-700 hover:bg-blue-800 text-white py-4 rounded-xl font-semibold disabled:opacity-50"
>
  {loading ? "Creating Account..." : "Create Account"}
</button>
        
        </form>

        <p className="text-center mt-8">

          Already have an account?

          <Link
            to="/login"
            className="text-blue-700 font-semibold ml-2"
          >
            Login
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Register;