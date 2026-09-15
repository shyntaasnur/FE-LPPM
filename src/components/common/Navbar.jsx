import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // Untuk toggle dropdown di mobile

  const toggleDropdown = (menuName) => {
    setOpenDropdown(openDropdown === menuName ? null : menuName);
  };

  return (
    <nav className="bg-white sticky top-0 z-50 font-poppins border-b border-slate-200 shadow-sm">
      <div className="layout-container mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
        
        {/* 1. Logo LPPM IT-PLN (Pojok Kiri) */}
        <Link to="/" className="flex shrink-0" onClick={() => setIsMobileMenuOpen(false)}>
          <img
            src="/src/assets/img/logo-lppm.svg"
            alt="Logo LPPM IT-PLN"
            className="h-12 md:h-14 w-auto"
          />
        </Link>

        {/* Desktop Navigation (Layar Besar) */}
        <div className="hidden lg:flex items-center gap-7 text-custom-blue font-medium text-sm xl:text-base">
          
          {/* 2. Beranda */}
          <Link to="/" className="hover:text-custom-cyan transition-colors duration-300">
            Beranda
          </Link>
          
          {/* 3. Profil */}
          <Link to="/profil" className="hover:text-custom-cyan transition-colors duration-300">
            Profil
          </Link>

          {/* 4. Dropdown: Program */}
          <div className="relative group py-2">
            <button className="flex items-center gap-1 hover:text-custom-cyan transition-colors duration-300">
              <span>Program</span>
              <svg className="w-4 h-4 text-slate-500 group-hover:text-custom-cyan transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute left-0 top-full hidden group-hover:flex flex-col bg-white shadow-lg rounded-md border border-slate-100 py-2 w-48 text-sm">
              <Link to="/penelitian" className="px-4 py-2 hover:bg-slate-50 hover:text-custom-cyan transition-colors">Penelitian</Link>
              <Link to="/pkm" className="px-4 py-2 hover:bg-slate-50 hover:text-custom-cyan transition-colors">Pengabdian (PKM)</Link>
            </div>
          </div>

          {/* 5. Dropdown: Publikasi & Dokumen */}
          <div className="relative group py-2">
            <button className="flex items-center gap-1 hover:text-custom-cyan transition-colors duration-300">
              <span>Publikasi & Dokumen</span>
              <svg className="w-4 h-4 text-slate-500 group-hover:text-custom-cyan transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute left-0 top-full hidden group-hover:flex flex-col bg-white shadow-lg rounded-md border border-slate-100 py-2 w-52 text-sm">
              <Link to="/jurnal" className="px-4 py-2 hover:bg-slate-50 hover:text-custom-cyan transition-colors">Jurnal & Publikasi</Link>
              <Link to="/dokumen" className="px-4 py-2 hover:bg-slate-50 hover:text-custom-cyan transition-colors">Dokumen</Link>
            </div>
          </div>

          {/* 6. Dropdown: Informasi */}
          <div className="relative group py-2">
            <button className="flex items-center gap-1 hover:text-custom-cyan transition-colors duration-300">
              <span>Informasi</span>
              <svg className="w-4 h-4 text-slate-500 group-hover:text-custom-cyan transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute left-0 top-full hidden group-hover:flex flex-col bg-white shadow-lg rounded-md border border-slate-100 py-2 w-48 text-sm">
              <Link to="/berita" className="px-4 py-2 hover:bg-slate-50 hover:text-custom-cyan transition-colors">Berita</Link>
              <Link to="/agenda" className="px-4 py-2 hover:bg-slate-50 hover:text-custom-cyan transition-colors">Agenda</Link>
              <Link to="/tautan" className="px-4 py-2 hover:bg-slate-50 hover:text-custom-cyan transition-colors">Tautan</Link>
            </div>
          </div>

          {/* 7. Layanan */}
          <Link to="/layanan" className="hover:text-custom-cyan transition-colors duration-300">
            Layanan
          </Link>
          
          {/* 8. Contact */}
          <Link to="/contact" className="hover:text-custom-cyan transition-colors duration-300">
            Contact
          </Link>
        </div>

        {/* Action Buttons Right (Desktop & Mobile Area) */}
        <div className="flex items-center gap-3 md:gap-4">
          
          {/* 9. Search Icon (Selalu Muncul di Desktop & Mobile) */}
          <button 
            aria-label="Cari"
            className="text-custom-blue hover:text-custom-cyan cursor-pointer transition-colors p-1"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>

          {/* Tombol Login Desktop (Sembunyi di Mobile) */}
          <Link
            to="/login"
            className="hidden lg:inline-block px-6 py-2 bg-custom-yellow text-slate-900 font-semibold rounded-md shadow-sm hover:bg-custom-yellow-light transition-all duration-300"
          >
            Login
          </Link>

          {/* Hamburger Menu Icon (Muncul di Mobile saja, sebelah kanan Search Icon) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-custom-blue hover:text-custom-cyan p-1 focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Content (Muncul ketika Hamburger diklik) */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3 font-medium text-custom-blue">
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 border-b border-slate-100">
            Beranda
          </Link>
          
          <Link to="/profil" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 border-b border-slate-100">
            Profil
          </Link>

          {/* Mobile Dropdown: Program */}
          <div className="border-b border-slate-100 py-2">
            <button 
              onClick={() => toggleDropdown('program')}
              className="flex justify-between items-center w-full text-left"
            >
              <span>Program</span>
              <svg className={`w-4 h-4 transition-transform ${openDropdown === 'program' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openDropdown === 'program' && (
              <div className="pl-4 pt-2 space-y-2 text-sm text-slate-600">
                <Link to="/penelitian" onClick={() => setIsMobileMenuOpen(false)} className="block py-1">Penelitian</Link>
                <Link to="/pkm" onClick={() => setIsMobileMenuOpen(false)} className="block py-1">Pengabdian (PKM)</Link>
              </div>
            )}
          </div>

          {/* Mobile Dropdown: Publikasi & Dokumen */}
          <div className="border-b border-slate-100 py-2">
            <button 
              onClick={() => toggleDropdown('publikasi')}
              className="flex justify-between items-center w-full text-left"
            >
              <span>Publikasi & Dokumen</span>
              <svg className={`w-4 h-4 transition-transform ${openDropdown === 'publikasi' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openDropdown === 'publikasi' && (
              <div className="pl-4 pt-2 space-y-2 text-sm text-slate-600">
                <Link to="/jurnal" onClick={() => setIsMobileMenuOpen(false)} className="block py-1">Jurnal & Publikasi</Link>
                <Link to="/dokumen" onClick={() => setIsMobileMenuOpen(false)} className="block py-1">Dokumen</Link>
              </div>
            )}
          </div>

          {/* Mobile Dropdown: Informasi */}
          <div className="border-b border-slate-100 py-2">
            <button 
              onClick={() => toggleDropdown('informasi')}
              className="flex justify-between items-center w-full text-left"
            >
              <span>Informasi</span>
              <svg className={`w-4 h-4 transition-transform ${openDropdown === 'informasi' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openDropdown === 'informasi' && (
              <div className="pl-4 pt-2 space-y-2 text-sm text-slate-600">
                <Link to="/berita" onClick={() => setIsMobileMenuOpen(false)} className="block py-1">Berita</Link>
                <Link to="/agenda" onClick={() => setIsMobileMenuOpen(false)} className="block py-1">Agenda</Link>
                <a href="https://itpln.ac.id" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)} className="block py-1">Tautan Terkait</a>
              </div>
            )}
          </div>

          <Link to="/layanan" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 border-b border-slate-100">
            Layanan
          </Link>
          
          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 border-b border-slate-100">
            Contact
          </Link>

          {/* Tombol Login Mobile (Masuk ke dalam Hamburger Menu) */}
          <div className="pt-2">
            <Link
              to="/login"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-center py-2.5 bg-custom-yellow text-slate-900 font-semibold rounded-md shadow-sm hover:bg-custom-yellow-light transition-all duration-300"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;