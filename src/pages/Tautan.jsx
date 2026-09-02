import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TautanTerkait = () => {
  // Data Tautan berdasarkan kelompok pada tampilan
  const linkSections = [
    {
      id: 'institusi',
      category: 'Portal Institusi IT-PLN',
      links: [
        {
          id: 1,
          title: 'SIT-PLN',
          desc: 'Sistem Informasi Terpadu IT-PLN untuk layanan akademik dan administrasi terpusat.',
          url: 'https://sit.itpln.ac.id'
        },
        {
          id: 2,
          title: 'Perpustakaan IT-PLN',
          desc: 'Akses repositori karya ilmiah, jurnal, dan koleksi buku digital perpustakaan institut.',
          url: 'https://perpustakaan.itpln.ac.id'
        },
        {
          id: 3,
          title: 'Web Utama IT-PLN',
          desc: 'Portal informasi utama Institut Teknologi PLN, memuat berita dan profil institusi.',
          url: 'https://itpln.ac.id'
        }
      ]
    },
    {
      id: 'pemerintah',
      category: 'Sistem Pendanaan Pemerintah',
      links: [
        {
          id: 4,
          title: 'BIMA Kemdikbudristek',
          desc: 'Basis Informasi Penelitian dan Pengabdian kepada Masyarakat Kemdikbudristek.',
          url: 'https://bima.kemdikbud.go.id'
        },
        {
          id: 5,
          title: 'SINTA',
          desc: 'Science and Technology Index. Portal pengukuran kinerja ilmu pengetahuan dan teknologi.',
          url: 'https://sinta.kemdikbud.go.id'
        }
      ]
    },
    {
      id: 'eksternal',
      category: 'Publikasi Eksternal',
      links: [
        {
          id: 6,
          title: 'Scopus',
          desc: 'Database abstrak dan sitasi terbesar literatur peer-reviewed di dunia.',
          url: 'https://www.scopus.com'
        },
        {
          id: 7,
          title: 'Google Scholar',
          desc: 'Mesin pencari literatur akademis untuk melacak kutipan peneliti IT-PLN.',
          url: 'https://scholar.google.com'
        },
        {
          id: 8,
          title: 'ResearchGate',
          desc: 'Jaringan sosial profesional untuk ilmuwan dan peneliti berbagi dokumen ilmiah.',
          url: 'https://www.researchgate.net'
        }
      ]
    }
  ];

  // State untuk interaksi
  const [selectedLink, setSelectedLink] = useState(null);
  const [toastMessage, setToastMessage] = useState('');

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3000);
  };

  const handleCopy = (e, url) => {
    e.stopPropagation(); // Mencegah modal terbuka
    navigator.clipboard?.writeText(url);
    showToast('Tautan berhasil disalin ke clipboard!');
  };

  const handleProceed = () => {
    if (selectedLink) {
      window.open(selectedLink.url, '_blank', 'noopener,noreferrer');
      setSelectedLink(null);
    }
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
              <span className="text-slate-800 font-bold">Tautan Terkait</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-[#0c2340]">
              Tautan Terkait
            </h1>
          </div>
        </div>

        {/* Konten Utama */}
        <div className="max-w-7xl mx-auto px-6 py-12 space-y-12">
          {linkSections.map((section) => (
            <section key={section.id}>
              {/* Judul Kategori */}
              <h2 className="text-lg md:text-xl font-bold text-[#0c2340] mb-6">
                {section.category}
              </h2>

              {/* Grid Kartu Tautan */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.links.map((link) => (
                  <div
                    key={link.id}
                    onClick={() => setSelectedLink(link)}
                    className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs flex flex-col justify-between hover:border-slate-400 hover:shadow-md hover:-translate-y-0.5 transition duration-200 cursor-pointer group"
                  >
                    <div>
                      {/* Header Kartu: Judul & Ikon External */}
                      <div className="flex items-start justify-between gap-3 mb-2.5">
                        <h3 className="font-bold text-[#0c2340] text-sm md:text-base group-hover:text-teal-700 transition">
                          {link.title}
                        </h3>
                        <div className="flex items-center gap-1.5 shrink-0 text-slate-400 group-hover:text-teal-700 transition">
                          {/* Tombol Copy Cepat */}
                          <button
                            type="button"
                            onClick={(e) => handleCopy(e, link.url)}
                            title="Salin Tautan"
                            className="p-1 hover:bg-slate-100 rounded text-slate-400 hover:text-slate-700 transition"
                          >
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                          </button>

                          {/* Ikon Eksternal */}
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </div>
                      </div>

                      {/* Deskripsi */}
                      <p className="text-xs text-slate-500 leading-relaxed">
                        {link.desc}
                      </p>
                    </div>

                    {/* Hint di bawah */}
                    <div className="pt-4 mt-2 border-t border-slate-50 flex items-center justify-between text-[11px] text-teal-700 font-semibold opacity-0 group-hover:opacity-100 transition duration-150">
                      <span>Buka Halaman</span>
                      <span>&rarr;</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>

      {/* MODAL KONFIRMASI MENUJU LINK EKSTERNAL */}
      {selectedLink && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200 relative animate-scale-up">
            <button
              type="button"
              onClick={() => setSelectedLink(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 text-lg font-bold w-8 h-8 rounded-full hover:bg-slate-100 flex items-center justify-center cursor-pointer transition"
            >
              ✕
            </button>

            <div className="w-10 h-10 rounded-full bg-teal-50 text-teal-700 flex items-center justify-center mb-3">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>

            <h3 className="text-base font-bold text-[#0c2340]">Kunjungi Situs Eksternal</h3>
            <p className="text-xs text-slate-500 mt-1 mb-4 leading-relaxed">
              Anda akan dialihkan ke situs <strong>{selectedLink.title}</strong> di tab baru:
            </p>

            <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-xs text-slate-700 font-mono break-all mb-5">
              {selectedLink.url}
            </div>

            <div className="flex justify-end gap-2 border-t border-slate-100 pt-3">
              <button
                type="button"
                onClick={() => setSelectedLink(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded transition cursor-pointer"
              >
                Batal
              </button>
              <button
                type="button"
                onClick={handleProceed}
                className="px-4 py-2 text-xs font-semibold bg-[#0c2340] hover:bg-[#123055] text-white rounded transition cursor-pointer"
              >
                Lanjutkan ke Portal
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default TautanTerkait;
