import { useState } from 'react';

const KelolaJurnal = () => {
  const [dataJurnal, setDataJurnal] = useState([
    {
      id: 1,
      nama_jurnal: 'KILOWATT: Jurnal Ilmu Ketenagalistrikan',
      issn: 'ISSN: 2549-xxxx (Online)',
      link_ojs: 'https://ejournal.itpln.ac.id/kilowatt',
      created_at: '2025-10-10',
      deskripsi: 'Jurnal ilmiah berkala memuat riset bidang sistem ketenagalistrikan.'
    }
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState({ nama_jurnal: '', deskripsi: '', issn: '', link_ojs: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setDataJurnal([{ id: Date.now(), ...form, created_at: new Date().toISOString().split('T')[0] }, ...dataJurnal]);
    setIsModalOpen(false);
    setForm({ nama_jurnal: '', deskripsi: '', issn: '', link_ojs: '' });
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-100">
        <div>
          <h1 className="text-xl font-extrabold text-[#0c2340]">Kelola Jurnal OJS</h1>
          <p className="text-xs text-slate-500">Daftar portal jurnal terakreditasi binaan LPPM.</p>
        </div>
        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="bg-[#0c2340] hover:bg-[#123055] text-white text-xs font-bold px-4 py-2.5 rounded-lg cursor-pointer self-start sm:self-auto"
        >
          + Tambah Jurnal
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-50 text-[10px] font-bold text-slate-400 uppercase">
            <tr>
              <th className="p-3.5">NAMA JURNAL</th>
              <th className="p-3.5">ISSN</th>
              <th className="p-3.5">LINK OJS</th>
              <th className="p-3.5">TANGGAL DIBUAT</th>
              <th className="p-3.5 text-center">AKSI</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {dataJurnal.map((item) => (
              <tr key={item.id} className="hover:bg-slate-50/80">
                <td className="p-3.5 font-bold text-[#0c2340]">{item.nama_jurnal}</td>
                <td className="p-3.5 font-mono text-[11px] text-slate-600">{item.issn}</td>
                <td className="p-3.5">
                  <a href={item.link_ojs} target="_blank" rel="noreferrer" className="text-cyan-700 hover:underline font-mono text-[11px]">
                    {item.link_ojs}
                  </a>
                </td>
                <td className="p-3.5 text-slate-400">{item.created_at}</td>
                <td className="p-3.5 text-center space-x-2">
                  <button type="button" onClick={() => alert(`Edit: ${item.nama_jurnal}`)} className="text-cyan-700 hover:underline font-semibold cursor-pointer">Edit</button>
                  <button type="button" onClick={() => setDataJurnal(dataJurnal.filter(j => j.id !== item.id))} className="text-rose-600 hover:underline font-semibold cursor-pointer">Hapus</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200">
            <h3 className="text-base font-bold text-[#0c2340] mb-4">Tambah Portal Jurnal</h3>
            <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
              <div>
                <label className="block font-semibold mb-1">Nama Jurnal *</label>
                <input type="text" required value={form.nama_jurnal} onChange={(e) => setForm({ ...form, nama_jurnal: e.target.value })} className="w-full p-2 border rounded-lg" />
              </div>
              <div>
                <label className="block font-semibold mb-1">ISSN *</label>
                <input type="text" required placeholder="ISSN: 2549-xxxx" value={form.issn} onChange={(e) => setForm({ ...form, issn: e.target.value })} className="w-full p-2 border rounded-lg" />
              </div>
              <div>
                <label className="block font-semibold mb-1">Link OJS (URL) *</label>
                <input type="url" required placeholder="https://ejournal..." value={form.link_ojs} onChange={(e) => setForm({ ...form, link_ojs: e.target.value })} className="w-full p-2 border rounded-lg" />
              </div>
              <div>
                <label className="block font-semibold mb-1">Deskripsi Ruang Lingkup</label>
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

export default KelolaJurnal;