import { useState } from 'react';

const KelolaAgenda = () => {
  const [dataAgenda, setDataAgenda] = useState([
    {
      id: 1,
      judul: 'International Conference on Renewable Energy Technologies',
      tanggal: '2026-11-15',
      waktu: '09:00 - 16:00 WIB',
      lokasi: 'Auditorium Utama IT-PLN, Jakarta',
      deskripsi: 'Konferensi tahunan membahas inovasi terbarukan...',
      narahubung: 'Dr. Budi Santoso - budi@itpln.ac.id'
    }
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState({ judul: '', tanggal: '', waktu: '09:00 - 16:00 WIB', lokasi: '', deskripsi: '', narahubung: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setDataAgenda([{ id: Date.now(), ...form }, ...dataAgenda]);
    setIsModalOpen(false);
    setForm({ judul: '', tanggal: '', waktu: '09:00 - 16:00 WIB', lokasi: '', deskripsi: '', narahubung: '' });
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-100">
        <div>
          <h1 className="text-xl font-extrabold text-[#0c2340]">Kelola Agenda</h1>
          <p className="text-xs text-slate-500">Jadwal seminar, workshop, dan agenda akademik.</p>
        </div>
        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="bg-[#0c2340] hover:bg-[#123055] text-white text-xs font-bold px-4 py-2.5 rounded-lg cursor-pointer self-start sm:self-auto"
        >
          + Tambah Agenda
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-50 text-[10px] font-bold text-slate-400 uppercase">
            <tr>
              <th className="p-3.5">JUDUL AGENDA</th>
              <th className="p-3.5">TANGGAL & WAKTU</th>
              <th className="p-3.5">LOKASI</th>
              <th className="p-3.5">NARAHUBUNG</th>
              <th className="p-3.5 text-center">AKSI</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {dataAgenda.map((item) => (
              <tr key={item.id} className="hover:bg-slate-50/80">
                <td className="p-3.5 font-bold text-[#0c2340] max-w-xs">{item.judul}</td>
                <td className="p-3.5 text-slate-600 font-medium">{item.tanggal} ({item.waktu})</td>
                <td className="p-3.5 text-slate-600">{item.lokasi}</td>
                <td className="p-3.5 font-mono text-[11px] text-slate-700">{item.narahubung}</td>
                <td className="p-3.5 text-center space-x-2">
                  <button type="button" onClick={() => alert(`Edit: ${item.judul}`)} className="text-cyan-700 hover:underline font-semibold cursor-pointer">Edit</button>
                  <button type="button" onClick={() => setDataAgenda(dataAgenda.filter(a => a.id !== item.id))} className="text-rose-600 hover:underline font-semibold cursor-pointer">Hapus</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200">
            <h3 className="text-base font-bold text-[#0c2340] mb-4">Input Agenda Baru</h3>
            <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
              <div>
                <label className="block font-semibold mb-1">Judul Agenda *</label>
                <input type="text" required value={form.judul} onChange={(e) => setForm({ ...form, judul: e.target.value })} className="w-full p-2 border rounded-lg" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold mb-1">Tanggal (YYYY-MM-DD) *</label>
                  <input type="date" required value={form.tanggal} onChange={(e) => setForm({ ...form, tanggal: e.target.value })} className="w-full p-2 border rounded-lg" />
                </div>
                <div>
                  <label className="block font-semibold mb-1">Waktu Pelaksanaan *</label>
                  <input type="text" required value={form.waktu} onChange={(e) => setForm({ ...form, waktu: e.target.value })} className="w-full p-2 border rounded-lg" />
                </div>
              </div>
              <div>
                <label className="block font-semibold mb-1">Lokasi Kegiatan *</label>
                <input type="text" required value={form.lokasi} onChange={(e) => setForm({ ...form, lokasi: e.target.value })} className="w-full p-2 border rounded-lg" />
              </div>
              <div>
                <label className="block font-semibold mb-1">Deskripsi Singkat</label>
                <textarea rows="3" value={form.deskripsi} onChange={(e) => setForm({ ...form, deskripsi: e.target.value })} className="w-full p-2 border rounded-lg"></textarea>
              </div>
              <div>
                <label className="block font-semibold mb-1">Narahubung (PIC - Kontak) *</label>
                <input type="text" required placeholder="Budi - 08123456789" value={form.narahubung} onChange={(e) => setForm({ ...form, narahubung: e.target.value })} className="w-full p-2 border rounded-lg" />
              </div>
              <div className="flex justify-end gap-2 pt-4 border-t">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-slate-600">Batal</button>
                <button type="submit" className="px-5 py-2 bg-[#0c2340] text-white rounded-lg font-bold">Simpan Agenda</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default KelolaAgenda;