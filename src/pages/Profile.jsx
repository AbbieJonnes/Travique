import { useAuth } from "../context/AuthContext";
import { useBooking } from "../context/BookingContext";
import { useFavorites } from "../context/FavoritesContext";
import { Link } from "react-router-dom";

import {
  MapPin,
  Calendar,
  Heart,
  Clock,
} from "lucide-react";


function Profile() {

  const { currentUser } = useAuth();

  const { bookings, loading: bookingLoading } = useBooking();

  const { favorites, loading: favoriteLoading } = useFavorites();



  if (!currentUser) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-bold">
          Please login to view your profile
        </h2>
      </div>
    );
  }



  return (

    <div className="min-h-screen bg-sky-50 py-12 px-6">


      <div className="max-w-6xl mx-auto space-y-10">


        {/* Profile Header */}

        <div className="bg-white rounded-3xl shadow-lg p-8">

          <h1 className="text-4xl font-bold">
            My Profile
          </h1>


          <div className="mt-6">

            <p className="text-lg">
              {currentUser.email}
            </p>


            <p className="text-gray-500">
              Travique Traveller
            </p>

          </div>

        </div>




        {/* My Trips */}

        <section>

          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">

            <Calendar />

            My Trips

          </h2>



          {bookingLoading ? (

            <p>
              Loading bookings...
            </p>

          ) : bookings.length === 0 ? (

            <div className="bg-white p-6 rounded-2xl shadow">

              <p>
                You have no bookings yet.
              </p>

            </div>

          ) : (


            <div className="grid md:grid-cols-2 gap-6">


              {bookings.map((booking) => (

                <div
                  key={booking.id}
                  className="bg-white rounded-2xl shadow-lg p-6"
                >


                  <h3 className="text-2xl font-bold">
                    {booking.destinationName}
                  </h3>


                  <div className="flex items-center gap-2 text-gray-600 mt-3">

                    <MapPin size={18}/>

                    {booking.country}

                  </div>



                  <div className="flex items-center gap-2 mt-3">

                    <Clock size={18}/>

                    {booking.travelDate}

                  </div>



                  <p className="mt-4 font-semibold">

                    Status:

                    <span className="ml-2 text-blue-700">

                      {booking.status}

                    </span>

                  </p>


                </div>

              ))}


            </div>

          )}

        </section>






        {/* Favorites */}


        <section>


          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">

            <Heart />

            Favourite Destinations

          </h2>




          {favoriteLoading ? (

            <p>
              Loading favourites...
            </p>


          ) : favorites.length === 0 ? (

            <div className="bg-white p-6 rounded-2xl shadow">

              <p>
                No favourite destinations yet.
              </p>

            </div>


          ) : (


            <div className="grid md:grid-cols-3 gap-6">


              {favorites.map((item) => (

                <div
                  key={item.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden"
                >

                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-48 w-full object-cover"
                  />


                  <div className="p-5">


                    <h3 className="text-xl font-bold">

                      {item.name}

                    </h3>


                    <p className="text-gray-600">

                      {item.city}, {item.country}

                    </p>


                  </div>


                </div>

              ))}


            </div>

          )}

<div className="flex gap-4 mt-10">

<Link
  to="/"
  className="flex-1 bg-blue-700 text-white py-4 rounded-xl text-center font-semibold hover:bg-blue-800"
>
  Back to Home
</Link>

<Link
  to="/destinations"
  className="flex-1 border-2 border-blue-700 text-blue-700 py-4 rounded-xl text-center font-semibold hover:bg-blue-700 hover:text-white"
>
  Explore Trips
</Link>

</div>


        </section>


      </div>


    </div>

  );
}


export default Profile;