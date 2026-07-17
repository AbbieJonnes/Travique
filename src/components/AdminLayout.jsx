import AdminSidebar from "./AdminSidebar";

function AdminLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-slate-100">

      <AdminSidebar />

      <main className="flex-1 p-10 overflow-y-auto">
        {children}
      </main>

    </div>
  );
}

export default AdminLayout;