import { useState } from 'react';

const DashboardOverview = () => {
  // 1. Kartu Ringkasan Statistik (Count Cards 6 Entitas)
  const [stats] = useState([
    { id: 1, title: 'Total Berita', count: 24, badge: 'Berita & Warta', color: 'border-l-cyan-500' },
    { id: 2, title: 'Total Agenda', count: 5, badge: 'Seminar & Workshop', color: 'border-l-amber-500' },
    { id: 3, title: 'Total Dokumen', count: 18, badge: 'Panduan & Template', color: 'border-l-emerald-500' },
    { id: 4, title: 'Total Jurnal', count: 4, badge: 'Portal OJS Aktif', color: 'border-l-blue-500' },
    { id: 5, title: 'Total Penelitian', count: 42, badge: 'Hibah Terdanai', color: 'border-l-indigo-500' },
    { id: 6, title: 'Total PKM', count: 31, badge: 'Desa Binaan & TTG', color: 'border-l-teal-500' },
  ]);

  // 2. Tabel Aktivitas Terbaru (Data Gabungan GET Terbaru)
  const [recentActivities] = useState([
    { id: 1, judul: 'Workshop Penulisan Jurnal Scopus', tipe: 'Agenda', waktu: 'Baru saja', status: 'Published' },
    { id: 2, judul: 'Panduan Hibah Riset Internal 2026', tipe: 'Dokumen', waktu: '2 jam lalu', status: 'Published' },
    { id: 3, judul: 'Pengembangan Panel Surya Komunal', tipe: 'PKM', waktu: '1 hari lalu', status: 'Draft' },
    { id: 4, judul: 'Inovasi Deteksi Transmisi Cerdas', tipe: 'Penelitian', waktu: '2 hari lalu', status: 'Published' },
    { id: 5, judul: 'Penerimaan Proposal Hibah 2026', tipe: 'Berita', waktu: '3 hari lalu', status: 'Published' },
  ]);

  // State Modal Aksi Cepat
  const [activeModal, setActiveModal] = useState(null); // 'berita' | 'agenda' | 'dokumen'
  const [toast, setToast] = useState('');

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(''), 3000);
  };

  const handleQuickSubmit = (e, jenis) => {
    e.preventDefault();
    setActiveModal(null);
    showToast(`Sukses menambah data ${jenis} via Aksi Cepat!`);
  };

  return (
    <div className="space-y-8">
      {toast && (
        <div className="fixed top-5 right-5 z-50 bg-[#0c2340] text-white px-4 py-2 rounded-lg text-xs shadow-lg">
          {toast}
        </div>
      )}

      {/* Header & Aksi Cepat */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
        <div>
          <h1 className="text-xl font-extrabold text-[#0c2340]">Ringkasan Sistem LPPM</h1>
          <p className="text-xs text-slate-500 mt-1">Pantau ringkasan statistik dan aktivitas data terkini portal.</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold text-slate-400 mr-1">Aksi Cepat:</span>
          <button
            type="button"
            onClick={() => setActiveModal('berita')}
            className="px-3 py-1.5 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg text-xs font-semibold cursor-pointer"
          >
            + Tambah Berita
          </button>
          <button
            type="button"
            onClick={() => setActiveModal('agenda')}
            className="px-3 py-1.5 bg-amber-500 hover:bg-amber-600 text-white rounded-lg text-xs font-semibold cursor-pointer"
          >
            + Tambah Agenda
          </button>
          <button
            type="button"
            onClick={() => setActiveModal('dokumen')}
            className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold cursor-pointer"
          >
            + Unggah Dokumen
          </button>
        </div>
      </div>

      {/* 6 Count Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {stats.map((item) => (
          <div key={item.id} className={`bg-white p-5 rounded-2xl border border-slate-200 border-l-4 ${item.color} shadow-xs`}>
            <div className="flex justify-between items-start">
              <span className="text-xs font-bold text-slate-500">{item.title}</span>
              <span className="text-[10px] font-semibold bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">{item.badge}</span>
            </div>
            <div className="text-3xl font-extrabold text-[#0c2340] mt-3">{item.count}</div>
          </div>
        ))}
      </div>

      {/* Tabel Aktivitas Terbaru */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="p-5 border-b border-slate-100 flex items-center justify-between">
          <h2 className="text-sm font-bold text-[#0c2340]">5 Aktivitas Konten Terbaru</h2>
          <span className="text-[11px] text-slate-400">Pembaruan sistem real-time</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-[10px] font-bold text-slate-400 uppercase">
              <tr>
                <th className="p-4">JUDUL KONTEN</th>
                <th className="p-4">TIPE ENTITAS</th>
                <th className="p-4">WAKTU PERUBAHAN</th>
                <th className="p-4">STATUS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {recentActivities.map((row) => (
                <tr key={row.id} className="hover:bg-slate-50/80">
                  <td className="p-4 font-bold text-[#0c2340]">{row.judul}</td>
                  <td className="p-4 text-slate-600 font-semibold">{row.tipe}</td>
                  <td className="p-4 text-slate-400">{row.waktu}</td>
                  <td className="p-4">
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${row.status === 'Published' ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-100 text-slate-500'}`}>
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal Cepat Universal */}
      {activeModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200">
            <h3 className="text-sm font-bold text-[#0c2340] mb-3 uppercase">Pintas Tambah {activeModal}</h3>
            <form onSubmit={(e) => handleQuickSubmit(e, activeModal)} className="space-y-3 text-xs">
              <div>
                <label className="block font-semibold mb-1">Judul *</label>
                <input type="text" required placeholder="Ketik judul..." className="w-full p-2 border rounded-lg" />
              </div>
              <div>
                <label className="block font-semibold mb-1">Keterangan / Berkas</label>
                <input type="file" className="w-full text-slate-500 text-[11px]" />
              </div>
              <div className="flex justify-end gap-2 pt-3 border-t">
                <button type="button" onClick={() => setActiveModal(null)} className="px-3 py-1.5 font-semibold text-slate-600">Batal</button>
                <button type="submit" className="px-4 py-1.5 bg-[#0c2340] text-white rounded-lg font-bold">Simpan</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardOverview;