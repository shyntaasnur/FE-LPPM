import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Agenda = () => {
  // Mock Data Agenda & Seminar sesuai gambar
  const agendaList = [
    {
      id: 1,
      day: '15',
      month: 'NOV',
      title: 'International Conference on Renewable Energy Technologies',
      time: '09:00 - 16:00 WIB',
      location: 'Auditorium Utama IT-PLN, Jakarta',
      description: 'Konferensi internasional tahunan yang membahas inovasi terbaru dalam teknologi energi terbarukan, menghadirkan pakar dari berbagai universitas global.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600',
      contactPerson: 'Dr. Budi Santoso',
      contactType: 'email',
      contactValue: 'budi@itpln.ac.id'
    },
    {
      id: 2,
      day: '22',
      month: 'NOV',
      title: 'Workshop Penulisan Proposal Hibah Penelitian Ristekdikti',
      time: '09:00 - 15:00 WIB',
      location: 'Ruang Seminar LPPM, Lt. 3',
      description: 'Pelatihan intensif bagi dosen dan peneliti untuk meningkatkan tingkat kelulusan proposal hibah pendanaan nasional tahun anggaran mendatang.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600',
      contactPerson: 'Admin LPPM',
      contactType: 'phone',
      contactValue: '021-1234-567'
    }
  ];

  // State Interaktivitas
  const [selectedAgenda, setSelectedAgenda] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [toastMessage, setToastMessage] = useState('');

  // Form State Registrasi
  const [registrantName, setRegistrantName] = useState('');
  const [registrantEmail, setRegistrantEmail] = useState('');
  const [institution, setInstitution] = useState('');

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3500);
  };

  const handleRegistrationSubmit = (e) => {
    e.preventDefault();
    if (!registrantName || !registrantEmail) {
      showToast('Harap lengkapi nama dan email Anda.');
      return;
    }

    const agendaTitle = selectedAgenda.title;
    setSelectedAgenda(null);
    setRegistrantName('');
    setRegistrantEmail('');
    setInstitution('');
    showToast(`Registrasi berhasil untuk "${agendaTitle.slice(0, 30)}..."!`);
  };

  return (
    <div className="min-h-screen bg-[#f3f4f6]/60 text-slate-800 font-sans flex flex-col justify-between relative">
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
          <div className="max-w-6xl mx-auto px-6 py-8">
            <div className="text-xs font-semibold text-slate-400 mb-2">
              <span>Beranda</span> <span className="mx-1">&gt;</span>
              <span>Informasi</span> <span className="mx-1">&gt;</span>
              <span className="text-slate-800 font-bold">Agenda</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-[#0c2340]">
              Agenda & Seminar
            </h1>
          </div>
        </div>

        {/* Konten Utama: Daftar Kartu Agenda */}
        <div className="max-w-6xl mx-auto px-6 py-10 space-y-8">
          {agendaList.map((agenda) => (
            <div
              key={agenda.id}
              className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden flex flex-col md:flex-row hover:shadow-md transition duration-200"
            >
              {/* Kolom 1: Tanggal Box */}
              <div className="w-full md:w-28 bg-slate-50 md:bg-white flex flex-col items-center justify-center p-6 border-b md:border-b-0 md:border-r border-slate-100 shrink-0">
                <span className="text-3xl md:text-4xl font-extrabold text-[#0c2340] leading-none">
                  {agenda.day}
                </span>
                <span className="text-xs font-bold text-teal-700 tracking-wider mt-1 uppercase">
                  {agenda.month}
                </span>
              </div>

              {/* Kolom 2: Gambar Pamflet / Thumbnail */}
              <div
                onClick={() => setPreviewImage(agenda.image)}
                className="w-full md:w-44 h-48 md:h-auto bg-slate-100 relative shrink-0 cursor-pointer overflow-hidden group"
              >
                <img
                  src={agenda.image}
                  alt={agenda.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
                <div className="absolute inset-0 bg-slate-900/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                  <span className="text-[10px] font-semibold text-white bg-black/60 px-2 py-1 rounded">
                    Lihat Poster
                  </span>
                </div>
              </div>

              {/* Kolom 3: Informasi Detail */}
              <div className="p-6 grow flex flex-col justify-between space-y-4">
                <div className="space-y-2.5">
                  <h2 
                    onClick={() => setSelectedAgenda(agenda)}
                    className="text-base md:text-lg font-bold text-[#0c2340] leading-snug hover:text-teal-700 cursor-pointer transition"
                  >
                    {agenda.title}
                  </h2>

                  {/* Waktu & Lokasi */}
                  <div className="space-y-1.5 text-xs text-slate-500 font-medium">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-teal-700 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" strokeWidth="2" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6l4 2" />
                      </svg>
                      <span>{agenda.time}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-teal-700 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{agenda.location}</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed pt-1">
                    {agenda.description}
                  </p>
                </div>
              </div>

              {/* Kolom 4: Narahubung & Tombol Aksi */}
              <div className="p-6 md:w-56 bg-slate-50/50 flex flex-col justify-between items-start md:items-end border-t md:border-t-0 md:border-l border-slate-100 shrink-0">
                <div className="space-y-1 text-left md:text-right w-full mb-6 md:mb-0">
                  <span className="text-[11px] font-semibold text-slate-400 block">
                    Narahubung:
                  </span>
                  <p className="text-xs font-bold text-[#0c2340]">
                    {agenda.contactPerson}
                  </p>
                  {agenda.contactType === 'email' ? (
                    <a
                      href={`mailto:${agenda.contactValue}`}
                      className="text-[11px] text-teal-700 hover:underline break-all block"
                    >
                      {agenda.contactValue}
                    </a>
                  ) : (
                    <a
                      href={`tel:${agenda.contactValue}`}
                      className="text-[11px] text-teal-700 hover:underline block"
                    >
                      {agenda.contactValue}
                    </a>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedAgenda(agenda)}
                  className="w-full md:w-auto bg-[#0c2340] hover:bg-[#123055] active:scale-95 text-white text-xs font-bold px-6 py-2.5 rounded shadow-sm transition cursor-pointer"
                >
                  Daftar Sekarang
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* MODAL 1: Form Pendaftaran Acara */}
      {selectedAgenda && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200 relative animate-scale-up">
            <button
              type="button"
              onClick={() => setSelectedAgenda(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 text-lg font-bold w-8 h-8 rounded-full hover:bg-slate-100 flex items-center justify-center cursor-pointer transition"
            >
              ✕
            </button>

            <span className="text-[10px] font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2.5 py-1 rounded">
              Pendaftaran Kegiatan
            </span>
            <h3 className="text-base font-bold text-[#0c2340] mt-2 mb-1 leading-snug">
              {selectedAgenda.title}
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              {selectedAgenda.time} &bull; {selectedAgenda.location}
            </p>

            <form onSubmit={handleRegistrationSubmit} className="space-y-3.5">
              <div>
                <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                  Nama Lengkap & Gelar *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Budi Santoso, M.T."
                  value={registrantName}
                  onChange={(e) => setRegistrantName(e.target.value)}
                  className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0c2340] bg-white"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                  Email Aktif *
                </label>
                <input
                  type="email"
                  required
                  placeholder="nama@email.com"
                  value={registrantEmail}
                  onChange={(e) => setRegistrantEmail(e.target.value)}
                  className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0c2340] bg-white"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                  Instansi / Universitas
                </label>
                <input
                  type="text"
                  placeholder="Contoh: IT-PLN Jakarta"
                  value={institution}
                  onChange={(e) => setInstitution(e.target.value)}
                  className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0c2340] bg-white"
                />
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setSelectedAgenda(null)}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded transition cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 text-xs font-semibold bg-[#0c2340] hover:bg-[#123055] text-white rounded transition cursor-pointer"
                >
                  Kirim Pendaftaran
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL 2: Lightbox / Pratinjau Poster */}
      {previewImage && (
        <div
          onClick={() => setPreviewImage(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 cursor-zoom-out"
        >
          <div className="relative max-w-xl w-full flex flex-col items-center">
            <img
              src={previewImage}
              alt="Pratinjau Agenda"
              className="max-h-[80vh] w-auto object-contain rounded-xl shadow-2xl"
            />
            <button
              type="button"
              onClick={() => setPreviewImage(null)}
              className="mt-3 text-white text-xs font-semibold hover:underline cursor-pointer"
            >
              Klik di mana saja untuk menutup [✕]
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Agenda;