import { useState } from 'react';

const KelolaPKM = () => {
  const [dataPKM, setDataPKM] = useState([
    {
      id: 1,
      judul: 'Pemberdayaan Desa Energi Mandiri Berbasis Mikrohidro',
      kategori: 'Desa Binaan',
      deskripsi: 'Program pendampingan dan instalasi modul turbin air mikrohidro...',
      tahun: 2026
    }
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState({ judul: '', kategori: 'Desa Binaan', deskripsi: '', tahun: 2026 });

  const handleSubmit = (e) => {
    e.preventDefault();
    setDataPKM([{ id: Date.now(), ...form }, ...dataPKM]);
    setIsModalOpen(false);
    setForm({ judul: '', kategori: 'Desa Binaan', deskripsi: '', tahun: 2026 });
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-100">
        <div>
          <h1 className="text-xl font-extrabold text-[#0c2340]">Kelola PKM</h1>
          <p className="text-xs text-slate-500">Program Pengabdian Kepada Masyarakat dan Penerapan TTG.</p>
        </div>
        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="bg-[#0c2340] hover:bg-[#123055] text-white text-xs font-bold px-4 py-2.5 rounded-lg cursor-pointer self-start sm:self-auto"
        >
          + Input PKM
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-50 text-[10px] font-bold text-slate-400 uppercase">
            <tr>
              <th className="p-3.5">JUDUL PKM</th>
              <th className="p-3.5">KATEGORI</th>
              <th className="p-3.5">DESKRIPSI</th>
              <th className="p-3.5">TAHUN</th>
              <th className="p-3.5 text-center">AKSI</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {dataPKM.map((item) => (
              <tr key={item.id} className="hover:bg-slate-50/80">
                <td className="p-3.5 font-bold text-[#0c2340] max-w-xs">{item.judul}</td>
                <td className="p-3.5">
                  <span className="bg-amber-50 text-amber-700 px-2 py-0.5 rounded font-bold text-[10px]">
                    {item.kategori}
                  </span>
                </td>
                <td className="p-3.5 text-slate-600 max-w-sm truncate">{item.deskripsi}</td>
                <td className="p-3.5 font-mono text-slate-400">{item.tahun}</td>
                <td className="p-3.5 text-center space-x-2">
                  <button type="button" onClick={() => alert(`Edit: ${item.judul}`)} className="text-cyan-700 hover:underline font-semibold cursor-pointer">Edit</button>
                  <button type="button" onClick={() => setDataPKM(dataPKM.filter(p => p.id !== item.id))} className="text-rose-600 hover:underline font-semibold cursor-pointer">Hapus</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200">
            <h3 className="text-base font-bold text-[#0c2340] mb-4">Input Program PKM Baru</h3>
            <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
              <div>
                <label className="block font-semibold mb-1">Judul Program PKM *</label>
                <input type="text" required value={form.judul} onChange={(e) => setForm({ ...form, judul: e.target.value })} className="w-full p-2 border rounded-lg" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold mb-1">Kategori *</label>
                  <select value={form.kategori} onChange={(e) => setForm({ ...form, kategori: e.target.value })} className="w-full p-2 border rounded-lg bg-white">
                    <option value="Desa Binaan">Desa Binaan</option>
                    <option value="Pelatihan">Pelatihan</option>
                    <option value="Penerapan TTG">Penerapan TTG</option>
                  </select>
                </div>
                <div>
                  <label className="block font-semibold mb-1">Tahun Pelaksanaan *</label>
                  <input type="number" required value={form.tahun} onChange={(e) => setForm({ ...form, tahun: Number(e.target.value) })} className="w-full p-2 border rounded-lg" />
                </div>
              </div>
              <div>
                <label className="block font-semibold mb-1">Deskripsi Singkat</label>
                <textarea rows="3" value={form.deskripsi} onChange={(e) => setForm({ ...form, deskripsi: e.target.value })} className="w-full p-2 border rounded-lg"></textarea>
              </div>
              <div className="flex justify-end gap-2 pt-4 border-t">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-slate-600">Batal</button>
                <button type="submit" className="px-5 py-2 bg-[#0c2340] text-white rounded-lg font-bold">Simpan</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default KelolaPKM;