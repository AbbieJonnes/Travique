import { Link } from "react-router-dom";
import { Menu, Moon, Plane, MapPin, Compass, ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

function Home() {
  const { darkMode, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();

  function handleExploreTrips() {
    if (currentUser) {
      navigate("/destinations");
    } else {
      navigate("/login");
    }
  }


  const destinations = [
    {
      name: "Bali, Indonesia",
      image:
        "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800",
    },
    {
      name: "Santorini, Greece",
      image:
        "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800",
    },
    {
      name: "Dubai, UAE",
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800",
    },
    {
      name: "Maasai Mara",
      image:
        "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800",
    },
    {
      name: "Paris",
      image:
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800",
    },
    {
      name: "Maldives",
      image:
        "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800",
    },
  ];

  return (
    <div className="bg-background text-foreground transition-colors duration-300">

      {/* ================= NAVBAR ================= */}

      <nav className="fixed top-0 left-0 w-full bg-background/95 backdrop-blur-md shadow-sm z-50">

        <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">

          <Link
            to="/"
            className="text-3xl font-extrabold text-blue-700"
          >
            Travique
          </Link>

          <div className="hidden lg:flex items-center gap-10 font-medium text-foreground">

            <Link to="/" className="hover:text-blue-700">
              Home
            </Link>

            <Link to="/about" className="hover:text-blue-700">
              About
            </Link>

            <Link to="/contact" className="hover:text-blue-700">
              Contact
            </Link>

          </div>

          <div className="hidden lg:flex items-center gap-4">

<button
  onClick={toggleTheme}
  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-700 transition"
>
  {darkMode ? <Sun size={20} /> : <Moon size={20} />}
</button>

{currentUser ? (
  <>
    <Link
      to="/dashboard"
      className="text-blue-700 font-semibold"
    >
      Dashboard
    </Link>

    <button
      onClick={async () => {
        await logout();
        navigate("/");
      }}
      className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
    >
      Logout
    </button>
  </>
) : (
  <Link
    to="/login"
    className="text-blue-700 font-semibold"
  >
    Login
  </Link>
)}

</div>

          <button className="lg:hidden">
            <Menu />
          </button>

        </div>

      </nav>

      {/* ================= HERO ================= */}

      <section className="pt-36 pb-24">

        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <div>

            <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium mb-6">
               Discover Amazing Destinations
            </span>

            <h1 className="text-6xl font-black leading-tight text-gray-900">

              Your Journey

              <span className="block text-blue-700">
                Begins Here
              </span>

            </h1>

            <p className="mt-8 text-lg text-gray-600 leading-8 max-w-xl">

              Discover incredible destinations, request trips,
              receive approval, reserve accommodation,
              and enjoy unforgettable adventures with Travique.

            </p>

            <div className="flex gap-5 mt-10">

              <Link
                to="/register"
                className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-xl font-semibold"
              >
                Get Started
              </Link>
             
              <button onClick={handleExploreTrips}
                className="border-2 border-blue-700 px-8 py-4 rounded-xl font-semibold text-blue-700 hover:bg-blue-700 hover:text-white"
              >
               Explore Trips
               </button>
            </div>

            <div className="flex gap-12 mt-14">

              <div className="flex items-center gap-3">

                <Plane className="text-blue-700" />

                <div>

                  <h3 className="font-bold text-xl">
                    20K+
                  </h3>

                  <p className="text-gray-500">
                    Happy Travellers
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-3">

                <MapPin className="text-blue-700" />

                <div>

                  <h3 className="font-bold text-xl">
                    100+
                  </h3>

                  <p className="text-gray-500">
                    Destinations
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div>

            <img
              src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1200"
              alt="Travel"
              className="rounded-[40px] shadow-2xl w-full h-[650px] object-cover"
            />

          </div>

        </div>

      </section>

      {/* ================= PARTNERS ================= */}

      <section className="py-20 bg-gray-50">

        <div className="max-w-7xl mx-auto px-8">

          <p className="text-center uppercase tracking-[6px] text-gray-500 mb-14">

            Trusted Travel Partners

          </p>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 text-center font-bold text-xl text-gray-700">

            <div>Kenya Airways</div>

            <div>Booking.com</div>

            <div>Airbnb</div>

            <div>Tripadvisor</div>

            <div>Emirates</div>

          </div>

        </div>

      </section>

      {/* ================= WHY CHOOSE US ================= */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-8">

          <div className="text-center mb-20">

            <p className="text-blue-700 font-semibold">
              WHY TRAVIQUE
            </p>

            <h2 className="text-5xl font-bold mt-4">
              Everything You Need In One Place
            </h2>

          </div>

          <div className="grid lg:grid-cols-3 gap-8">

            <div className="rounded-3xl shadow-lg p-10">

              <Compass size={50} className="text-blue-700 mb-6"/>

              <h3 className="text-2xl font-bold mb-4">
                Smart Planning
              </h3>

              <p className="text-gray-600">
                Discover destinations and organize every trip effortlessly.
              </p>

            </div>

            <div className="rounded-3xl shadow-lg p-10">

              <Plane size={50} className="text-blue-700 mb-6"/>

              <h3 className="text-2xl font-bold mb-4">
                Easy Booking
              </h3>

              <p className="text-gray-600">
                Submit your travel request in minutes.
              </p>

            </div>

            <div className="rounded-3xl shadow-lg p-10">

              <ShieldCheck size={50} className="text-blue-700 mb-6"/>

              <h3 className="text-2xl font-bold mb-4">
                Secure Approval
              </h3>

              <p className="text-gray-600">
                Every request is verified before your journey begins.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ================= FEATURED DESTINATIONS ================= */}

      <section className="py-24 bg-sky-50">

        <div className="max-w-7xl mx-auto px-8">

          <div className="flex justify-between items-center mb-14">

            <div>

              <p className="text-blue-700 font-semibold">
                FEATURED DESTINATIONS
              </p>

              <h2 className="text-5xl font-bold mt-4">
                Find Your Next Adventure
              </h2>

            </div>

            <Link
              to="/destinations"
              className="text-blue-700 font-semibold"
            >
              View All →
            </Link>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {destinations.map((place) => (

              <div
                key={place.name}
                className="bg-card rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 transition duration-300"
              >

                <img
                  src={place.image}
                  alt={place.name}
                  className="h-72 w-full object-cover"
                />

                <div className="p-6">

                  <h3 className="text-2xl font-bold">
                    {place.name}
                  </h3>

                  <p className="text-muted-foreground mt-3">
                    Discover unforgettable memories waiting for you.
                  </p>

                  <button
  onClick={handleExploreTrips}
  className="mt-6 bg-blue-700 text-white px-6 py-3 rounded-xl hover:bg-blue-800"
>
  Explore
</button>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>
            {/* ================= POPULAR EXPERIENCES ================= */}

            <section className="py-24">

<div className="max-w-7xl mx-auto px-8">

  <div className="text-center mb-16">

    <p className="text-blue-700 font-semibold">
      EXPERIENCES
    </p>

    <h2 className="text-5xl font-bold mt-4">
      Choose Your Travel Style
    </h2>

  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

    {[
      {
        
        title: "Beach Holidays",
        text: "Relax on the world's most beautiful beaches.",
      },
      {
        
        title: "Wildlife Safari",
        text: "Experience unforgettable wildlife adventures.",
      },
      {
        
        title: "Mountain Hiking",
        text: "Conquer breathtaking mountain trails.",
      },
      {
       
        title: "City Tours",
        text: "Discover culture, history and nightlife.",
      },
      {
        
        title: "Luxury Cruises",
        text: "Sail across stunning oceans in comfort.",
      },
      {
        
        title: "Backpacking",
        text: "Travel freely and explore hidden gems.",
      },
    ].map((item) => (

      <div
        key={item.title}
        className="bg-blue-700 text-white rounded-3xl p-10 hover:scale-105 transition duration-300"
      >

        <div className="text-6xl mb-6">
          {item.emoji}
        </div>

        <h3 className="text-2xl font-bold mb-4">
          {item.title}
        </h3>

        <p className="text-blue-100">
          {item.text}
        </p>

      </div>

    ))}

  </div>

</div>

</section>

{/* ================= HOW IT WORKS ================= */}

<section className="py-24 bg-sky-50">

<div className="max-w-7xl mx-auto px-8">

  <div className="text-center mb-20">

    <p className="text-blue-700 font-semibold">
      HOW IT WORKS
    </p>

    <h2 className="text-5xl font-bold mt-4">
      Your Journey In Six Simple Steps
    </h2>

  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

    {[
      "Create Your Account",
      "Browse Destinations",
      "Request Your Trip",
      "Admin Reviews Request",
      "Reserve Accommodation",
      "Travel & Enjoy",
    ].map((step, index) => (

      <div
        key={step}
        className="bg-white rounded-3xl p-10 shadow-lg"
      >

        <div className="w-14 h-14 rounded-full bg-blue-700 text-white flex items-center justify-center text-xl font-bold mb-6">

          {index + 1}

        </div>

        <h3 className="text-2xl font-bold mb-4">

          {step}

        </h3>

        <p className="text-gray-600">

          Complete this step to move closer to your next unforgettable adventure.

        </p>

      </div>

    ))}

  </div>

</div>

</section>

{/* ================= CALL TO ACTION ================= */}

<section className="py-24">

<div className="max-w-6xl mx-auto px-8">

  <div className="bg-gradient-to-r from-blue-700 to-sky-500 rounded-[40px] text-white text-center px-10 py-20">

    <h2 className="text-5xl font-bold">

      Ready To Explore The World?

    </h2>

    <p className="mt-6 text-xl text-blue-100 max-w-2xl mx-auto">

      Join thousands of travellers already discovering unforgettable destinations with Travique.

    </p>

    <div className="flex justify-center gap-5 mt-10">

    <div className="flex justify-center mt-10">
  <Link
    to="/register"
    className="bg-white text-blue-700 px-8 py-4 rounded-xl font-bold hover:bg-gray-100"
  >
    Get Started
  </Link>
</div>

    </div>

  </div>

</div>

</section>

{/* ================= FOOTER ================= */}

<footer className="bg-slate-900 text-white pt-20 pb-10">

<div className="max-w-7xl mx-auto px-8 grid md:grid-cols-4 gap-12">

  <div>

    <h2 className="text-3xl font-bold mb-5">

      Travique

    </h2>

    <p className="text-gray-300 leading-7">

      Discover amazing destinations, request trips, reserve accommodation and travel with confidence.

    </p>

  </div>

  <div>

    <h3 className="text-xl font-semibold mb-5">
      Quick Links
    </h3>

    <ul className="space-y-3">

      <li><Link to="/" className="hover:text-sky-400">Home</Link></li>

      <li><Link to="/about" className="hover:text-sky-400">About</Link></li>

      <li><Link to="/contact" className="hover:text-sky-400">Contact</Link></li>

    </ul>

  </div>

  <div>

    <h3 className="text-xl font-semibold mb-5">
      Services
    </h3>

    <ul className="space-y-3">

      <li>Trip Booking</li>

      <li>Hotel Reservation</li>

      <li>Travel Assistant</li>

    </ul>

  </div>

  <div>

    <h3 className="text-xl font-semibold mb-5">
      Account
    </h3>

    <ul className="space-y-3">

      <li><Link to="/login" className="hover:text-sky-400">Login</Link></li>

      <li><Link to="/register" className="hover:text-sky-400">Register</Link></li>

    </ul>

  </div>

</div>

<div className="border-t border-slate-700 mt-16 pt-8 text-center text-gray-400">

  &copy; 2026 Travique. All Rights Reserved.

</div>

</footer>

</div>
);
}

export default Home;