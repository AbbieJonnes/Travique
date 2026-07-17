import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  ClipboardList,
  Users,
  LogOut,
} from "lucide-react";

import { useAuth } from "../context/AuthContext";

function AdminSidebar() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    await logout();
    navigate("/login");
  }

  return (
    <aside className="w-72 bg-slate-900 text-white min-h-screen flex flex-col">

      <div className="p-8">

        <h1 className="text-3xl font-bold text-sky-400">
          Travique
        </h1>

        <p className="text-slate-400 mt-2">
          Admin Panel
        </p>

      </div>

      <nav className="flex-1 px-4 space-y-3">

        <NavLink
          to="/admin"
          end
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-xl transition ${
              isActive
                ? "bg-sky-500"
                : "hover:bg-slate-800"
            }`
          }
        >
          <LayoutDashboard size={20} />
          Dashboard
        </NavLink>

        <NavLink
          to="/admin/bookings"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-xl transition ${
              isActive
                ? "bg-sky-500"
                : "hover:bg-slate-800"
            }`
          }
        >
          <ClipboardList size={20} />
          Bookings
        </NavLink>

        <NavLink
          to="/admin/users"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-xl transition ${
              isActive
                ? "bg-sky-500"
                : "hover:bg-slate-800"
            }`
          }
        >
          <Users size={20} />
          Users
        </NavLink>

      </nav>

      <div className="p-4">

        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 py-3 rounded-xl"
        >
          <LogOut size={20} />
          Logout
        </button>

      </div>

    </aside>
  );
}

export default AdminSidebar;