import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Jurnal = () => {
  const ojsList = [
    {
      id: 1,
      title: 'KILOWATT: Jurnal Ilmu Ketenagalistrikan',
      issn: 'ISSN: 2549-xxxx (Cetak) / 2849-xxxx (Online)',
      img: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=400',
      link: 'https://example.com/ojs/kilowatt'
    },
    {
      id: 2,
      title: 'Jurnal Energi & Teknologi Cerdas',
      issn: 'ISSN: 2655-xxxx (Online)',
      img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=600',
      link: 'https://example.com/ojs/jetc'
    },
    {
      id: 3,
      title: 'Jurnal Informatika & Sistem Informasi (JISI)',
      issn: 'ISSN: 2715-xxxx (Online)',
      img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=400',
      link: 'https://example.com/ojs/jisi'
    },
    {
      id: 4,
      title: 'Jurnal Infrastruktur & Teknik Sipil',
      issn: 'ISSN: 2828-xxxx (Online)',
      img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400',
      link: 'https://example.com/ojs/jits'
    }
  ];

  const publications = [
    {
      id: 1,
      tag: 'KILOWATT VOL 7 NO 2',
      date: 'Desember 2024',
      title: 'Analisis Stabilitas Sistem Tenaga Listrik pada Penetrasi Energi Terbarukan Skala Besar',
      authors: 'Ahmad Fauzi, Budi Santoso, Siti Aminah',
      abstract: 'Penelitian ini mengevaluasi dampak integrasi pembangkit listrik tenaga surya (PLTS) terhadap stabilitas frekuensi dan tegangan pada sistem interkoneksi...',
      fullAbstract: 'Penelitian ini mengevaluasi dampak integrasi pembangkit listrik tenaga surya (PLTS) terhadap stabilitas frekuensi dan tegangan pada sistem interkoneksi pulau Jawa-Bali. Menggunakan metode simulasi transien dinamis, hasil riset menunjukkan bahwa penetrasi PLTS di atas 30% membutuhkan instalasi Battery Energy Storage System (BESS) guna meredam fluktuasi frekuensi dalam batas toleransi standar grid code.',
      doi: '10.35313/kilowatt.v7i2.1234'
    },
    {
      id: 2,
      tag: 'JISI VOL 5 NO 1',
      date: 'Januari 2025',
      title: 'Implementasi Algoritma Deep Learning untuk Deteksi Kerusakan Isolator Jaringan Transmisi',
      authors: 'Rizky Pratama, Diana Putri',
      abstract: 'Penggunaan Convolutional Neural Networks (CNN) dalam mengolah citra drone untuk mengidentifikasi korosi dan keretakan pada isolator porselen secara otomatis...',
      fullAbstract: 'Penggunaan Convolutional Neural Networks (CNN) dalam mengolah citra drone untuk mengidentifikasi korosi dan keretakan pada isolator porselen secara otomatis. Arsitektur YOLOv8 yang dimodifikasi menghasilkan tingkat akurasi mean Average Precision (mAP) sebesar 94,2% dengan kecepatan pemrosesan 38 FPS, memungkinkan inspeksi jaringan transmisi tegangan tinggi dilakukan secara mendekati waktu nyata (real-time).',
      doi: '10.35313/jisi.v5i1.5870'
    }
  ];

  // State Interaksi
  const [selectedPub, setSelectedPub] = useState(null);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);

  // Form State
  const [authorName, setAuthorName] = useState('');
  const [paperTitle, setPaperTitle] = useState('');
  const [selectedJournal, setSelectedJournal] = useState('KILOWATT');

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3500);
  };

  const handleDownloadPdf = (title) => {
    showToast(`Mengunduh PDF: "${title.slice(0, 30)}..."`);
  };

  const handleSubmitPaper = (e) => {
    e.preventDefault();
    if (!authorName || !paperTitle) {
      showToast('Harap lengkapi semua bidang form.');
      return;
    }
    setIsSubmitModalOpen(false);
    setAuthorName('');
    setPaperTitle('');
    showToast('Naskah berhasil disubmit! Tim redaksi akan meninjau.');
  };

  const filteredPublications = publications.filter((p) =>
    p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.authors.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col justify-between relative">
      <Navbar />

      {/* Feedback Toast */}
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
              <span>Publikasi & Dokumen</span> <span className="mx-1">&gt;</span>
              <span className="text-slate-800 font-bold">Jurnal</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-[#0c2340]">
              Jurnal & Publikasi Ilmiah
            </h1>
          </div>
        </div>

        {/* Konten Utama */}
        <div className="max-w-7xl mx-auto px-6 py-10 space-y-12">
          
          {/* BANNER: Call for Paper */}
          <section className="bg-[#fcf9ee] border-l-4 border-l-teal-700 border-y border-r border-slate-200 rounded-xl p-6 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#005a60] text-white flex items-center justify-center shrink-0 mt-0.5">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
              </div>
              <div className="space-y-1">
                <h2 className="text-sm md:text-base font-bold text-[#0c2340]">
                  Call for Paper: KILOWATT Vol 8 No 1 (2025)
                </h2>
                <p className="text-xs text-slate-600 leading-relaxed max-w-2xl">
                  Kami mengundang para peneliti, akademisi, dan praktisi untuk mengirimkan naskah publikasi ilmiah di bidang ketenagalistrikan dan energi terbarukan. Batas pengumpulan: 15 Maret 2025.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsSubmitModalOpen(true)}
              className="inline-flex items-center gap-1.5 bg-[#6d561b] hover:bg-[#574414] active:scale-95 text-white text-xs font-bold px-5 py-2.5 rounded shadow-sm shrink-0 uppercase tracking-wider transition cursor-pointer"
            >
              <span>KIRIM NASKAH</span>
              <span>&gt;</span>
            </button>
          </section>

          {/* SECTION 1: Jurnal Open Journal System (OJS) */}
          <section>
            <div className="flex items-center gap-2 mb-6">
              <svg className="w-5 h-5 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h2 className="text-lg font-bold text-[#0c2340]">
                Jurnal Open Journal System (OJS)
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {ojsList.map((item) => (
                <div key={item.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs flex flex-col justify-between hover:shadow-md transition">
                  <div>
                    <div className="h-44 bg-slate-100 p-4 flex items-center justify-center overflow-hidden">
                      <img 
                        src={item.img} 
                        alt={item.title} 
                        className="h-full w-auto object-contain rounded shadow-xs transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <div className="p-4 space-y-1.5">
                      <h3 className="font-bold text-[#0c2340] text-xs leading-snug line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-[10px] text-slate-400 leading-tight">
                        {item.issn}
                      </p>
                    </div>
                  </div>

                  <div className="p-4 pt-0">
                    <button
                      type="button"
                      onClick={() => showToast(`Membuka portal OJS: ${item.title}`)}
                      className="block w-full py-2 bg-[#0c2340] hover:bg-[#123055] active:scale-98 text-white text-center text-xs font-semibold rounded transition cursor-pointer"
                    >
                      Kunjungi OJS
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 2: Publikasi Terbaru */}
          <section>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
                <h2 className="text-lg font-bold text-[#0c2340]">
                  Publikasi Terbaru
                </h2>
              </div>

              {/* Bar Pencarian */}
              {showSearch && (
                <div className="w-full sm:w-72">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Cari judul atau nama penulis..."
                    className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700 bg-white"
                  />
                </div>
              )}
            </div>

            <div className="space-y-4">
              {filteredPublications.length === 0 ? (
                <div className="p-8 text-center text-xs text-slate-500 bg-white border border-slate-200 rounded-xl">
                  Tidak ada artikel publikasi yang sesuai dengan pencarian "{searchQuery}".
                </div>
              ) : (
                filteredPublications.map((pub) => (
                  <div key={pub.id} className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-slate-300 transition">
                    <div className="space-y-2 max-w-3xl">
                      <div className="flex items-center justify-between md:justify-start gap-4">
                        <span className="bg-[#00c2cb] text-white text-[10px] font-bold px-2 py-0.5 rounded tracking-wide">
                          {pub.tag}
                        </span>
                        <span className="text-[11px] text-slate-400">
                          {pub.date}
                        </span>
                      </div>

                      <h3 className="font-bold text-[#0c2340] text-sm md:text-base leading-snug">
                        {pub.title}
                      </h3>

                      <p className="text-[11px] text-slate-500">
                        <span className="font-semibold">Penulis:</span> {pub.authors}
                      </p>

                      <p className="text-xs text-slate-600 leading-relaxed">
                        {pub.abstract}
                      </p>

                      <div className="flex flex-wrap items-center gap-4 text-[11px] text-cyan-700 font-mono pt-1">
                        <button
                          type="button"
                          onClick={() => showToast(`Mengalihkan ke tautan resmi DOI: https://doi.org/${pub.doi}`)}
                          className="flex items-center gap-1 hover:underline cursor-pointer"
                        >
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                          </svg>
                          <span>DOI: {pub.doi}</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDownloadPdf(pub.title)}
                          className="flex items-center gap-1 hover:underline cursor-pointer"
                        >
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          <span>Full Text PDF</span>
                        </button>
                      </div>
                    </div>

                    <div className="shrink-0 flex items-center">
                      <button
                        type="button"
                        onClick={() => setSelectedPub(pub)}
                        className="w-full md:w-auto text-center border border-slate-300 hover:border-slate-800 hover:bg-slate-50 text-slate-700 active:scale-95 text-xs font-bold px-4 py-3 rounded uppercase tracking-wider leading-tight transition cursor-pointer"
                      >
                        DETAIL<br />ABSTRAK
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Tombol Lihat Semua Publikasi */}
            <div className="flex justify-center pt-8">
              <button
                type="button"
                onClick={() => {
                  setShowSearch(!showSearch);
                  showToast(showSearch ? 'Menutup filter pencarian.' : 'Silakan cari artikel publikasi di kolom pencarian.');
                }}
                className="border border-slate-300 hover:border-slate-800 bg-[#e5e7eb]/60 hover:bg-[#e5e7eb] active:scale-95 text-slate-800 font-bold text-xs px-6 py-2.5 rounded uppercase tracking-wider transition cursor-pointer"
              >
                {showSearch ? 'SEMBUNYIKAN PENCARIAN' : 'LIHAT SEMUA PUBLIKASI'}
              </button>
            </div>
          </section>

        </div>
      </main>

      {/* MODAL 1: Detail Abstrak */}
      {selectedPub && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 shadow-2xl border border-slate-200 relative animate-scale-up">
            <button
              type="button"
              onClick={() => setSelectedPub(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 text-lg font-bold w-8 h-8 rounded-full hover:bg-slate-100 flex items-center justify-center cursor-pointer transition"
            >
              ✕
            </button>
            <span className="bg-[#00c2cb] text-white text-[10px] font-bold px-2.5 py-1 rounded">
              {selectedPub.tag}
            </span>
            <h3 className="text-lg font-bold text-[#0c2340] mt-3 leading-snug">
              {selectedPub.title}
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              <span className="font-semibold">Penulis:</span> {selectedPub.authors}
            </p>
            <div className="my-4 border-t border-slate-100 pt-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Abstrak Lengkap</h4>
              <p className="text-xs text-slate-700 leading-relaxed max-h-56 overflow-y-auto pr-2">
                {selectedPub.fullAbstract}
              </p>
            </div>
            <div className="flex justify-end gap-2 pt-2 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setSelectedPub(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded transition cursor-pointer"
              >
                Tutup
              </button>
              <button
                type="button"
                onClick={() => {
                  handleDownloadPdf(selectedPub.title);
                  setSelectedPub(null);
                }}
                className="px-4 py-2 text-xs font-semibold bg-[#0c2340] hover:bg-[#123055] text-white rounded transition cursor-pointer"
              >
                Unduh PDF
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 2: Kirim Naskah */}
      {isSubmitModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 relative">
            <button
              type="button"
              onClick={() => setIsSubmitModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 text-lg font-bold w-8 h-8 rounded-full hover:bg-slate-100 flex items-center justify-center cursor-pointer transition"
            >
              ✕
            </button>
            <h3 className="text-base font-bold text-[#0c2340]">Kirim Naskah Publikasi</h3>
            <p className="text-xs text-slate-500 mt-1 mb-4">
              Isi data naskah ilmiah Anda untuk memulai proses peer-review.
            </p>

            <form onSubmit={handleSubmitPaper} className="space-y-4">
              <div>
                <label className="block text-[11px] font-semibold text-slate-700 mb-1">Target Jurnal</label>
                <select
                  value={selectedJournal}
                  onChange={(e) => setSelectedJournal(e.target.value)}
                  className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700 bg-white"
                >
                  <option value="KILOWATT">KILOWATT: Jurnal Ilmu Ketenagalistrikan</option>
                  <option value="JETC">Jurnal Energi & Teknologi Cerdas</option>
                  <option value="JISI">Jurnal Informatika & Sistem Informasi</option>
                  <option value="JITS">Jurnal Infrastruktur & Teknik Sipil</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-700 mb-1">Nama Penulis Korespondensi</label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Dr. Ir. John Doe, M.T."
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700 bg-white"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-700 mb-1">Judul Artikel Ilmiah</label>
                <input
                  type="text"
                  required
                  placeholder="Judul lengkap naskah..."
                  value={paperTitle}
                  onChange={(e) => setPaperTitle(e.target.value)}
                  className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700 bg-white"
                />
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsSubmitModalOpen(false)}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded transition cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-semibold bg-[#6d561b] hover:bg-[#574414] text-white rounded transition cursor-pointer"
                >
                  Kirim Sekarang
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Jurnal;
