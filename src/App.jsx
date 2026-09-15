import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Layouts
import PublicLayout from './layouts/PublicLayout';
import AdminLayout from './layouts/AdminLayout';

// Guard
import ProtectedRoute from './routes/ProtectedRoute';

// Auth Page
import Login from './pages/auth/Login';

// Public Pages
import Home from './pages/public/Home';
import Profil from './pages/public/Profil';
import Penelitian from './pages/public/Penelitian';
import PKM from './pages/public/PKM';
import Jurnal from './pages/public/Jurnal';
import Dokumen from './pages/public/Dokumen';
import Berita from './pages/public/Berita';
import Agenda from './pages/public/Agenda';
import Layanan from './pages/public/Layanan';
import Contact from './pages/public/Contact';
import Tautan from './pages/public/Tautan';

// Admin Pages
import DashboardOverview from './pages/admin/DashboardOverview';
import KelolaBerita from './pages/admin/KelolaBerita';
import KelolaAgenda from './pages/admin/KelolaAgenda';
import KelolaDokumen from './pages/admin/KelolaDokumen';
import KelolaJurnal from './pages/admin/KelolaJurnal';
import KelolaPenelitian from './pages/admin/KelolaPenelitian';
import KelolaPKM from './pages/admin/KelolaPKM';

function App() {
  return (
    <Router>
      <Routes>
        {/* 1. HALAMAN PUBLIK */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/penelitian" element={<Penelitian />} />
          <Route path="/pkm" element={<PKM />} />
          <Route path="/jurnal" element={<Jurnal />} />
          <Route path="/dokumen" element={<Dokumen />} />
          <Route path="/berita" element={<Berita />} />
          <Route path="/agenda" element={<Agenda />} />
          <Route path="/layanan" element={<Layanan />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tautan" element={<Tautan />} />
        </Route>

        {/* 2. AUTHENTICATION ADMIN */}
        <Route path="/login" element={<Login />} />

        {/* 3. DASHBOARD ADMIN LPPM (TERPROTEKSI) */}
        <Route element={<ProtectedRoute />}>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Navigate to="/admin/dashboard" replace />} />
            <Route path="dashboard" element={<DashboardOverview />} />
            <Route path="berita" element={<KelolaBerita />} />
            <Route path="agenda" element={<KelolaAgenda />} />
            <Route path="dokumen" element={<KelolaDokumen />} />
            <Route path="jurnal" element={<KelolaJurnal />} />
            <Route path="penelitian" element={<KelolaPenelitian />} />
            <Route path="pkm" element={<KelolaPKM />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;