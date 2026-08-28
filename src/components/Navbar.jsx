import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white sticky top-0 z-50 font-poppins border-b border-slate-200 shadow-sm ">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex justify-between items-center ">
        
        <Link to="/" className="flex shrink-0">
          <img
            src="/src/assets/img/logo-lppm.svg" 
            className="h-14 w-auto" 
          />
        </Link>

        {/* Bagian Tengah: Menu Navigasi (Sembunyi di mode HP, muncul di layar gede) */}
        <div className="hidden lg:flex items-center gap-8 text-custom-blue font-medium">
          
          {/* Menu Aktif (Warna Cyan) */}
          <Link to="/" className="text-custom-cyan hover:text-custom-blue-light transition-colors duration-300">
            Beranda
          </Link>
          
          <Link to="/profil" className="hover:text-custom-blue-light transition-colors duration-300">
            Profil
          </Link>

          {/* Menu Dropdown: Program */}
          <div className="flex items-center gap-1 cursor-pointer hover:text-custom-blue-light transition-colors duration-300 group">
            <span>Program</span>
            <svg className="w-4 h-4 text-slate-500 group-hover:text-custom-cyan transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          {/* Menu Dropdown: Publikasi & Dokumen */}
          <div className="flex items-center gap-1 cursor-pointer hover:text-custom-blue-light transition-colors duration-300 group">
            <span>Publikasi & Dokumen</span>
            <svg className="w-4 h-4 text-slate-500 group-hover:text-custom-cyan transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          {/* Menu Dropdown: Informasi */}
          <div className="flex items-center gap-1 cursor-pointer hover:text-custom-blue-light transition-colors duration-300 group">
            <span>Informasi</span>
            <svg className="w-4 h-4 text-slate-500 group-hover:text-custom-cyan transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          <Link to="/layanan" className="hover:text-custom-blue-light transition-colors duration-300">
            Layanan
          </Link>
          
          <Link to="/contact" className="hover:text-custom-blue-light transition-colors duration-300">
            Contact
          </Link>
        </div>

        {/* Bagian Kanan: Search & Tombol Login */}
        <div className="flex items-center gap-5">
          
          {/* Icon Search */}
          <button className="text-custom-blue hover:text-custom-blue-light cursor-pointer transition-colors duration-300">
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>

          {/* Tombol Login */}
          <Link
            to="/login"
            className="px-6 py-2 bg-custom-yellow text-slate-900 font-semibold rounded-md shadow-sm hover:bg-custom-yellow-light transition-all duration-300"
          >
            Login
          </Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;