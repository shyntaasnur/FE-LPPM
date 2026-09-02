import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Data untuk Portal Layanan biar rapi dan gampang ditambahin nanti
const layananMenu = [
  {
    id: 1,
    title: "PKM",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Penelitian",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 3h6" />
        <path d="M10 3v5.462a2 2 0 0 1-.371 1.155l-4.707 6.276A2 2 0 0 0 6.52 19h10.96a2 2 0 0 0 1.598-3.107l-4.707-6.276A2 2 0 0 1 14 8.462V3" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Dokumen",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-1.2-1.8A2 2 0 0 0 7.55 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Jurnal",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
      </svg>
    ),
  },
];
const mainNews = {
  category: "Berita Utama",
  title:
    "Penerimaan Proposal Hibah Penelitian Internal IT-PLN 2024 Telah Dibuka",
  desc: "Lembaga Penelitian dan Pengabdian kepada Masyarakat (LPPM) IT-PLN secara resmi membuka penerimaan proposal hibah penelitian internal untuk periode pendanaan tahun 2024.",
  image:
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
};

const smallNewsList = [
  {
    id: 1,
    category: "Pengumuman",
    title: "Jadwal Monev PKM Semester Ganjil 2023/2024",
    image:
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=500",
  },
  {
    id: 2,
    category: "Berita",
    title: "IT-PLN Raih Penghargaan Sentra HKI Terbaik",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=500",
  },
  {
    id: 3,
    category: "Seminar",
    title: "Workshop Strategi Penulisan Proposal Hibah Nasional",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=500",
  },
  {
    id: 4,
    category: "Riset",
    title: "Kolaborasi Riset Energi Terbarukan dengan Mitra Industri",
    image:
      "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=500",
  },
];

const agendaList = [
  {
    id: 1,
    date: "20",
    month: "NOV",
    title: "Workshop Penulisan Jurnal Internasional Bereputasi",
    location: "Ruang Seminar Utama",
  },
  {
    id: 2,
    date: "25",
    month: "NOV",
    title: "Batas Akhir Upload Laporan Akhir Penelitian",
    location: "Sistem SINTA",
  },
  {
    id: 3,
    date: "01",
    month: "DES",
    title: "Sosialisasi Panduan PKM Tahun 2024",
    location: "Zoom Meeting",
  },
];
const journals = [
  {
    id: 1,
    title: "Jurnal Energi & Kelistrikan",
    sinta: "SINTA 3",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 2,
    title: "Jurnal Informatika",
    sinta: "SINTA 4",
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 3,
    title: "Jurnal Teknik Mesin",
    sinta: "SINTA 4",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 4,
    title: "Jurnal Teknik Sipil",
    sinta: "SINTA 5",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=600",
  },
];

const partners = [
  {
    id: 1,
    name: "PLN Enjiniring",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/97/Logo_PLN.png", // Ganti dengan path logo PLN Enjiniring kamu
  },
  {
    id: 2,
    name: "PLN",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/97/Logo_PLN.png", // Ganti dengan path logo PLN kamu
  },
];
const Home = () => {
  return (
    <div className="min-h-screen flex flex-col font-poppins bg-white">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative w-full h-150 md:h-175 flex items-center">
        {/* Background Image & Overlay Gelap */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/src/assets/img/hero-img.svg')" }}
        >
          <div className="absolute inset-0 bg-slate-900/80"></div>
        </div>

        <div className="relative z-10 layout-container mx-auto px-6 w-full">
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


      <main className="grow bg-white min-h-75">
        {/* PORTAL LAYANAN SECTION */}
        <section className="w-full py-12 md:py-20">
          <div className="layout-container mx-auto px-4 md:px-6">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="font-readex text-2xl md:text-3xl font-extrabold text-[#1c3250]">
                Portal Layanan
              </h2>
            </div>

            {/* Grid 4 Kolom di semua ukuran layar */}
            <div className="grid grid-cols-4 gap-3 sm:gap-6 md:gap-10 max-w-4xl mx-auto items-center justify-items-center">
              {layananMenu.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.title.toLowerCase()}`}
                  className="group flex flex-col items-center justify-center w-full aspect-square max-w-[90px] sm:max-w-[120px] md:max-w-[144px] bg-[#0b1b36] rounded-full text-white shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer p-2"
                >
                  {/* Sizing ikon disesuaikan buat HP */}
                  <div className="mb-1 md:mb-2 text-white/90 group-hover:text-white transition-colors [&>svg]:w-5 [&>svg]:h-5 sm:[&>svg]:w-7 sm:[&>svg]:h-7 md:[&>svg]:w-8 md:[&>svg]:h-8">
                    {item.icon}
                  </div>
                  <span className="text-[10px] sm:text-xs md:text-sm font-medium tracking-wide text-center">
                    {item.title}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full bg-slate-50 py-16 md:py-20">
          <div className="layout-container mx-auto px-4 md:px-6">
            {/* Section Title */}
            <div className="text-center mb-10 md:mb-14">
              <h2 className="font-readex text-2xl md:text-3xl font-extrabold text-[#1c3250]">
                Berita & Informasi
              </h2>
            </div>

            {/* Main Container Layout */}
            {/* flex-col-reverse -> Agenda di ATAS saat di HP */}
            {/* lg:flex-row -> Berita di KIRI & Agenda di KANAN saat Desktop */}
            <div className="flex flex-col-reverse lg:flex-row gap-8 items-start">
              {/* ================= AREA BERITA (KIRI) ================= */}
              <div className="w-full lg:w-2/3 space-y-6">
                {/* Main Banner News */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 group">
                  <div className="h-64 sm:h-80 w-full overflow-hidden">
                    <img
                      src={mainNews.image}
                      alt={mainNews.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 md:p-8">
                    <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 text-xs font-semibold rounded-full mb-3">
                      {mainNews.category}
                    </span>
                    <h3 className="font-readex text-xl md:text-2xl font-bold text-[#1c3250] mb-3 leading-snug group-hover:text-blue-600 transition-colors">
                      {mainNews.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">
                      {mainNews.desc}
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center text-sm font-semibold text-sky-600 hover:text-sky-700 transition-colors"
                    >
                      Baca Selengkapnya <span className="ml-1">→</span>
                    </a>
                  </div>
                </div>

                {/* Grid 4 Sub News */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {smallNewsList.map((news) => (
                    <div
                      key={news.id}
                      className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 flex flex-col justify-between group"
                    >
                      <div className="h-44 w-full overflow-hidden">
                        <img
                          src={news.image}
                          alt={news.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-5 flex-1 flex flex-col justify-between">
                        <div>
                          <span className="inline-block px-2.5 py-0.5 border border-slate-200 text-slate-600 text-[11px] font-medium rounded-full mb-3">
                            {news.category}
                          </span>
                          <h4 className="font-readex text-base font-bold text-[#1c3250] mb-4 line-clamp-2 leading-snug group-hover:text-blue-600 transition-colors">
                            {news.title}
                          </h4>
                        </div>
                        <a
                          href="#"
                          className="inline-flex items-center text-xs font-semibold text-sky-600 hover:text-sky-700 transition-colors"
                        >
                          Baca Selengkapnya <span className="ml-1">→</span>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tombol Lihat Semua Berita */}
                <div className="text-center pt-4">
                  <button className="px-8 py-3 bg-[#0b1b36] hover:bg-[#1c3250] text-white text-xs md:text-sm font-medium rounded-lg shadow transition-colors duration-300">
                    Lihat Semua Berita
                  </button>
                </div>
              </div>

              {/* ================= AREA AGENDA (KANAN) ================= */}
              <div className="w-full lg:w-1/3  lg:top-8">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                  {/* Header Agenda */}
                  <div className="flex items-center gap-2 mb-6 border-b border-slate-100 pb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-sky-500"
                    >
                      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                      <line x1="16" x2="16" y1="2" y2="6" />
                      <line x1="8" x2="8" y1="2" y2="6" />
                      <line x1="3" x2="21" y1="10" y2="10" />
                    </svg>
                    <h3 className="font-readex text-lg font-bold text-[#1c3250]">
                      Agenda
                    </h3>
                  </div>

                  {/* List Agenda */}
                  <div className="space-y-5 mb-6">
                    {agendaList.map((agenda) => (
                      <div key={agenda.id} className="flex items-start gap-4">
                        {/* Kotak Tanggal */}
                        <div className="flex flex-col items-center justify-center w-12 h-12 bg-slate-100 rounded-lg shrink-0 text-center">
                          <span className="text-sm font-bold text-slate-800 leading-none">
                            {agenda.date}
                          </span>
                          <span className="text-[10px] font-semibold text-slate-500 uppercase mt-0.5">
                            {agenda.month}
                          </span>
                        </div>

                        {/* Info Agenda */}
                        <div>
                          <h4 className="text-xs font-bold text-[#1c3250] leading-snug hover:text-sky-600 cursor-pointer transition-colors">
                            {agenda.title}
                          </h4>
                          <p className="text-[11px] text-slate-400 mt-1">
                            {agenda.location}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tombol Lihat Semua Agenda */}
                  <button className="w-full py-2.5 border border-slate-200 hover:border-slate-300 text-slate-600 hover:text-slate-900 text-xs font-medium rounded-lg transition-colors duration-200">
                    Lihat Semua Agenda
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-16 md:py-20 border-b border-slate-100">
    <div className="layout-container mx-auto px-4 md:px-6">
      
      {/* Header Jurnal */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
        <div>
          <h2 className="font-readex text-2xl md:text-3xl font-extrabold text-[#1c3250]">
            Jurnal Ilmiah
          </h2>
          <p className="text-slate-500 text-sm md:text-base mt-1">
            Publikasi unggulan dari civitas akademika IT-PLN
          </p>
        </div>
        <a
          href="#"
          className="inline-flex items-center text-xs md:text-sm font-semibold text-sky-600 hover:text-sky-700 transition-colors shrink-0"
        >
          Lihat Semua <span className="ml-1.5">→</span>
        </a>
      </div>

      {/* Grid Cards Jurnal (2 Kolom di HP, 4 Kolom di Tablet/Laptop) */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {journals.map((journal) => (
          <div key={journal.id} className="group cursor-pointer">
            {/* Card Mockup / Cover Image */}
            <div className="w-full aspect-[3/4] bg-slate-100 rounded-xl overflow-hidden shadow-sm border border-slate-200/80 mb-3 group-hover:shadow-md group-hover:-translate-y-1 transition-all duration-300">
              <img
                src={journal.image}
                alt={journal.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Title & SINTA Rating */}
            <h3 className="font-readex text-sm md:text-base font-bold text-[#1c3250] line-clamp-1 group-hover:text-sky-600 transition-colors">
              {journal.title}
            </h3>
            <p className="text-xs text-slate-400 font-medium mt-0.5">
              {journal.sinta}
            </p>
          </div>
        ))}
      </div>

    </div>
  </section>

  {/* SECTION PARTNER KAMI */}
  <section className="w-full py-16 md:py-20 bg-white">
    <div className="layout-container mx-auto px-4 md:px-6">
      
      {/* Header Partner dengan Aksen Kuning */}
      <div className="flex items-center gap-3 mb-10">
        <div className="w-1.5 h-7 md:h-8 bg-amber-400 rounded-full"></div>
        <h2 className="font-readex text-2xl md:text-3xl font-extrabold text-[#1c3250]">
          Partner Kami
        </h2>
      </div>

      {/* Align Left Cards Logo */}
      <div className="flex flex-wrap items-center gap-6">
        {partners.map((partner) => (
          <div
            key={partner.id}
            className="w-40 sm:w-48 bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center h-24 hover:shadow-md transition-shadow duration-300"
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="max-h-12 w-auto object-contain grayscale hover:grayscale-0 opacity-80 hover:opacity-100 transition-all duration-300"
            />
          </div>
        ))}
      </div>

    </div>
  </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
