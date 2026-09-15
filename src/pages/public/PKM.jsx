import { useState } from 'react';

const PKM = () => {
  // Data Program Pengabdian
  const programs = [
    {
      id: 1,
      badge: 'Desa Binaan',
      title: 'Pengembangan Desa Energi Mandiri',
      desc: 'Program pembinaan desa berkelanjutan berfokus pada kemandirian energi berbasis sumber daya lokal terbarukan.',
      img: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=600',
      location: 'Kabupaten Bogor, Jawa Barat',
      target: 'Masyarakat desa & kelompok tani lokal',
      details: 'Pengembangan teknologi tepat guna berbasis pembangkit listrik surya (PLTS) dan pemanfaatan biomassa guna memasok kebutuhan listrik irigasi sawah secara mandiri.'
    },
    {
      id: 2,
      badge: 'Pelatihan',
      title: 'Peningkatan Kapasitas Guru SMK',
      desc: 'Pelatihan dan lokakarya peningkatan kompetensi teknis bagi guru-guru SMK vokasi di bidang kelistrikan dan IT.',
      img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=600',
      location: 'DKI Jakarta',
      target: 'Guru kejuruan Teknik Instalasi Tenaga Listrik',
      details: 'Program intensif selama 32 JP mencakup pemrograman otomasi industri PLC, instrumentasi sensor cerdas, dan sertifikasi keselamatan ketenagalistrikan (K3).'
    },
    {
      id: 3,
      badge: 'Penerapan TTG',
      title: 'Implementasi Teknologi Tepat Guna',
      desc: 'Penerapan hasil riset akademis menjadi teknologi siap pakai yang menyelesaikan permasalahan spesifik di masyarakat.',
      img: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?q=80&w=600',
      location: 'Pesisir Jawa Barat',
      target: 'Kelompok Nelayan Tradisional',
      details: 'Pemasangan pendingin solar panel portable untuk cold-storage kapal nelayan sehingga menjaga kesegaran ikan tanpa bergantung es balok.'
    }
  ];

  // Data Pengumuman
  const announcements = [
    {
      id: 1,
      date: '24 Okt 2023',
      title: 'Penerimaan Proposal PKM Internal Semester Ganjil 2023/2024',
      content: 'LPPM membuka pendaftaran proposal Pengabdian Kepada Masyarakat (PKM) skema reguler dan desa binaan. Pengajuan dibuka hingga 20 November 2023 melalui portal sistem informasi.'
    },
    {
      id: 2,
      date: '15 Sep 2023',
      title: 'Hasil Seleksi Pendanaan PKM DRTPM Kemdikbudristek Tahun 2023',
      content: 'Selamat kepada para dosen pengusul yang berhasil memenangkan hibah pengabdian masyarakat skema pemberdayaan kemitraan masyarakat DRTPM. Pencairan termin I akan dikoordinasikan segera.'
    }
  ];

  // Data Panduan & Template
  const documents = [
    { id: 1, name: 'Buku Panduan PKM Internal 2023', file: 'Panduan_PKM_Internal_2023.pdf' },
    { id: 2, name: 'Template Proposal PKM', file: 'Template_Proposal_PKM.docx' },
    { id: 3, name: 'Format Laporan Kemajuan PKM', file: 'Format_Laporan_Kemajuan_PKM.docx' },
    { id: 4, name: 'Format Laporan Akhir PKM', file: 'Format_Laporan_Akhir_PKM.docx' }
  ];

  // Data Galeri
  const galleryItems = [
    { id: 1, img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=600', title: 'Perakitan Modul Kontrol Elektronik' },
    { id: 2, img: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=600', title: 'Pemasangan Pompa Air Tenaga Surya di Lahan Pertanian' },
    { id: 3, img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=600', title: 'Pengujian Sinyal Osiloskop' },
    { id: 4, img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=600', title: 'Inspeksi Jalur PCB' },
    { id: 5, img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=600', title: 'Pelatihan Mikrokontroler' },
    { id: 6, img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=600', title: 'Penyolderan Komponen Presisi' },
    { id: 7, img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=600', title: 'Pengukuran Tegangan Sirkuit' },
    { id: 8, img: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=600', title: 'Serah Terima Fasilitas Listrik Surya ke Petani' }
  ];

  // State
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);
  const [selectedGallery, setSelectedGallery] = useState(null);
  const [downloadingId, setDownloadingId] = useState(null);
  const [toastMsg, setToastMsg] = useState('');

  const triggerToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(''), 3000);
  };

  const handleDownload = (doc) => {
    setDownloadingId(doc.id);
    setTimeout(() => {
      setDownloadingId(null);
      triggerToast(`Dokumen "${doc.file}" berhasil diunduh!`);
    }, 800);
  };

  return (
    <div className="w-full relative">
      {/* Toast Feedback */}
      {toastMsg && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#0c2340] text-white px-4 py-3 rounded-lg shadow-xl text-xs flex items-center gap-2 border border-slate-700 animate-fade-in">
          <svg className="w-4 h-4 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          <span>{toastMsg}</span>
        </div>
      )}

      {/* Header Breadcrumb */}
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="text-xs font-semibold text-slate-400 mb-2">
            <span>Beranda</span> <span className="mx-1">&gt;</span> 
            <span>Program</span> <span className="mx-1">&gt;</span> 
            <span className="text-[#0c2340] font-bold">PKM</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-[#0c2340]">
            Pengabdian Kepada Masyarakat
          </h1>
        </div>
      </div>

      {/* Konten Utama */}
      <div className="max-w-7xl mx-auto px-6 py-12 space-y-16">
        
        {/* SECTION 1: Program Pengabdian */}
        <section>
          <h2 className="text-xl font-bold text-[#0c2340] mb-6">
            Program Pengabdian
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {programs.map((prog) => (
              <div 
                key={prog.id} 
                className="bg-white rounded-xl overflow-hidden shadow-xs border border-slate-200 flex flex-col justify-between hover:shadow-md hover:border-slate-300 transition duration-200"
              >
                <div>
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                    <img 
                      src={prog.img} 
                      alt={prog.title} 
                      className="w-full h-full object-cover hover:scale-105 transition duration-300 cursor-pointer"
                      onClick={() => setSelectedProgram(prog)}
                    />
                    <span className="absolute top-3 left-3 bg-[#f5ca38] text-slate-900 text-[10px] font-bold px-2 py-0.5 rounded shadow-xs">
                      {prog.badge}
                    </span>
                  </div>

                  <div className="p-5">
                    <h3 
                      onClick={() => setSelectedProgram(prog)}
                      className="font-bold text-[#0c2340] text-base mb-2 leading-snug cursor-pointer hover:text-cyan-700 transition"
                    >
                      {prog.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {prog.desc}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5">
                  <button 
                    type="button"
                    onClick={() => setSelectedProgram(prog)}
                    className="text-xs font-semibold text-cyan-700 hover:text-cyan-800 inline-flex items-center gap-1 active:scale-95 transition cursor-pointer"
                  >
                    Selengkapnya <span>&rarr;</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 2: Pengumuman & Panduan/Template */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Kolom Kiri: Pengumuman */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <svg className="w-5 h-5 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
              </svg>
              <h2 className="text-lg font-bold text-[#0c2340]">Pengumuman</h2>
            </div>

            <div className="space-y-4">
              {announcements.map((ann) => (
                <div 
                  key={ann.id} 
                  onClick={() => setSelectedAnnouncement(ann)}
                  className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs hover:border-slate-300 hover:shadow-sm cursor-pointer transition"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-[#f5ca38] text-slate-900 text-[10px] font-bold px-2 py-0.5 rounded">
                      PENGUMUMAN
                    </span>
                    <span className="text-[11px] text-slate-400">{ann.date}</span>
                  </div>
                  <h3 className="font-bold text-[#0c2340] text-xs md:text-sm leading-snug hover:text-cyan-700 transition">
                    {ann.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/* Kolom Kanan: Panduan & Template */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <svg className="w-5 h-5 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h2 className="text-lg font-bold text-[#0c2340]">Panduan & Template</h2>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 divide-y divide-slate-100 shadow-xs">
              {documents.map((doc) => (
                <div 
                  key={doc.id} 
                  className="p-4 flex items-center justify-between hover:bg-slate-50 transition"
                >
                  <span 
                    onClick={() => handleDownload(doc)}
                    className="text-xs font-semibold text-slate-700 hover:text-cyan-700 cursor-pointer transition"
                  >
                    {doc.name}
                  </span>
                  <button 
                    type="button"
                    onClick={() => handleDownload(doc)}
                    disabled={downloadingId === doc.id}
                    className="text-slate-500 hover:text-[#0c2340] p-1.5 rounded transition cursor-pointer disabled:opacity-50" 
                    title="Unduh Dokumen"
                  >
                    {downloadingId === doc.id ? (
                      <div className="w-4 h-4 border-2 border-[#0c2340] border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>

        </section>

        {/* SECTION 3: Galeri & Hasil Kegiatan */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-[#0c2340]">
              Galeri & Hasil Kegiatan
            </h2>
            <span className="text-xs text-slate-400">Klik gambar untuk melihat detail</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryItems.map((item) => (
              <div 
                key={item.id} 
                onClick={() => setSelectedGallery(item)}
                className="aspect-square rounded-xl overflow-hidden shadow-xs border border-slate-200 cursor-pointer group relative bg-slate-100"
              >
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 flex flex-col justify-end p-3 transition duration-200">
                  <span className="text-[11px] font-semibold text-white leading-tight line-clamp-2">
                    {item.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* MODAL 1: Detail Program */}
      {selectedProgram && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 relative animate-scale-up">
            <button
              type="button"
              onClick={() => setSelectedProgram(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 text-lg font-bold w-8 h-8 rounded-full hover:bg-slate-100 flex items-center justify-center cursor-pointer transition"
            >
              ✕
            </button>
            <span className="bg-[#f5ca38] text-slate-900 text-[10px] font-bold px-2 py-0.5 rounded">
              {selectedProgram.badge}
            </span>
            <h3 className="text-lg font-bold text-[#0c2340] mt-3 leading-snug">
              {selectedProgram.title}
            </h3>

            <div className="my-4 space-y-1.5 text-xs text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-100">
              <p><strong className="text-slate-800">Wilayah:</strong> {selectedProgram.location}</p>
              <p><strong className="text-slate-800">Sasaran:</strong> {selectedProgram.target}</p>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed mb-6">
              {selectedProgram.details}
            </p>

            <div className="flex justify-end gap-2 border-t border-slate-100 pt-3">
              <button
                type="button"
                onClick={() => setSelectedProgram(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded transition cursor-pointer"
              >
                Tutup
              </button>
              <button
                type="button"
                onClick={() => {
                  triggerToast(`Permintaan info program "${selectedProgram.title}" terkirim!`);
                  setSelectedProgram(null);
                }}
                className="px-4 py-2 text-xs font-semibold bg-[#0c2340] hover:bg-[#123055] text-white rounded transition cursor-pointer"
              >
                Ikuti Program
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 2: Detail Pengumuman */}
      {selectedAnnouncement && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200 relative animate-scale-up">
            <button
              type="button"
              onClick={() => setSelectedAnnouncement(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 text-lg font-bold w-8 h-8 rounded-full hover:bg-slate-100 flex items-center justify-center cursor-pointer transition"
            >
              ✕
            </button>
            <span className="text-[11px] text-slate-400 block mb-1">
              {selectedAnnouncement.date}
            </span>
            <h3 className="text-base font-bold text-[#0c2340] leading-snug mb-3">
              {selectedAnnouncement.title}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-6">
              {selectedAnnouncement.content}
            </p>
            <div className="flex justify-end border-t border-slate-100 pt-3">
              <button
                type="button"
                onClick={() => setSelectedAnnouncement(null)}
                className="px-4 py-2 text-xs font-semibold bg-[#0c2340] hover:bg-[#123055] text-white rounded transition cursor-pointer"
              >
                Selesai Membaca
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 3: Lightbox Galeri */}
      {selectedGallery && (
        <div 
          onClick={() => setSelectedGallery(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 cursor-zoom-out"
        >
          <div 
            onClick={(e) => e.stopPropagation()} 
            className="relative max-w-2xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl cursor-default"
          >
            <img 
              src={selectedGallery.img} 
              alt={selectedGallery.title} 
              className="w-full max-h-[65vh] object-cover"
            />
            <div className="p-4 flex items-center justify-between">
              <span className="text-xs font-bold text-[#0c2340]">{selectedGallery.title}</span>
              <button
                type="button"
                onClick={() => setSelectedGallery(null)}
                className="px-3 py-1.5 text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 rounded transition cursor-pointer"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PKM;