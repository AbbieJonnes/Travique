import { useEffect, useState } from "react";
import AdminLayout from "../../components/AdminLayout";
import { getAllUsers } from "../../services/bookingService";

function AdminUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  async function loadUsers() {
    const data = await getAllUsers();
    setUsers(data);
  }

  return (
    <AdminLayout>
      <h1 className="text-4xl font-bold mb-8">
        Registered Users
      </h1>

      <div className="bg-white rounded-2xl shadow-md overflow-hidden">

        <table className="w-full">

          <thead className="bg-slate-100">

            <tr>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Role</th>
              <th className="p-4 text-left">Joined</th>
            </tr>

          </thead>

          <tbody>

            {users.map((user) => (

              <tr
                key={user.id}
                className="border-t"
              >

                <td className="p-4">
                  {user.fullName}
                </td>

                <td className="p-4">
                  {user.email}
                </td>

                <td className="p-4">

                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      user.role === "admin"
                        ? "bg-purple-100 text-purple-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {user.role}
                  </span>

                </td>

                <td className="p-4">

                  {user.createdAt?.toDate
                    ? user.createdAt
                        .toDate()
                        .toLocaleDateString()
                    : "N/A"}

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>
    </AdminLayout>
  );
}

export default AdminUsers;