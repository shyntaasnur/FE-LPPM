import { useNavigate } from 'react-router-dom';

const HeaderAdmin = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user')) || { email: 'admin@itpln.ac.id' };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login', { replace: true });
  };

  return (
    <header className="h-16 bg-white border-b border-slate-200 px-6 flex items-center justify-between sticky top-0 z-10">
      <div className="text-sm font-semibold text-slate-700">
        Panel Administrator
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-slate-200 text-[#0c2340] font-bold text-xs flex items-center justify-center">
            A
          </div>
          <div className="hidden sm:block text-left">
            <p className="text-xs font-bold text-slate-800 leading-tight">Admin LPPM</p>
            <p className="text-[10px] text-slate-500">{user.email}</p>
          </div>
        </div>

        <button 
          type="button"
          onClick={handleLogout}
          className="text-xs text-rose-600 font-semibold hover:bg-rose-50 px-3 py-1.5 rounded-lg transition border border-rose-200 cursor-pointer"
        >
          Keluar
        </button>
      </div>
    </header>
  );
};

export default HeaderAdmin;