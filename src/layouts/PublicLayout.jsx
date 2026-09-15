// src/layouts/PublicLayout.jsx
import { Outlet } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

const PublicLayout = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-50 text-slate-800 font-sans">
      {/* Navbar Global */}
      <Navbar />

      {/* Konten Halaman Public Dinamis */}
      <main className="grow">
        <Outlet />
      </main>

      {/* Footer Global */}
      <Footer />
    </div>
  );
};

export default PublicLayout;