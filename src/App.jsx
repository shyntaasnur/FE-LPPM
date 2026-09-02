import { BrowserRouter, Routes, Route } from 'react-router-dom';

// 1. Import Pages Publik LPPM
import Home from './pages/Home';
import Profil from './pages/Profil';
import Penelitian from './pages/Penelitian';
import PKM from './pages/PKM';
import Jurnal from './pages/Jurnal';
import Dokumen from './pages/Dokumen';
import Berita from './pages/Berita';
import Agenda from './pages/Agenda';
import Layanan from './pages/Layanan';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Tautan from './pages/Tautan';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 2. Rute Halaman Publik & Login */}
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
        <Route path="/login" element={<Login />} />
        <Route path="/tautan" element={<Tautan />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;