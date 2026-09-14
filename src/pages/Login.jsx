import { useState } from 'react';
// Import gambar hero sesuai path permintaan (dari src/img/hero-img.svg)
import heroImg from "../assets/img/hero-img.svg";

const Login = () => {
  // State Form Login
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // State Modal & Toast
  const [isForgotModalOpen, setIsForgotModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [toastMessage, setToastMessage] = useState('');

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3500);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      showToast('Harap isi alamat email dan kata sandi.');
      return;
    }

    setIsLoading(true);
    // Simulasi autentikasi
    setTimeout(() => {
      setIsLoading(false);
      showToast(`Login berhasil! Selamat datang, ${email.split('@')[0]}.`);
    }, 1000);
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    if (!resetEmail) {
      showToast('Harap masukkan alamat email akun Anda.');
      return;
    }
    setIsForgotModalOpen(false);
    setResetEmail('');
    showToast('Tautan instruksi reset sandi telah dikirim ke email!');
  };

  return (
    <div className="min-h-screen w-full flex bg-white font-sans text-slate-800 relative">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-6 right-6 z-50 bg-[#0c2340] text-white px-4 py-3 rounded-lg shadow-xl text-xs flex items-center gap-2 border border-slate-700 animate-fade-in">
          <svg className="w-4 h-4 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* SISI KIRI: Branding LPPM dengan Background Gambar */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden flex-col justify-start p-16">
        {/* Gambar Background */}
        <img
          src={heroImg}
          alt="Hero LPPM IT-PLN"
          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
        />

        {/* Lapisan Tint Biru Transparan agar teks tetap kontras dan gambar terlihat jelas */}
        <div className="absolute inset-0 bg-[#0c2340]/60"></div>

        {/* Teks Branding di Depan */}
        <div className="relative z-10 space-y-3">
          <h1 className="text-4xl xl:text-5xl font-extrabold text-white tracking-tight">
            LPPM
          </h1>
          <p className="text-slate-200 text-sm font-medium tracking-wide">
            Gateway to Innovation and Collaboration
          </p>
        </div>
      </div>

      {/* SISI KANAN: Form Login */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 md:p-16">
        <div className="w-full max-w-md space-y-8">
          
          {/* Header Sambutan */}
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0c2340]">
              Selamat Datang
            </h2>
            <p className="text-xs md:text-sm text-slate-500">
              Silakan masuk ke akun Anda
            </p>
          </div>

          {/* Form Fields */}
          <form onSubmit={handleLogin} className="space-y-5">
            
            {/* Input Email */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-700">
                Email
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input
                  type="email"
                  required
                  placeholder="nama@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0c2340] focus:border-transparent transition"
                />
              </div>
            </div>

            {/* Input Password */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-700">
                Password
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-10 py-2.5 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0c2340] focus:border-transparent transition tracking-wider"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 cursor-pointer"
                >
                  {showPassword ? (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between pt-1">
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 text-[#0c2340] border-slate-300 rounded focus:ring-0 cursor-pointer"
                />
                <span className="text-xs text-slate-500 font-medium">
                  Remember me
                </span>
              </label>

              <button
                type="button"
                onClick={() => setIsForgotModalOpen(true)}
                className="text-xs font-bold text-[#0c2340] hover:underline cursor-pointer"
              >
                Forgot Password?
              </button>
            </div>

            {/* Tombol Login */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 px-4 bg-[#fbd46d] hover:bg-[#f6c952] active:scale-[0.99] text-slate-900 font-bold text-xs rounded-lg shadow-xs transition duration-150 flex items-center justify-center cursor-pointer disabled:opacity-50"
            >
              {isLoading ? (
                <div className="w-4 h-4 border-2 border-slate-900 border-t-transparent rounded-full animate-spin"></div>
              ) : (
                'Login ke Dashboard'
              )}
            </button>

            {/* Registrasi Akun Tenant */}
            <div className="text-center pt-3">
              <p className="text-xs text-slate-500">
                Belum punya akun tenant?{' '}
                <button
                  type="button"
                  onClick={() => setIsRegisterModalOpen(true)}
                  className="font-bold text-teal-700 hover:underline cursor-pointer"
                >
                  Daftar di sini
                </button>
              </p>
            </div>

          </form>

        </div>
      </div>

      {/* MODAL: Lupa Password */}
      {isForgotModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-sm w-full p-6 shadow-2xl border border-slate-200 relative animate-scale-up">
            <button
              type="button"
              onClick={() => setIsForgotModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 text-lg font-bold w-8 h-8 rounded-full hover:bg-slate-100 flex items-center justify-center cursor-pointer transition"
            >
              ✕
            </button>
            <h3 className="text-base font-bold text-[#0c2340]">Reset Password</h3>
            <p className="text-xs text-slate-500 mt-1 mb-4 leading-relaxed">
              Masukkan alamat email Anda untuk menerima instruksi pemulihan kata sandi.
            </p>
            <form onSubmit={handleForgotPassword} className="space-y-4">
              <input
                type="email"
                required
                placeholder="nama@email.com"
                value={resetEmail}
                onChange={(e) => setResetEmail(e.target.value)}
                className="w-full text-xs px-3.5 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0c2340] bg-white"
              />
              <div className="flex justify-end gap-2 pt-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsForgotModalOpen(false)}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-lg cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-semibold bg-[#0c2340] hover:bg-[#123055] text-white rounded-lg cursor-pointer"
                >
                  Kirim Instruksi
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: Pendaftaran Akun Tenant */}
      {isRegisterModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200 relative animate-scale-up">
            <button
              type="button"
              onClick={() => setIsRegisterModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 text-lg font-bold w-8 h-8 rounded-full hover:bg-slate-100 flex items-center justify-center cursor-pointer transition"
            >
              ✕
            </button>
            <h3 className="text-base font-bold text-[#0c2340]">Pendaftaran Akun Tenant</h3>
            <p className="text-xs text-slate-500 mt-1 mb-4 leading-relaxed">
              Daftarkan unit bisnis, laboratorium mitra, atau peneliti binaan LPPM IT-PLN.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setIsRegisterModalOpen(false);
                showToast('Permohonan akun tenant terkirim! Admin akan memverifikasi.');
              }}
              className="space-y-3"
            >
              <div>
                <label className="block text-[11px] font-semibold text-slate-700 mb-1">Nama Tenant / Lembaga</label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Startup Inovasi Mandiri"
                  className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0c2340] bg-white"
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-slate-700 mb-1">Email Penanggung Jawab</label>
                <input
                  type="email"
                  required
                  placeholder="email@perusahaan.com"
                  className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0c2340] bg-white"
                />
              </div>
              <div className="flex justify-end gap-2 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsRegisterModalOpen(false)}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-lg cursor-pointer"
                >
                  Tutup
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-semibold bg-[#fbd46d] hover:bg-[#f6c952] text-slate-900 rounded-lg cursor-pointer"
                >
                  Daftar Akun
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default Login;