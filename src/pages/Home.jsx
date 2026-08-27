import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-emerald-50 flex flex-col items-center justify-center p-6 font-sans text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold text-emerald-700 mb-4">
        🎓 Halaman Home LPPM IT-PLN
      </h1>
      <p className="text-lg text-slate-600 mb-8 max-w-2xl">
        Pusat Penelitian dan Pengabdian kepada Masyarakat. Coba tes routing lu di bawah ini, pastikan jalurnya aman sentosa!
      </p>
      
      {/* Tombol buat ngetes fitur Link */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link 
          to="/penelitian" 
          className="px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg shadow-md hover:bg-emerald-700 transition-all"
        >
          🔬 Halaman Penelitian
        </Link>
        <Link 
          to="/pkm" 
          className="px-6 py-3 bg-white text-emerald-700 border border-emerald-600 font-semibold rounded-lg shadow-md hover:bg-emerald-50 transition-all"
        >
          🤝 Halaman PKM
        </Link>
        <Link 
          to="/login" 
          className="px-6 py-3 bg-slate-800 text-white font-semibold rounded-lg shadow-md hover:bg-slate-900 transition-all"
        >
          🔐 Login Portal
        </Link>
      </div>
    </div>
  );
};

export default Home;