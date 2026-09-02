import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Berita = () => {
  const [activeTab, setActiveTab] = useState('SEMUA');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const newsData = [
    {
      id: 1,
      type: 'Berita',
      date: '12 Oktober 2024',
      title: 'Inovasi Teknologi Energi Terbarukan oleh Tim Riset',
      description: 'Tim peneliti dari IT-PLN berhasil mengembangkan purwarupa panel surya dengan efisiensi tinggi berbasis material lokal...',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=600'
    },
    {
      id: 2,
      type: 'Pengumuman',
      date: '10 Oktober 2024',
      title: 'Penerimaan Proposal Hibah Penelitian Internal...',
      description: 'LPPM IT-PLN resmi membuka penerimaan proposal hibah penelitian internal untuk seluruh dosen dan sivitas akademika.',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=600'
    },
    {
      id: 3,
      type: 'Berita',
      date: '05 Oktober 2024',
      title: 'Seminar Nasional Teknologi...',
      description: 'Sukses diselenggarakan, seminar ini mengumpulkan ratusan akademisi dan praktisi energi dari seluruh Indonesia.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600'
    },
    {
      id: 4,
      type: 'Pengumuman',
      date: '01 Oktober 2024',
      title: 'Jadwal Publikasi Jurnal Ilmiah Semester Ganjil',
      description: 'Berikut adalah pembaruan jadwal dan panduan terbaru untuk publikasi pada jurnal-jurnal terakreditasi LPPM.',
      image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=600'
    },
    {
      id: 5,
      type: 'Berita',
      date: '28 September 2024',
      title: 'Kolaborasi Riset dengan Universitas Internasional',
      description: 'LPPM IT-PLN menandatangani MoU dengan beberapa universitas terkemuka di Asia dalam pengembangan smart grid.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600'
    },
    {
      id: 6,
      type: 'Berita',
      date: '20 September 2024',
      title: 'Workshop Penulisan Jurnal Internasional Bereputasi',
      description: 'Membekali para dosen dan peneliti mengenai strategi lolos review pada jurnal terindeks Scopus Q1.',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=600'
    },
    {
      id: 7,
      type: 'Pengumuman',
      date: '15 September 2024',
      title: 'Pemenang Program Pengabdian Masyarakat Unggulan',
      description: 'Pengumuman hasil evaluasi kelayakan program pengabdian masyarakat semester genap yang lolos pendanaan.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600'
    }
  ];

  // Filter berdasarkan Tab
  const filteredNews = activeTab === 'SEMUA' 
    ? newsData 
    : newsData.filter(item => item.type.toUpperCase() === activeTab);

  // Pagination Logic
  const totalPages = Math.ceil(filteredNews.length / itemsPerPage) || 1;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedNews = filteredNews.slice(startIndex, startIndex + itemsPerPage);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col justify-between">
      {/* Reusable Navbar */}
      <Navbar />

      <main className="grow">
        {/* Header Breadcrumb & Judul Halaman */}
        <div className="bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="text-xs font-semibold text-slate-400 mb-2">
              <span>Beranda</span> <span className="mx-1">&gt;</span> 
              <span>Informasi</span> <span className="mx-1">&gt;</span> 
              <span className="text-slate-800 font-bold">Berita</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-[#0c2340]">
              Berita & Pengumuman
            </h1>
          </div>
        </div>

        {/* Konten Utama */}
        <div className="max-w-7xl mx-auto px-6 py-10">
          
          {/* Filter Tab Kategori */}
          <div className="flex justify-center items-center gap-8 mb-10 text-xs font-bold tracking-wider">
            {['SEMUA', 'BERITA', 'PENGUMUMAN'].map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => handleTabClick(tab)}
                  className={`pb-2 transition relative cursor-pointer ${
                    isActive
                      ? 'text-[#0c2340] border-b-2 border-amber-400'
                      : 'text-slate-400 hover:text-slate-700'
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          {/* Grid Kartu Berita / Pengumuman */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedNews.map((item) => {
              const isBerita = item.type.toLowerCase() === 'berita';
              return (
                <div
                  key={item.id}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs flex flex-col justify-between hover:shadow-md transition duration-200"
                >
                  <div>
                    {/* Gambar & Badge Tag */}
                    <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover hover:scale-105 transition duration-300"
                      />
                      <span
                        className={`absolute top-3 left-3 text-[10px] font-bold px-2.5 py-0.5 rounded shadow-xs ${
                          isBerita
                            ? 'bg-amber-400 text-slate-900'
                            : 'bg-[#0c2340] text-white'
                        }`}
                      >
                        {item.type}
                      </span>
                    </div>

                    {/* Teks Konten */}
                    <div className="p-5">
                      <span className="text-[11px] text-slate-400 block mb-1">
                        {item.date}
                      </span>
                      <h3 className="font-bold text-[#0c2340] text-sm md:text-base leading-snug mb-2 line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Tombol Baca Selengkapnya */}
                  <div className="px-5 pb-5 pt-0">
                    <button
                      onClick={() => alert(`Membuka detail: ${item.title}`)}
                      className="text-xs font-bold text-cyan-600 hover:text-cyan-700 inline-flex items-center gap-1 uppercase tracking-wider transition cursor-pointer"
                    >
                      BACA SELENGKAPNYA <span>&rarr;</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-1.5 pt-12">
            <button
              type="button"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              className="w-8 h-8 flex items-center justify-center rounded border border-slate-200 bg-white text-slate-500 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed text-xs transition cursor-pointer"
            >
              &lt;
            </button>

            {[1, 2, 3].map((page) => (
              <button
                key={page}
                type="button"
                onClick={() => setCurrentPage(page)}
                className={`w-8 h-8 flex items-center justify-center rounded text-xs font-semibold transition cursor-pointer ${
                  currentPage === page
                    ? 'bg-[#0c2340] text-white'
                    : 'border border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                }`}
              >
                {page}
              </button>
            ))}

            <span className="text-slate-400 text-xs px-1 select-none">...</span>

            <button
              type="button"
              onClick={() => setCurrentPage(totalPages)}
              className={`w-8 h-8 flex items-center justify-center rounded text-xs font-semibold border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 transition cursor-pointer`}
            >
              &gt;
            </button>
          </div>

        </div>
      </main>

      {/* Reusable Footer */}
      <Footer />
    </div>
  );
};

export default Berita;
