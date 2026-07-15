import { BrowserRouter, Routes, Route } from "react-router-dom";

//import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Destinations from "./pages/Destinations";
import DestinationDetails from "./pages/DestinationDetails";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/destinations" element={<Destinations />} />

        <Route
          path="/destination/:id"
          element={<DestinationDetails />}
        />

        <Route path="/profile" element={<Profile />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route
          path="/admin"
          element={<AdminDashboard />}
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;