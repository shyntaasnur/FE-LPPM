import { useState } from 'react';

const Dokumen = () => {
  // Mock Data Dokumen sesuai tampilan
  const initialDocuments = [
    {
      id: 1,
      category: 'Panduan',
      date: '12 Okt 2024',
      title: 'Panduan Pelaksanaan Penelitian Tahun 2024',
      description: 'Dokumen panduan lengkap untuk pelaksanaan hibah penelitian internal.',
      fileName: 'Panduan_Pelaksanaan_Penelitian_2024.pdf',
      fileSize: '3.4 MB',
      fileFormat: 'PDF'
    },
    {
      id: 2,
      category: 'Template',
      date: '05 Okt 2024',
      title: 'Template Proposal Pengabdian Masyarakat',
      description: 'Format standar proposal PKM untuk dosen IT-PLN.',
      fileName: 'Template_Proposal_PKM_ITPLN.docx',
      fileSize: '1.2 MB',
      fileFormat: 'DOCX'
    },
    {
      id: 3,
      category: 'SOP',
      date: '28 Sep 2024',
      title: 'SOP Pengajuan HKI',
      description: 'Prosedur standar pengajuan Hak Kekayaan Intelektual melalui LPPM.',
      fileName: 'SOP_Pengajuan_HKI_LPPM.pdf',
      fileSize: '890 KB',
      fileFormat: 'PDF'
    },
    {
      id: 4,
      category: 'Formulir',
      date: '15 Sep 2024',
      title: 'Formulir Pendaftaran Seminar Hasil',
      description: 'Formulir yang diperlukan untuk mendaftar seminar hasil penelitian.',
      fileName: 'Formulir_Pendaftaran_Semhas.docx',
      fileSize: '540 KB',
      fileFormat: 'DOCX'
    },
    {
      id: 5,
      category: 'Dokumen Pendukung',
      date: '02 Sep 2024',
      title: 'Format Lembar Pengesahan Proposal dan Laporan',
      description: 'Standarisasi lembar persetujuan dekan dan pimpinan lembaga.',
      fileName: 'Format_Lembar_Pengesahan.docx',
      fileSize: '420 KB',
      fileFormat: 'DOCX'
    },
    {
      id: 6,
      category: 'Dokumen Peraturan',
      date: '20 Agu 2024',
      title: 'SK Rektor tentang Standar Biaya Masukan Riset',
      description: 'Pedoman alokasi dan pertanggungjawaban anggaran riset internal.',
      fileName: 'SK_Rektor_SBM_Riset.pdf',
      fileSize: '2.1 MB',
      fileFormat: 'PDF'
    }
  ];

  const categories = [
    'Semua Dokumen',
    'Panduan',
    'Template',
    'SOP',
    'Formulir',
    'Dokumen Pendukung',
    'Dokumen Peraturan'
  ];

  // State Management
  const [selectedCategory, setSelectedCategory] = useState('Semua Dokumen');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [downloadingId, setDownloadingId] = useState(null);
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [toastMessage, setToastMessage] = useState('');

  const itemsPerPage = 4;

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3500);
  };

  // Filter Dokumen Berdasarkan Kategori & Kata Kunci
  const filteredDocs = initialDocuments.filter((doc) => {
    const matchesCategory =
      selectedCategory === 'Semua Dokumen' || doc.category === selectedCategory;
    const matchesSearch =
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Pagination Logic
  const totalPages = Math.ceil(filteredDocs.length / itemsPerPage) || 1;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentDocs = filteredDocs.slice(startIndex, startIndex + itemsPerPage);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setCurrentPage(1);
  };

  const handleDownload = (doc) => {
    setDownloadingId(doc.id);
    setTimeout(() => {
      setDownloadingId(null);
      showToast(`Mengunduh berkas: ${doc.fileName}`);
    }, 800);
  };

  return (
    <div className="w-full relative">
      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#0c2340] text-white px-4 py-3 rounded-lg shadow-xl text-xs flex items-center gap-2 border border-slate-700 animate-fade-in">
          <svg className="w-4 h-4 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Header Breadcrumb & Judul Halaman */}
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="text-xs font-semibold text-slate-400 mb-2">
            <span>Beranda</span> <span className="mx-1">&gt;</span>
            <span>Publikasi & Dokumen</span> <span className="mx-1">&gt;</span>
            <span className="text-slate-800 font-bold">Unduh Dokumen</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-[#0c2340]">
            Repositori Dokumen
          </h1>
        </div>
      </div>

      {/* Konten Utama: 2 Kolom (Sidebar Kategori & Daftar Dokumen) */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* SIDEBAR KIRI: Kategori */}
          <aside className="lg:col-span-3 bg-white rounded-xl border border-slate-200 p-6 shadow-xs">
            <h2 className="text-base font-bold text-[#0c2340] mb-5">
              Kategori
            </h2>
            <ul className="space-y-1">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <li key={cat}>
                    <button
                      type="button"
                      onClick={() => handleCategoryChange(cat)}
                      className={`w-full text-left text-xs font-semibold py-2.5 px-3.5 rounded-lg transition cursor-pointer flex items-center justify-between ${
                        isActive
                          ? 'bg-slate-100 text-[#0c2340] border-l-4 border-amber-400 font-bold'
                          : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                      }`}
                    >
                      <span>{cat}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </aside>

          {/* KONTEN KANAN: Search Bar & List Dokumen */}
          <section className="lg:col-span-9 space-y-6">
            
            {/* Bilah Pencarian Dokumen */}
            <form
              onSubmit={handleSearchSubmit}
              className="bg-white rounded-xl border border-slate-200 p-3 shadow-xs flex items-center gap-3"
            >
              <div className="relative grow">
                <span className="absolute inset-y-0 left-3 flex items-center text-slate-400 pointer-events-none">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </span>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1);
                  }}
                  placeholder="Cari dokumen..."
                  className="w-full pl-9 pr-4 py-2 text-xs bg-slate-50/80 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0c2340] focus:bg-white text-slate-800 transition"
                />
              </div>
              <button
                type="submit"
                className="bg-[#0c2340] hover:bg-[#123055] active:scale-98 text-white font-bold text-xs px-5 py-2.5 rounded-lg shrink-0 transition cursor-pointer"
              >
                Cari Dokumen
              </button>
            </form>

            {/* Daftar Kartu Dokumen */}
            <div className="bg-white rounded-xl border border-slate-200 divide-y divide-slate-100 shadow-xs overflow-hidden">
              {currentDocs.length === 0 ? (
                <div className="p-12 text-center text-xs text-slate-500">
                  Tidak ada dokumen yang sesuai dengan kriteria pencarian.
                </div>
              ) : (
                currentDocs.map((doc) => (
                  <div
                    key={doc.id}
                    className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6 hover:bg-slate-50/70 transition"
                  >
                    <div className="space-y-1.5 max-w-2xl">
                      <div className="flex items-center gap-3">
                        <span className="bg-[#fef3c7] text-[#92400e] text-[10px] font-bold px-2 py-0.5 rounded">
                          {doc.category}
                        </span>
                        <span className="text-[11px] text-slate-400 flex items-center gap-1">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth="2" />
                            <line x1="16" y1="2" x2="16" y2="6" strokeWidth="2" />
                            <line x1="8" y1="2" x2="8" y2="6" strokeWidth="2" />
                            <line x1="3" y1="10" x2="21" y2="10" strokeWidth="2" />
                          </svg>
                          <span>{doc.date}</span>
                        </span>
                      </div>

                      <h3
                        onClick={() => setSelectedDoc(doc)}
                        className="font-bold text-[#0c2340] text-sm md:text-base leading-snug hover:text-teal-700 cursor-pointer transition"
                      >
                        {doc.title}
                      </h3>

                      <p className="text-xs text-slate-500 leading-relaxed">
                        {doc.description}
                      </p>
                    </div>

                    <div className="shrink-0 flex items-center">
                      <button
                        type="button"
                        onClick={() => handleDownload(doc)}
                        disabled={downloadingId === doc.id}
                        className="w-full sm:w-auto border border-slate-300 hover:border-slate-800 hover:bg-slate-50 active:scale-95 text-slate-700 text-xs font-semibold px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition cursor-pointer disabled:opacity-50"
                      >
                        {downloadingId === doc.id ? (
                          <div className="w-3.5 h-3.5 border-2 border-slate-700 border-t-transparent rounded-full animate-spin"></div>
                        ) : (
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                          </svg>
                        )}
                        <span>Unduh</span>
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Navigasi Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 pt-4">
                <button
                  type="button"
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  className="w-8 h-8 rounded-lg border border-slate-200 bg-white text-slate-500 hover:bg-slate-50 flex items-center justify-center text-xs transition cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  &lt;
                </button>

                {Array.from({ length: totalPages }, (_, idx) => idx + 1).map((page) => (
                  <button
                    key={page}
                    type="button"
                    onClick={() => setCurrentPage(page)}
                    className={`w-8 h-8 rounded-lg text-xs font-semibold transition cursor-pointer ${
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
                  className="w-8 h-8 rounded-lg border border-slate-200 bg-white text-slate-500 hover:bg-slate-50 flex items-center justify-center text-xs transition cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  &gt;
                </button>
              </div>
            )}

          </section>
        </div>
      </div>

      {/* MODAL DETAIL DOKUMEN */}
      {selectedDoc && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200 relative animate-scale-up">
            <button
              type="button"
              onClick={() => setSelectedDoc(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 text-lg font-bold w-8 h-8 rounded-full hover:bg-slate-100 flex items-center justify-center cursor-pointer transition"
            >
              ✕
            </button>

            <span className="bg-[#fef3c7] text-[#92400e] text-[10px] font-bold px-2 py-0.5 rounded">
              {selectedDoc.category}
            </span>

            <h3 className="text-base font-bold text-[#0c2340] mt-2 mb-1 leading-snug">
              {selectedDoc.title}
            </h3>
            <span className="text-[11px] text-slate-400 block mb-4">
              Terakhir diperbarui: {selectedDoc.date}
            </span>

            <div className="space-y-2 text-xs bg-slate-50 p-3.5 rounded-xl border border-slate-200/80 mb-5">
              <p><strong className="text-slate-700">Nama Berkas:</strong> {selectedDoc.fileName}</p>
              <p><strong className="text-slate-700">Ukuran:</strong> {selectedDoc.fileSize}</p>
              <p><strong className="text-slate-700">Format:</strong> {selectedDoc.fileFormat}</p>
              <p className="text-slate-600 pt-1 leading-relaxed border-t border-slate-200/60 mt-2">
                {selectedDoc.description}
              </p>
            </div>

            <div className="flex justify-end gap-2 border-t border-slate-100 pt-3">
              <button
                type="button"
                onClick={() => setSelectedDoc(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-lg transition cursor-pointer"
              >
                Tutup
              </button>
              <button
                type="button"
                onClick={() => {
                  handleDownload(selectedDoc);
                  setSelectedDoc(null);
                }}
                className="px-5 py-2 text-xs font-semibold bg-[#0c2340] hover:bg-[#123055] text-white rounded-lg flex items-center gap-1.5 transition cursor-pointer"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span>Unduh Sekarang</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dokumen;