import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Destinations from "./pages/Destinations";
import DestinationDetails from "./pages/DestinationDetails";
import ProtectedRoute from "./components/ProtectedRoute";
import BookingForm from "./components/BookingForm";
import BookingSuccess from "./pages/BookingSuccess";
import Reservation from "./pages/Reservation";
import Profile from "./pages/Profile";
import About from "./pages/About";
// import Contact from "./pages/Contact";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminBookings from "./pages/admin/AdminBookings";
import AdminUsers from "./pages/admin/AdminUsers";
import AdminRoute from "./components/AdminRoute";
import ReceiptPage from "./pages/Receipt";
// import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route
  path="/destinations"
  element={
    <ProtectedRoute>
      <Destinations />
    </ProtectedRoute>
  }
/>
        <Route
          path="/destinations/:id"
          element={<DestinationDetails />}
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route 
  path="/booking" 
  element={<BookingForm />}
/>

<Route
  path="/booking-success"
  element={
    <ProtectedRoute>
      <BookingSuccess />
    </ProtectedRoute>
  }
/>

<Route
  path="/reservation"
  element={
    <ProtectedRoute>
      <Reservation />
    </ProtectedRoute>
  }
/>
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

       <Route path="/about" element={<About />} />
        {/* <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />  */}

         <Route
  path="/admin"
  element={
    <AdminRoute>
      <AdminDashboard />
    </AdminRoute>
  }
/>

<Route
  path="/admin/bookings"
  element={
    <AdminRoute>
      <AdminBookings />
    </AdminRoute>
  }
/>

<Route
  path="/admin/users"
  element={
    <AdminRoute>
      <AdminUsers />
    </AdminRoute>
  }
/>

<Route
  path="/receipt"
  element={
    <ProtectedRoute>
      <ReceiptPage />
    </ProtectedRoute>
  }
/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;