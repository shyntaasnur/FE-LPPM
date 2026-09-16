import { useState } from 'react';

const KelolaBerita = () => {
  const [dataBerita, setDataBerita] = useState([
    {
      id: 1,
      judul: 'Inovasi Teknologi Energi Terbarukan oleh Tim Riset',
      nama_penulis: 'Admin LPPM',
      status: 'Published',
      created_at: '2026-02-12',
      gambar_url: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=300',
      konten: 'Tim peneliti IT-PLN mengembangkan efisiensi panel surya lapisan tipis...'
    }
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ judul: '', konten: '', status: 'Published', file: null });

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      id: Date.now(),
      judul: formData.judul,
      konten: formData.konten,
      status: formData.status,
      nama_penulis: 'Admin LPPM (Auth JWT)',
      created_at: new Date().toISOString().split('T')[0],
      gambar_url: formData.file ? URL.createObjectURL(formData.file) : 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=300'
    };
    setDataBerita([payload, ...dataBerita]);
    setIsModalOpen(false);
    setFormData({ judul: '', konten: '', status: 'Published', file: null });
  };

  const handleDelete = (id) => {
    if (confirm('Hapus berita ini?')) {
      setDataBerita(dataBerita.filter((item) => item.id !== id));
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-100">
        <div>
          <h1 className="text-xl font-extrabold text-[#0c2340]">Kelola Berita</h1>
          <p className="text-xs text-slate-500">Manajemen warta, berita, dan pengumuman LPPM.</p>
        </div>
        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="bg-[#0c2340] hover:bg-[#123055] text-white text-xs font-bold px-4 py-2.5 rounded-lg cursor-pointer self-start sm:self-auto"
        >
          + Tambah Berita
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-50 text-[10px] font-bold text-slate-400 uppercase">
            <tr>
              <th className="p-3.5">PREVIEW GAMBAR</th>
              <th className="p-3.5">JUDUL BERITA</th>
              <th className="p-3.5">PENULIS</th>
              <th className="p-3.5">STATUS</th>
              <th className="p-3.5">TANGGAL DIBUAT</th>
              <th className="p-3.5 text-center">AKSI</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {dataBerita.map((item) => (
              <tr key={item.id} className="hover:bg-slate-50/80">
                <td className="p-3.5">
                  <img src={item.gambar_url} alt="" className="w-14 h-10 object-cover rounded-lg border border-slate-200" />
                </td>
                <td className="p-3.5 font-bold text-[#0c2340] max-w-xs">{item.judul}</td>
                <td className="p-3.5 text-slate-600 font-medium">{item.nama_penulis}</td>
                <td className="p-3.5">
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${item.status === 'Published' ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-100 text-slate-600'}`}>
                    {item.status}
                  </span>
                </td>
                <td className="p-3.5 text-slate-400">{item.created_at}</td>
                <td className="p-3.5 text-center space-x-2">
                  <button type="button" onClick={() => alert(`Edit: ${item.judul}`)} className="text-cyan-700 hover:underline font-semibold cursor-pointer">Edit</button>
                  <button type="button" onClick={() => handleDelete(item.id)} className="text-rose-600 hover:underline font-semibold cursor-pointer">Hapus</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200">
            <h3 className="text-base font-bold text-[#0c2340] mb-4">Input Berita Baru</h3>
            <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
              <div>
                <label className="block font-semibold mb-1">Judul *</label>
                <input type="text" required value={formData.judul} onChange={(e) => setFormData({ ...formData, judul: e.target.value })} className="w-full p-2 border rounded-lg" />
              </div>
              <div>
                <label className="block font-semibold mb-1">Konten *</label>
                <textarea rows="4" required value={formData.konten} onChange={(e) => setFormData({ ...formData, konten: e.target.value })} className="w-full p-2 border rounded-lg"></textarea>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold mb-1">File Gambar (gambar_url)</label>
                  <input type="file" accept="image/*" onChange={(e) => setFormData({ ...formData, file: e.target.files[0] })} className="w-full text-[11px] text-slate-500" />
                </div>
                <div>
                  <label className="block font-semibold mb-1">Status</label>
                  <select value={formData.status} onChange={(e) => setFormData({ ...formData, status: e.target.value })} className="w-full p-2 border rounded-lg bg-white">
                    <option value="Published">Published</option>
                    <option value="Draft">Draft</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-end gap-2 pt-4 border-t">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-slate-600">Batal</button>
                <button type="submit" className="px-5 py-2 bg-[#0c2340] text-white rounded-lg font-bold">Simpan Berita</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default KelolaBerita;