import { useState } from 'react';

const Contact = () => {
  // State Form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3500);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      showToast('Harap lengkapi nama, email, dan isi pesan.');
      return;
    }

    setIsSubmitting(true);
    // Simulasi pengiriman data
    setTimeout(() => {
      setIsSubmitting(false);
      showToast(`Terima kasih ${formData.name}, pesan Anda berhasil dikirimkan!`);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 800);
  };

  const handleSocialClick = (platform) => {
    if (platform === 'share') {
      navigator.clipboard?.writeText(window.location.href);
      showToast('Tautan halaman kontak disalin ke clipboard!');
    } else {
      showToast(`Membuka profil ${platform} resmi LPPM IT-PLN...`);
    }
  };

  const openGoogleMaps = () => {
    const mapsUrl = 'https://maps.app.goo.gl/pjeadcktCiixDs7E7';
    window.open(mapsUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-slate-50 text-slate-800 font-sans relative">
      {/* Floating Toast Feedback */}
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
            <span className="text-slate-800 font-bold">Contact</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-[#0c2340]">
            Kontak Kami
          </h1>
        </div>
      </div>

      {/* Konten Dua Kolom */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* KOLOM KIRI: Informasi Kontak & Peta */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden flex flex-col justify-between">
            <div className="p-6 md:p-8 space-y-6">
              <h2 className="text-lg font-bold text-[#0c2340]">
                Informasi Kontak
              </h2>

              {/* List Info */}
              <div className="space-y-5">
                {/* Alamat */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-indigo-700 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-900">Alamat</h3>
                    <p className="text-xs text-slate-500 leading-relaxed mt-0.5">
                      Menara PLN, Jl. Lingkar Luar Barat, Duri Kosambi, Cengkareng, Jakarta Barat
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-indigo-700 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-900">Email</h3>
                    <a 
                      href="mailto:lppm@itpln.ac.id" 
                      className="text-xs text-teal-700 hover:underline mt-0.5 inline-block"
                    >
                      lppm@itpln.ac.id
                    </a>
                  </div>
                </div>

                {/* Telepon */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-indigo-700 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-900">Telepon</h3>
                    <a 
                      href="tel:0215440342" 
                      className="text-xs text-slate-600 hover:text-slate-900 mt-0.5 inline-block"
                    >
                      (021) 5440342
                    </a>
                  </div>
                </div>
              </div>

              {/* Media Sosial */}
              <div className="pt-4 border-t border-slate-100">
                <h3 className="text-xs font-bold text-slate-900 mb-3">Media Sosial</h3>
                <div className="flex items-center gap-2">
                  {/* Share Button */}
                  <button
                    type="button"
                    onClick={() => handleSocialClick('share')}
                    className="w-9 h-9 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition active:scale-95 cursor-pointer"
                    title="Bagikan Halaman"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                  </button>

                  {/* Instagram Button */}
                  <button
                    type="button"
                    onClick={() => handleSocialClick('Instagram')}
                    className="w-9 h-9 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition active:scale-95 cursor-pointer"
                    title="Instagram"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="2" />
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" strokeWidth="2" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2" />
                    </svg>
                  </button>

                  {/* YouTube Button */}
                  <button
                    type="button"
                    onClick={() => handleSocialClick('YouTube')}
                    className="w-9 h-9 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition active:scale-95 cursor-pointer"
                    title="YouTube"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Area Gambar Peta + Tombol Aksi */}
            <div className="relative h-48 w-full overflow-hidden bg-slate-100">
              <img
                src="https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=800"
                alt="Gedung Menara PLN"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center p-4">
                <button
                  type="button"
                  onClick={openGoogleMaps}
                  className="inline-flex items-center gap-2 bg-white/95 hover:bg-white text-slate-800 text-xs font-bold px-4 py-2.5 rounded-lg shadow-md hover:shadow-lg transition active:scale-95 cursor-pointer"
                >
                  <svg className="w-4 h-4 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  <span>Lihat di Google Maps</span>
                </button>
              </div>
            </div>
          </div>

          {/* KOLOM KANAN: Form Kirim Pesan */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-xs">
            <h2 className="text-lg font-bold text-[#0c2340] mb-1">
              Kirim Pesan
            </h2>
            <p className="text-xs text-slate-500 mb-6 leading-relaxed">
              Silakan isi formulir di bawah ini untuk mengirimkan pertanyaan atau masukan kepada kami.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Nama Lengkap */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Masukkan nama lengkap"
                  className="w-full text-xs px-3.5 py-2.5 bg-slate-50/50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0c2340] focus:bg-white transition"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="alamat@email.com"
                  className="w-full text-xs px-3.5 py-2.5 bg-slate-50/50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0c2340] focus:bg-white transition"
                />
              </div>

              {/* Subjek */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Subjek
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Topik pesan"
                  className="w-full text-xs px-3.5 py-2.5 bg-slate-50/50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0c2340] focus:bg-white transition"
                />
              </div>

              {/* Pesan/Masukan */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Pesan/Masukan
                </label>
                <textarea
                  name="message"
                  required
                  rows="6"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tuliskan pesan Anda di sini..."
                  className="w-full text-xs px-3.5 py-2.5 bg-slate-50/50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0c2340] focus:bg-white transition resize-y"
                ></textarea>
              </div>

              {/* Tombol Kirim Pesan */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#f6cf4c] hover:bg-[#eec23b] active:scale-[0.99] text-slate-900 font-bold text-xs py-3 px-6 rounded-lg flex items-center justify-center gap-2 shadow-xs transition duration-150 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="w-4 h-4 border-2 border-slate-900 border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                      </svg>
                      <span>Kirim Pesan</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;