import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Berita = () => {
  const [activeTab, setActiveTab] = useState('SEMUA');
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedNews, setSelectedNews] = useState(null);
  const [toastMessage, setToastMessage] = useState('');
  const itemsPerPage = 6;

  const newsData = [
    {
      id: 1,
      type: 'Berita',
      date: '12 Oktober 2024',
      title: 'Inovasi Teknologi Energi Terbarukan oleh Tim Riset',
      description: 'Tim peneliti dari IT-PLN berhasil mengembangkan purwarupa panel surya dengan efisiensi tinggi berbasis material lokal...',
      content: 'Tim peneliti dari IT-PLN berhasil mencatatkan terobosan penting dalam pengembangan purwarupa panel surya berefisiensi tinggi. Memanfaatkan material mineral lokal yang diproses dengan teknologi lapisan tipis (*thin-film*), panel ini mampu meningkatkan konversi radiasi matahari menjadi daya listrik hingga 22,4%. Inovasi ini diharapkan dapat menekan biaya produksi modul sel surya nasional di masa depan.',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=600'
    },
    {
      id: 2,
      type: 'Pengumuman',
      date: '10 Oktober 2024',
      title: 'Penerimaan Proposal Hibah Penelitian Internal',
      description: 'LPPM IT-PLN resmi membuka penerimaan proposal hibah penelitian internal untuk seluruh dosen dan sivitas akademika.',
      content: 'Lembaga Penelitian dan Pengabdian kepada Masyarakat (LPPM) resmi mengumumkan pembukaan pengajuan proposal hibah riset internal tahun anggaran berjalan. Skema pendanaan terbuka untuk kategori Riset Dasar, Riset Terapan, dan Kolaborasi Industri. Batas akhir unggah dokumen proposal melalui portal akademik adalah 30 November.',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=600'
    },
    {
      id: 3,
      type: 'Berita',
      date: '05 Oktober 2024',
      title: 'Seminar Nasional Teknologi Ketenagalistrikan Modern',
      description: 'Sukses diselenggarakan, seminar ini mengumpulkan ratusan akademisi dan praktisi energi dari seluruh Indonesia.',
      content: 'Seminar nasional bertajuk modernisasi jaringan listrik pintar berhasil menyedot antusiasme lebih dari 350 peserta daring maupun luring. Diskusi berfokus pada integrasi *distributed energy resources* (DER) dan kesiapan transmisi tegangan tinggi menghadapi lonjakan penetrasi pembangkit energi bersih.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600'
    },
    {
      id: 4,
      type: 'Pengumuman',
      date: '01 Oktober 2024',
      title: 'Jadwal Publikasi Jurnal Ilmiah Semester Ganjil',
      description: 'Berikut adalah pembaruan jadwal dan panduan terbaru untuk publikasi pada jurnal-jurnal terakreditasi LPPM.',
      content: 'Redaksi pengelola jurnal ilmiah merilis linimasa penerbitan edisi terbaru. Penulis yang telah menyelesaikan tahapan *peer-review* diwajibkan mengirimkan naskah revisi akhir beserta bukti persetujuan etik paling lambat dua pekan sebelum tanggal cetak digital.',
      image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=600'
    },
    {
      id: 5,
      type: 'Berita',
      date: '28 September 2024',
      title: 'Kolaborasi Riset dengan Universitas Internasional',
      description: 'LPPM IT-PLN menandatangani MoU dengan beberapa universitas terkemuka di Asia dalam pengembangan smart grid.',
      content: 'Kemitraan strategis tingkat regional ditandai melalui penandatanganan nota kesepahaman penelitian bersama konsorsium universitas teknik di Asia Tenggara. Fokus riset mencakup pemodelan komputasi awan untuk manajemen beban puncak pada jaringan transmisi multinegara.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600'
    },
    {
      id: 6,
      type: 'Berita',
      date: '20 September 2024',
      title: 'Workshop Penulisan Jurnal Internasional Bereputasi',
      description: 'Membekali para dosen dan peneliti mengenai strategi lolos review pada jurnal terindeks Scopus Q1.',
      content: 'Pelatihan intensif penulisan manuskrip ilmiah digelar guna mendongkrak kuantitas dan kualitas sitasi publikasi dosen. Peserta dibimbing langsung oleh mitra *editor-in-chief* mengenai anatomi artikel, teknik penyajian data, serta cara menjawab tanggapan *reviewer* secara konstruktif.',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=600'
    },
    {
      id: 7,
      type: 'Pengumuman',
      date: '15 September 2024',
      title: 'Pemenang Program Pengabdian Masyarakat Unggulan',
      description: 'Pengumuman hasil evaluasi kelayakan program pengabdian masyarakat semester genap yang lolos pendanaan.',
      content: 'Berdasarkan seleksi rapat pleno dewan reviewer, sebanyak 12 proposal pengabdian masyarakat dinyatakan lolos pendanaan tahap akhir. Fokus proyek terpilih mayoritas menyasar elektrifikasi desa mandiri dan penyuluhan efisiensi kelistrikan bagi pelaku UMKM.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600'
    }
  ];

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3000);
  };

  const handleCopyLink = (title) => {
    navigator.clipboard?.writeText(window.location.href);
    showToast(`Tautan artikel "${title.slice(0, 25)}..." berhasil disalin!`);
  };

  // Filter Kategori & Pencarian
  const filteredNews = newsData.filter((item) => {
    const matchesTab = activeTab === 'SEMUA' || item.type.toUpperCase() === activeTab;
    const matchesQuery = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesQuery;
  });

  // Pagination Logic
  const totalPages = Math.ceil(filteredNews.length / itemsPerPage) || 1;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedNews = filteredNews.slice(startIndex, startIndex + itemsPerPage);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col justify-between relative">
      <Navbar />

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#0c2340] text-white px-4 py-3 rounded-lg shadow-xl text-xs flex items-center gap-2 border border-slate-700 animate-fade-in">
          <svg className="w-4 h-4 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          <span>{toastMessage}</span>
        </div>
      )}

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
          
          {/* Kontrol Filter & Bilah Pencarian */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-4 border-b border-slate-200">
            <div className="flex items-center gap-6 text-xs font-bold tracking-wider">
              {['SEMUA', 'BERITA', 'PENGUMUMAN'].map((tab) => {
                const isActive = activeTab === tab;
                return (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => handleTabClick(tab)}
                    className={`pb-2 transition relative cursor-pointer ${
                      isActive
                        ? 'text-[#0c2340] border-b-2 border-amber-400 font-extrabold'
                        : 'text-slate-400 hover:text-slate-700'
                    }`}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>

            {/* Input Cari */}
            <div className="w-full sm:w-72">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                placeholder="Cari judul berita..."
                className="w-full px-3.5 py-1.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0c2340] bg-white transition"
              />
            </div>
          </div>

          {/* Kondisi Data Kosong */}
          {filteredNews.length === 0 ? (
            <div className="p-12 text-center text-xs text-slate-500 bg-white border border-slate-200 rounded-xl">
              Tidak ada berita atau pengumuman yang sesuai dengan filter pencarian.
            </div>
          ) : (
            /* Grid Kartu Berita / Pengumuman */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayedNews.map((item) => {
                const isBerita = item.type.toLowerCase() === 'berita';
                return (
                  <div
                    key={item.id}
                    className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs flex flex-col justify-between hover:shadow-md hover:border-slate-300 transition duration-200"
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
                        type="button"
                        onClick={() => setSelectedNews(item)}
                        className="text-xs font-bold text-cyan-700 hover:text-cyan-800 active:scale-95 inline-flex items-center gap-1 uppercase tracking-wider transition cursor-pointer"
                      >
                        BACA SELENGKAPNYA <span>&rarr;</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-1.5 pt-12">
              <button
                type="button"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                className="w-8 h-8 flex items-center justify-center rounded border border-slate-200 bg-white text-slate-500 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed text-xs transition cursor-pointer"
              >
                &lt;
              </button>

              {Array.from({ length: totalPages }, (_, idx) => idx + 1).map((page) => (
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

              <button
                type="button"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                className="w-8 h-8 flex items-center justify-center rounded border border-slate-200 bg-white text-slate-500 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed text-xs transition cursor-pointer"
              >
                &gt;
              </button>
            </div>
          )}

        </div>
      </main>

      {/* Modal Detail Berita */}
      {selectedNews && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 relative animate-scale-up">
            <button
              type="button"
              onClick={() => setSelectedNews(null)}
              className="absolute top-4 right-4 z-10 text-slate-600 hover:text-slate-900 text-lg font-bold w-8 h-8 rounded-full bg-white/80 hover:bg-white shadow-sm flex items-center justify-center cursor-pointer transition"
            >
              ✕
            </button>

            <div className="h-60 w-full overflow-hidden relative">
              <img
                src={selectedNews.image}
                alt={selectedNews.title}
                className="w-full h-full object-cover"
              />
              <span
                className={`absolute bottom-3 left-4 text-[10px] font-bold px-2.5 py-0.5 rounded shadow-xs ${
                  selectedNews.type.toLowerCase() === 'berita'
                    ? 'bg-amber-400 text-slate-900'
                    : 'bg-[#0c2340] text-white'
                }`}
              >
                {selectedNews.type}
              </span>
            </div>

            <div className="p-6">
              <span className="text-xs text-slate-400 block mb-1">
                Dipublikasikan pada: {selectedNews.date}
              </span>
              <h2 className="text-lg md:text-xl font-bold text-[#0c2340] leading-snug mb-4">
                {selectedNews.title}
              </h2>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed mb-6">
                {selectedNews.content || selectedNews.description}
              </p>

              <div className="flex justify-between items-center pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => handleCopyLink(selectedNews.title)}
                  className="text-xs font-semibold text-cyan-700 hover:underline flex items-center gap-1.5 cursor-pointer"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                  <span>Bagikan Link</span>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedNews(null)}
                  className="px-4 py-2 text-xs font-semibold bg-[#0c2340] hover:bg-[#123055] text-white rounded transition cursor-pointer"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Berita;
