import { NavLink } from 'react-router-dom';

const SidebarAdmin = () => {
  const menuItems = [
    { 
      label: 'Overview', 
      path: '/admin/dashboard', 
      icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' 
    },
    { 
      label: 'Kelola Berita', 
      path: '/admin/berita', 
      icon: 'M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z' 
    },
    { 
      label: 'Kelola Agenda', 
      path: '/admin/agenda', 
      icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' 
    },
    { 
      label: 'Kelola Dokumen', 
      path: '/admin/dokumen', 
      icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' 
    },
    { 
      label: 'Kelola Jurnal', 
      path: '/admin/jurnal', 
      icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' 
    },
    { 
      label: 'Kelola Penelitian', 
      path: '/admin/penelitian', 
      icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' 
    },
    { 
      label: 'Kelola PKM', 
      path: '/admin/pkm', 
      icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' 
    },
  ];

  return (
    <aside className="w-64 bg-[#0c2340] text-slate-300 flex flex-col shrink-0 min-h-screen border-r border-slate-800">
      {/* Brand Header */}
      <div className="h-16 flex items-center px-6 border-b border-slate-700/50">
        <h1 className="text-lg font-bold text-white tracking-wide">
          Admin <span className="text-amber-400">LPPM</span>
        </h1>
      </div>

      {/* Nav Menu */}
      <nav className="grow p-4 space-y-1.5">
        <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider px-3 mb-2">
          Menu Utama
        </div>
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold transition ${
                isActive
                  ? 'bg-cyan-600 text-white shadow-sm'
                  : 'text-slate-300 hover:bg-slate-800 hover:text-white'
              }`
            }
          >
            <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
            </svg>
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Footer Sidebar */}
      <div className="p-4 border-t border-slate-700/50 text-[11px] text-slate-400 text-center">
        LPPM IT-PLN Dashboard
      </div>
    </aside>
  );
};

export default SidebarAdmin;