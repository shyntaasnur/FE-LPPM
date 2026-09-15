import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import heroImg from "../../assets/img/hero-img.svg";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3500);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      showToast('Harap isi email dan kata sandi admin.');
      return;
    }

    setIsLoading(true);

    // Simulasi Login Admin (Simpan Token & Redirect)
    setTimeout(() => {
      setIsLoading(false);
      
      // Simpan session dummy ke browser
      localStorage.setItem('token', 'dummy-admin-token-12345');
      localStorage.setItem('user', JSON.stringify({ email }));

      showToast('Login berhasil! Mengalihkan ke Dashboard...');

      // Redirect ke Admin Dashboard
      setTimeout(() => {
        navigate('/admin/dashboard');
      }, 500);
    }, 800);
  };

  return (
    <div className="min-h-screen w-full flex bg-white font-sans text-slate-800 relative">
      
      {/* Tombol Kembali (Sudut Kiri Atas - BG Putih) */}
      <button
        type="button"
        onClick={() => navigate('/')}
        className="absolute top-6 left-6 z-30 bg-white hover:bg-slate-50 text-slate-700 hover:text-[#0c2340] px-3.5 py-2 rounded-xl shadow-md border border-slate-200 text-xs font-semibold flex items-center gap-2 transition active:scale-95 cursor-pointer"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        <span>Kembali</span>
      </button>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-6 right-6 z-50 bg-[#0c2340] text-white px-4 py-3 rounded-lg shadow-xl text-xs flex items-center gap-2 border border-slate-700 animate-fade-in">
          <svg className="w-4 h-4 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* SISI KIRI: Branding */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden flex-col justify-start p-16 pt-24">
        <img
          src={heroImg}
          alt="Hero LPPM IT-PLN"
          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
        />
        <div className="absolute inset-0 bg-[#0c2340]/60"></div>
        <div className="relative z-10 space-y-3">
          <h1 className="text-4xl xl:text-5xl font-extrabold text-white tracking-tight">
            LPPM Admin
          </h1>
          <p className="text-slate-200 text-sm font-medium tracking-wide">
            Portal Manajemen & Administrasi Sistem
          </p>
        </div>
      </div>

      {/* SISI KANAN: Form Login */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 md:p-16 pt-24 lg:pt-16">
        <div className="w-full max-w-md space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0c2340]">
              Masuk Administrator
            </h2>
            <p className="text-xs md:text-sm text-slate-500">
              Silakan masuk ke panel kelola akun LPPM IT-PLN
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-700">
                Email Administrator
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
                  placeholder="admin@itpln.ac.id"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0c2340] focus:border-transparent transition"
                />
              </div>
            </div>

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

            <div className="flex items-center justify-between pt-1">
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 text-[#0c2340] border-slate-300 rounded focus:ring-0 cursor-pointer"
                />
                <span className="text-xs text-slate-500 font-medium">
                  Ingat saya di perangkat ini
                </span>
              </label>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 px-4 bg-[#fbd46d] hover:bg-[#f6c952] active:scale-[0.99] text-slate-900 font-bold text-xs rounded-lg shadow-xs transition duration-150 flex items-center justify-center cursor-pointer disabled:opacity-50"
            >
              {isLoading ? (
                <div className="w-4 h-4 border-2 border-slate-900 border-t-transparent rounded-full animate-spin"></div>
              ) : (
                'Login Admin'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;