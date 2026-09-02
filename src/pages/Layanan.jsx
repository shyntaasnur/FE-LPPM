import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Layanan = () => {
  // Data Layanan sesuai gambar
  const services = [
    {
      id: 1,
      title: 'Layanan HKI',
      desc: 'Fasilitasi pendaftaran Hak Kekayaan Intelektual untuk paten, hak cipta, dan...',
      fullDesc: 'Fasilitasi pendaftaran Hak Kekayaan Intelektual untuk paten, hak cipta, desain industri, dan merek dagang bagi seluruh sivitas akademika guna perlindungan aset inovasi.',
      color: 'blue',
      icon: (
        <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'Klinik Proposal',
      desc: 'Pendampingan penyusunan proposal hibah penelitian kompetitif nasional maupun...',
      fullDesc: 'Pendampingan penyusunan proposal hibah penelitian kompetitif nasional maupun internasional, mencakup review substansi, metodologi riset, hingga kelayakan anggaran (RAB).',
      color: 'yellow',
      icon: (
        <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'Insentif Publikasi',
      desc: 'Pengajuan dana insentif untuk artikel yang telah dipublikasikan di jurnal bereputasi.',
      fullDesc: 'Pengajuan reward dan bantuan dana insentif bagi dosen dan mahasiswa yang sukses mempublikasikan artikel ilmiah di jurnal terindeks Scopus/SINTA bereputasi.',
      color: 'blue',
      icon: (
        <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    },
    {
      id: 4,
      title: 'Laboratorium Riset',
      desc: 'Peminjaman dan penggunaan fasilitas laboratorium terpadu untuk kegiatan...',
      fullDesc: 'Peminjaman, reservasi jadwal, dan penggunaan fasilitas instrumen laboratorium pengujian terpadu untuk kebutuhan riset skripsi, tesis, maupun penelitian dosen.',
      color: 'yellow',
      icon: (
        <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      id: 5,
      title: 'Kerjasama Mitra',
      desc: 'Fasilitasi inisiasi kerjasama riset dan pengabdian dengan mitra industri dan...',
      fullDesc: 'Layanan inisiasi kemitraan riset, penyusunan MoU/MoA, dan pendampingan proyek hilirisasi teknologi bersama mitra BUMN, industri ketenagalistrikan, dan pemda.',
      color: 'blue',
      icon: (
        <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      id: 6,
      title: 'Repositori Data',
      desc: 'Penyimpanan dan akses dataset penelitian terbuka untuk mendukung open science.',
      fullDesc: 'Layanan manajemen, kurasi, dan penerbitan dataset riset primer secara aman dan terindeks untuk mendorong kolaborasi serta keterbukaan sains (open science).',
      color: 'yellow',
      icon: (
        <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      )
    }
  ];

  // State Interaksi
  const [selectedService, setSelectedService] = useState(null);
  const [toastMessage, setToastMessage] = useState('');
  const [applicantName, setApplicantName] = useState('');
  const [identifierNumber, setIdentifierNumber] = useState('');
  const [notes, setNotes] = useState('');

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3500);
  };

  const handleServiceSubmit = (e) => {
    e.preventDefault();
    if (!applicantName || !identifierNumber) {
      showToast('Harap melengkapi kolom nama dan NIDN/NIM.');
      return;
    }

    const serviceTitle = selectedService.title;
    setSelectedService(null);
    setApplicantName('');
    setIdentifierNumber('');
    setNotes('');
    showToast(`Pengajuan "${serviceTitle}" berhasil dikirim! Silakan cek email.`);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col justify-between relative">
      <Navbar />

      {/* Toast Notification */}
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
              <span className="text-slate-800 font-bold">Layanan</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-[#0c2340]">
              Layanan Kami
            </h1>
          </div>
        </div>

        {/* Konten Utama: 6 Kotak Layanan */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((item) => {
              const isYellow = item.color === 'yellow';
              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedService(item)}
                  className="bg-white rounded-2xl border border-slate-200 p-8 shadow-xs flex flex-col justify-between hover:border-slate-300 hover:shadow-md hover:-translate-y-1 transition duration-200 cursor-pointer group"
                >
                  <div>
                    {/* Icon Box */}
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center mb-6 ${
                        isYellow ? 'bg-amber-50' : 'bg-indigo-50'
                      }`}
                    >
                      {item.icon}
                    </div>

                    {/* Judul Layanan */}
                    <h2 className="text-base md:text-lg font-bold text-[#0c2340] mb-3 group-hover:text-teal-700 transition">
                      {item.title}
                    </h2>

                    {/* Deskripsi Singkat */}
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {/* Tombol Akses Layanan */}
                  <div className="pt-8">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedService(item);
                      }}
                      className="text-xs font-semibold text-teal-700 group-hover:text-teal-800 inline-flex items-center gap-1.5 transition cursor-pointer"
                    >
                      <span>Akses Layanan</span>
                      <span className="group-hover:translate-x-1 transition duration-200">&rarr;</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      {/* MODAL: Formulir Akses Layanan */}
      {selectedService && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 relative animate-scale-up">
            <button
              type="button"
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 text-lg font-bold w-8 h-8 rounded-full hover:bg-slate-100 flex items-center justify-center cursor-pointer transition"
            >
              ✕
            </button>

            <div className="flex items-center gap-3 mb-2">
              <div
                className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                  selectedService.color === 'yellow' ? 'bg-amber-50' : 'bg-indigo-50'
                }`}
              >
                {selectedService.icon}
              </div>
              <div>
                <h3 className="text-base font-bold text-[#0c2340] leading-snug">
                  {selectedService.title}
                </h3>
                <span className="text-[11px] text-teal-700 font-semibold">
                  Formulir Permohonan Layanan
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed my-3 bg-slate-50 p-3 rounded-lg border border-slate-100">
              {selectedService.fullDesc}
            </p>

            <form onSubmit={handleServiceSubmit} className="space-y-3.5 mt-4">
              <div>
                <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                  Nama Lengkap Pemohon *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Nama beserta gelar akademik"
                  value={applicantName}
                  onChange={(e) => setApplicantName(e.target.value)}
                  className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0c2340] bg-white"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                  Nomor Induk (NIDN / NIM / NIP) *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: 041209xxxx atau 202331xxx"
                  value={identifierNumber}
                  onChange={(e) => setIdentifierNumber(e.target.value)}
                  className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0c2340] bg-white"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                  Keterangan Tambahan / Topik Terkait
                </label>
                <textarea
                  rows="3"
                  placeholder="Tuliskan judul usulan, nomor paten, atau keperluan spesifik..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0c2340] bg-white"
                ></textarea>
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setSelectedService(null)}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded transition cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 text-xs font-semibold bg-[#0c2340] hover:bg-[#123055] text-white rounded transition cursor-pointer"
                >
                  Kirim Permohonan
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

export default Layanan;
