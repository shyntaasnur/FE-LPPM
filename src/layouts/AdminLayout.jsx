import { Outlet } from 'react-router-dom';
import SidebarAdmin from '../components/admin/SidebarAdmin';
import HeaderAdmin from '../components/admin/HeaderAdmin';

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen bg-slate-100 font-sans">
      {/* Sidebar Admin (Fixed Left) */}
      <SidebarAdmin />

      {/* Main Content Area */}
      <div className="grow flex flex-col min-w-0">
        <HeaderAdmin />
        <main className="p-6 grow overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;