import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Penelitian = () => {
  // State untuk modal pop-up skema & publikasi
  const [activeModal, setActiveModal] = useState(null);
  const [showAllPublikasi, setShowAllPublikasi] = useState(false);

  // Data skema pendanaan
  const skemaData = [
    {
      id: 'dasar',
      title: 'Penelitian Dasar',
      tkt: 'TKT 1-3',
      dana: 'Rp 50M - 150M',
      desc: 'Skema pendanaan untuk riset fundamental dengan TKT 1-3. Mendukung pengembangan teori baru dan pemahaman fenomena.',
      fullDesc: 'Skema Penelitian Dasar berorientasi pada luaran penelitian berupa publikasi ilmiah di jurnal internasional bereputasi atau terakreditasi nasional, pemetaan konsep teoritis baru, serta permodelan awal di bidang sistem energi dan ketenagalistrikan.',
      luaran: 'Artikel Jurnal Bereputasi (Scopus/Sinta 2), Prosiding Terindeks, Dokumen Feasibility Study',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      id: 'terapan',
      title: 'Penelitian Terapan',
      tkt: 'TKT 4-6',
      dana: 'Rp 100M - 300M',
      desc: 'Fokus pada penerapan praktis ilmu pengetahuan dengan TKT 4-6. Solusi inovatif untuk industri dan masyarakat.',
      fullDesc: 'Penelitian Terapan ditujukan untuk menghasilkan purwarupa (prototipe) teruji, teknologi tepat guna siap scale-up, atau perbaikan sistem teknis yang aplikatif langsung di sektor industri ketenagalistrikan maupun komunitas.',
      luaran: 'Prototipe Teruji (Skala Lab/Pilot), Pendaftaran Paten/Hak Cipta, Publikasi Jurnal Terapan',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 'pengembangan',
      title: 'Pengembangan',
      tkt: 'TKT 7-9',
      dana: 'Maks Rp 500M',
      desc: 'Meningkatkan skala inovasi menuju komersialisasi. TKT 7-9. Kemitraan industri diutamakan.',
      fullDesc: 'Skema Pengembangan memfasilitasi riset lanjutan yang telah melewati tahap laboratorium menuju fase industrialisasi, standardisasi produk, dan kemitraan komersialisasi bersama pihak BUMN/industri swasta.',
      luaran: 'Produk Komersial, Lisensi Industri, Hak Paten Granted, Uji Laik Operasi Lapangan',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];

  // Data dokumen yang bisa diunduh
  const dokumenList = [
    { name: 'Panduan Pelaksanaan Penelitian 2024', file: 'Panduan_Pelaksanaan_Penelitian_2024.pdf' },
    { name: 'Template Proposal Dasar', file: 'Template_Proposal_Dasar.docx' },
    { name: 'Template Laporan Kemajuan', file: 'Template_Laporan_Kemajuan.docx' }
  ];

  // Data publikasi
  const publikasiList = [
    {
      doi: '10.1234/itpln.2023.01',
      title: 'Analisis Sistem Tenaga Hibrida Berbasis Energi Surya',
      journal: 'Jurnal Teknik Elektro IT-PLN, Vol 15 No 2'
    },
    {
      doi: '10.1234/itpln.2023.05',
      title: 'Optimasi Jaringan Distribusi Menggunakan Algoritma Genetik',
      journal: 'Proceeding of International Conference on Energy'
    },
    {
      doi: '10.1234/itpln.2024.03',
      title: 'Implementasi Smart Microgrid pada Daerah Terisolir',
      journal: 'Jurnal Ketenagalistrikan & Energi Terbarukan, Vol 8 No 1'
    },
    {
      doi: '10.1234/itpln.2024.07',
      title: 'Studi Efisiensi Baterai Penyimpan Energi Skala Pembangkit',
      journal: 'International Journal of Electrical Energy IT-PLN'
    }
  ];

  // Handler fungsi unduh
  const handleDownload = (docName, fileName) => {
    // Membuat file dummy otomatis untuk simulasi download langsung di browser
    const dummyContent = `Dokumen Resmi LPPM IT-PLN: ${docName}\nDiunduh pada: ${new Date().toLocaleString()}`;
    const blob = new Blob([dummyContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col justify-between">
      {/* Reusable Navbar */}
      <Navbar />

      <main className="grow">
        {/* Header Breadcrumb & Judul Halaman */}
        <div className="bg-white border-b border-sky-500">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="text-xs font-semibold text-slate-400 mb-2">
              <span>Beranda</span> <span className="mx-1">&gt;</span> 
              <span>Program</span> <span className="mx-1">&gt;</span> 
              <span className="text-slate-800 font-bold">Penelitian</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-[#0c2340]">
              Program Penelitian
            </h1>
          </div>
        </div>

        {/* Konten Halaman */}
        <div className="max-w-7xl mx-auto px-6 py-12 space-y-12">
          
          {/* SECTION 1: Skema & Informasi Pendanaan */}
          <section>
            <h2 className="text-xl font-bold text-[#0c2340] mb-6">
              Skema & Informasi Pendanaan
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {skemaData.map((skema) => (
                <div 
                  key={skema.id}
                  className="bg-white rounded-xl border-t-4 border-t-amber-400 border-x border-b border-slate-200 p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition"
                >
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-bold text-slate-900 text-base">{skema.title}</h3>
                      <div className="text-cyan-600">
                        {skema.icon}
                      </div>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {skema.desc}
                    </p>
                  </div>
                  <div className="pt-6 flex justify-between items-center text-xs">
                    <span className="font-semibold text-slate-800">{skema.dana}</span>
                    <button
                      onClick={() => setActiveModal(skema)}
                      className="text-cyan-600 hover:text-cyan-800 font-medium underline cursor-pointer"
                    >
                      Detail
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 2: Unduh Dokumen */}
          <section className="bg-white border border-slate-200 rounded-xl p-8 shadow-xs">
            <h2 className="text-lg font-bold text-[#0c2340] border-l-4 border-amber-400 pl-3 mb-6">
              Unduh Dokumen
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
              {dokumenList.map((doc, idx) => (
                <div key={idx} className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span className="text-xs font-semibold text-slate-700">{doc.name}</span>
                  </div>
                  <button 
                    onClick={() => handleDownload(doc.name, doc.file)}
                    className="text-cyan-600 hover:text-cyan-800 hover:scale-110 transition cursor-pointer p-1"
                    title={`Unduh ${doc.name}`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 3: Publikasi & Hasil Luaran + Agenda Terdekat */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Kolom Kiri: Publikasi & Hasil Luaran */}
            <div className="lg:col-span-8">
              <h2 className="text-lg font-bold text-[#0c2340] border-l-4 border-cyan-500 pl-3 mb-6">
                Publikasi & Hasil Luaran
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                {publikasiList.slice(0, 2).map((pub, idx) => (
                  <div 
                    key={idx}
                    className="bg-white rounded-xl border border-slate-200 border-l-4 border-l-cyan-600 p-5 shadow-xs flex flex-col justify-between hover:border-slate-300 transition"
                  >
                    <div>
                      <a 
                        href={`https://doi.org/${pub.doi}`} 
                        target="_blank" 
                        rel="noreferrer"
                        className="text-[10px] text-slate-400 font-mono block mb-1 hover:text-cyan-600 hover:underline cursor-pointer"
                      >
                        DOI: {pub.doi}
                      </a>
                      <h3 className="font-bold text-slate-900 text-xs leading-snug mb-4">
                        {pub.title}
                      </h3>
                    </div>
                    <span className="text-[11px] text-slate-500">
                      {pub.journal}
                    </span>
                  </div>
                ))}
              </div>

              {/* Tombol Lihat Semua Publikasi */}
              <button 
                onClick={() => setShowAllPublikasi(true)}
                className="inline-block border border-slate-400 hover:border-slate-800 hover:bg-slate-100 text-slate-800 font-semibold text-xs px-4 py-2 rounded-sm transition cursor-pointer"
              >
                Lihat Semua Publikasi
              </button>
            </div>

            {/* Kolom Kanan: Agenda Terdekat */}
            <div className="lg:col-span-4">
              <h2 className="text-lg font-bold text-[#0c2340] border-l-4 border-amber-400 pl-3 mb-6">
                Agenda Terdekat
              </h2>

              <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-6 shadow-xs">
                {/* Agenda 1 */}
                <div 
                  onClick={() => alert('Batas Akhir Penerimaan Proposal: 15 Oktober 23:59 WIB. Pastikan proposal Anda telah disubmit melalui sistem!')}
                  className="flex items-start gap-4 cursor-pointer p-2 rounded-lg hover:bg-slate-50 transition"
                >
                  <div className="w-12 h-12 bg-amber-400 text-slate-900 rounded-lg flex flex-col items-center justify-center shrink-0">
                    <span className="text-base font-extrabold leading-none">15</span>
                    <span className="text-[10px] font-bold tracking-wider uppercase">OKT</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-xs leading-tight">
                      Batas Akhir Penerimaan Proposal
                    </h3>
                    <div className="flex items-center gap-1.5 text-[11px] text-slate-500 mt-1">
                      <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" strokeWidth="2" />
                        <polyline points="12 6 12 12 16 14" strokeWidth="2" />
                      </svg>
                      <span>23:59 WIB</span>
                    </div>
                  </div>
                </div>

                {/* Agenda 2 */}
                <div 
                  onClick={() => alert('Pengumuman Desk Evaluasi akan dirilis pada 28 Oktober melalui Portal Peneliti LPPM IT-PLN.')}
                  className="flex items-start gap-4 cursor-pointer p-2 rounded-lg hover:bg-slate-50 transition"
                >
                  <div className="w-12 h-12 bg-slate-100 text-slate-700 rounded-lg flex flex-col items-center justify-center shrink-0">
                    <span className="text-base font-extrabold leading-none">28</span>
                    <span className="text-[10px] font-bold tracking-wider uppercase">OKT</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-xs leading-tight">
                      Pengumuman Desk Evaluasi
                    </h3>
                    <div className="flex items-center gap-1.5 text-[11px] text-slate-500 mt-1">
                      <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                      </svg>
                      <span>Portal Peneliti</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </section>

        </div>
      </main>

      {/* MODAL POP-UP: Detail Skema Pendanaan */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-xl border border-slate-200 space-y-4 animate-in fade-in zoom-in duration-200">
            <div className="flex justify-between items-center border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <span className="bg-amber-400 text-slate-900 text-[10px] font-bold px-2 py-0.5 rounded">
                  {activeModal.tkt}
                </span>
                <h3 className="text-base font-bold text-[#0c2340]">{activeModal.title}</h3>
              </div>
              <button 
                onClick={() => setActiveModal(null)}
                className="text-slate-400 hover:text-slate-700 text-lg font-bold cursor-pointer"
              >
                &times;
              </button>
            </div>

            <div className="space-y-3 text-xs text-slate-600">
              <div>
                <span className="font-semibold text-slate-900 block mb-1">Plafon Pendanaan:</span>
                <p className="text-cyan-700 font-bold">{activeModal.dana}</p>
              </div>

              <div>
                <span className="font-semibold text-slate-900 block mb-1">Deskripsi Skema:</span>
                <p className="leading-relaxed">{activeModal.fullDesc}</p>
              </div>

              <div>
                <span className="font-semibold text-slate-900 block mb-1">Target Luaran Utama:</span>
                <p className="leading-relaxed bg-slate-50 p-2.5 rounded border border-slate-100">{activeModal.luaran}</p>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setActiveModal(null)}
                className="bg-[#0c2340] hover:bg-[#123055] text-white text-xs font-semibold px-4 py-2 rounded-lg transition cursor-pointer"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL POP-UP: Lihat Semua Publikasi */}
      {showAllPublikasi && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 shadow-xl border border-slate-200 space-y-4 max-h-[85vh] flex flex-col">
            <div className="flex justify-between items-center border-b border-slate-100 pb-3">
              <h3 className="text-base font-bold text-[#0c2340]">Daftar Semua Publikasi & Luaran</h3>
              <button 
                onClick={() => setShowAllPublikasi(false)}
                className="text-slate-400 hover:text-slate-700 text-lg font-bold cursor-pointer"
              >
                &times;
              </button>
            </div>

            <div className="overflow-y-auto space-y-3 pr-1 grow">
              {publikasiList.map((pub, idx) => (
                <div key={idx} className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-[10px] text-slate-400 font-mono block mb-1">
                    DOI: {pub.doi}
                  </span>
                  <h4 className="font-bold text-slate-900 text-xs mb-1">{pub.title}</h4>
                  <p className="text-[11px] text-slate-500">{pub.journal}</p>
                </div>
              ))}
            </div>

            <div className="pt-2 flex justify-end border-t border-slate-100">
              <button
                onClick={() => setShowAllPublikasi(false)}
                className="bg-[#0c2340] hover:bg-[#123055] text-white text-xs font-semibold px-4 py-2 rounded-lg transition cursor-pointer"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Reusable Footer */}
      <Footer />
    </div>
  );
};

export default Penelitian;