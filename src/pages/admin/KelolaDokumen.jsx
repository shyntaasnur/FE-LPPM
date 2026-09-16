import { useState } from 'react';

const KelolaDokumen = () => {
  const [dataDokumen, setDataDokumen] = useState([
    {
      id: 1,
      judul: 'Panduan Pelaksanaan Penelitian Tahun 2026',
      kategori: 'Panduan',
      file_url: 'https://example.com/files/Panduan_2026.pdf',
      created_at: '2026-01-12'
    },
    {
      id: 2,
      judul: 'Template Proposal Pengabdian Masyarakat',
      kategori: 'Template',
      file_url: 'https://example.com/files/Template_PKM.docx',
      created_at: '2026-02-05'
    }
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState({ judul: '', kategori: 'Panduan', file: null });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newDoc = {
      id: Date.now(),
      judul: form.judul,
      kategori: form.kategori,
      file_url: form.file ? `https://storage.itpln.ac.id/lppm/${form.file.name}` : 'https://storage.itpln.ac.id/lppm/dokumen.pdf',
      created_at: new Date().toISOString().split('T')[0]
    };
    setDataDokumen([newDoc, ...dataDokumen]);
    setIsModalOpen(false);
    setForm({ judul: '', kategori: 'Panduan', file: null });
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-100">
        <div>
          <h1 className="text-xl font-extrabold text-[#0c2340]">Kelola Dokumen</h1>
          <p className="text-xs text-slate-500">Repositori berkas panduan, template, formulir, dan SOP.</p>
        </div>
        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="bg-[#0c2340] hover:bg-[#123055] text-white text-xs font-bold px-4 py-2.5 rounded-lg cursor-pointer self-start sm:self-auto"
        >
          + Unggah Dokumen
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-50 text-[10px] font-bold text-slate-400 uppercase">
            <tr>
              <th className="p-3.5">JUDUL DOKUMEN</th>
              <th className="p-3.5">KATEGORI</th>
              <th className="p-3.5">LINK FILE (FILE_URL)</th>
              <th className="p-3.5">TANGGAL UPLOAD</th>
              <th className="p-3.5 text-center">AKSI</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {dataDokumen.map((doc) => (
              <tr key={doc.id} className="hover:bg-slate-50/80">
                <td className="p-3.5 font-bold text-[#0c2340]">{doc.judul}</td>
                <td className="p-3.5">
                  <span className="bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded font-bold text-[10px]">
                    {doc.kategori}
                  </span>
                </td>
                <td className="p-3.5">
                  <a href={doc.file_url} target="_blank" rel="noreferrer" className="text-cyan-700 hover:underline font-mono text-[11px]">
                    {doc.file_url}
                  </a>
                </td>
                <td className="p-3.5 text-slate-400">{doc.created_at}</td>
                <td className="p-3.5 text-center space-x-2">
                  <button type="button" onClick={() => alert(`Edit: ${doc.judul}`)} className="text-cyan-700 hover:underline font-semibold cursor-pointer">Edit</button>
                  <button type="button" onClick={() => setDataDokumen(dataDokumen.filter(d => d.id !== doc.id))} className="text-rose-600 hover:underline font-semibold cursor-pointer">Hapus</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200">
            <h3 className="text-base font-bold text-[#0c2340] mb-4">Unggah Dokumen Baru</h3>
            <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
              <div>
                <label className="block font-semibold mb-1">Judul Dokumen *</label>
                <input type="text" required value={form.judul} onChange={(e) => setForm({ ...form, judul: e.target.value })} className="w-full p-2 border rounded-lg" />
              </div>
              <div>
                <label className="block font-semibold mb-1">Kategori *</label>
                <select value={form.kategori} onChange={(e) => setForm({ ...form, kategori: e.target.value })} className="w-full p-2 border rounded-lg bg-white">
                  <option value="Panduan">Panduan</option>
                  <option value="Template">Template</option>
                  <option value="SOP">SOP</option>
                  <option value="Formulir">Formulir</option>
                </select>
              </div>
              <div>
                <label className="block font-semibold mb-1">File (PDF / DOCX) *</label>
                <input type="file" required accept=".pdf,.docx,.doc" onChange={(e) => setForm({ ...form, file: e.target.files[0] })} className="w-full text-[11px] text-slate-500" />
              </div>
              <div className="flex justify-end gap-2 pt-4 border-t">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-slate-600">Batal</button>
                <button type="submit" className="px-5 py-2 bg-[#0c2340] text-white rounded-lg font-bold">Unggah</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default KelolaDokumen;