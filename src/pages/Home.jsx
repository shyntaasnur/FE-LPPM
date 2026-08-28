import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col font-poppins bg-slate-50">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative w-full h-[600px] md:h-[700px] flex items-center">
        {/* Background Image & Overlay Gelap */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/src/assets/img/hero-bg.jpg')" }}
        >
          <div className="absolute inset-0 bg-slate-900/80"></div>
        </div>

        {/* Konten Teks Hero (Rata Kiri) */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl">
            <h1 className="font-readex text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Mendorong Inovasi,
              <br /> Membangun Negeri
            </h1>
            <p className="text-slate-200 text-base md:text-lg mb-10 leading-relaxed max-w-2xl">
              Pusat unggulan riset dan pengabdian masyarakat untuk masa depan
              teknologi energi yang berkelanjutan.
            </p>
            <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded hover:bg-white hover:text-slate-900 transition-colors duration-300">
              Pelajari Lebih Lanjut
            </button>
          </div>
        </div>
      </section>

      {/* FLOATING STAT CARD */}
      <section className="relative z-20 max-w-6xl mx-auto px-6 w-full -mt-16 md:-mt-20 mb-20">
        <div className="bg-slate-50 rounded-lg shadow-xl shadow-slate-900/10 py-2 px-6 lg:py-8 flex flex-col md:flex-row items-center justify-between divide-y-2 md:divide-y-0 md:divide-x-2 divide-slate-200 border border-slate-100">
          {/* Item 1: Penelitian */}
          <div className="flex flex-col items-center justify-center flex-1 py-4 md:py-0 w-full hover:-translate-y-1 transition-transform duration-300">
            <h2 className="font-readex text-4xl md:text-5xl font-bold text-slate-900 mb-2">
              500+
            </h2>
            <p className="text-xs md:text-sm font-bold text-slate-500 tracking-widest uppercase">
              Penelitian Aktif
            </p>
          </div>

          {/* Item 2: PKM */}
          <div className="flex flex-col items-center justify-center flex-1 py-4 md:py-0 w-full hover:-translate-y-1 transition-transform duration-300">
            <h2 className="font-readex text-4xl md:text-5xl font-bold text-slate-900 mb-2">
              200+
            </h2>
            <p className="text-xs md:text-sm font-bold text-slate-500 tracking-widest uppercase">
              Proyek PKM
            </p>
          </div>

          {/* Item 3: Publikasi */}
          <div className="flex flex-col items-center justify-center flex-1 py-4 md:py-0 w-full hover:-translate-y-1 transition-transform duration-300">
            <h2 className="font-readex text-4xl md:text-5xl font-bold text-slate-900 mb-2">
              50+
            </h2>
            <p className="text-xs md:text-sm font-bold text-slate-500 tracking-widest uppercase">
              Publikasi
            </p>
          </div>
        </div>
      </section>

      <main className="flex-grow bg-white min-h-[300px]"></main>

      <Footer />
    </div>
  );
};

export default Home;
