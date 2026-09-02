import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import itpln from '../assets/itpln.jpg';

const Profil = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col justify-between">
      
      {/* 1. NAVBAR (Reusable Component) */}
      <Navbar />

      <main className="grow">
        {/* 2. BREADCRUMB & TITLE */}
        <div className="bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6 pt-8 pb-6">
            <div className="text-xs font-semibold text-slate-400 mb-2">
              <span>Beranda</span> <span className="mx-1">&gt;</span> <span className="text-slate-700">Profil</span>
            </div>
            <h1 className="text-3xl font-extrabold text-[#0c2340]">
              Profil & Kelembagaan
            </h1>
          </div>
        </div>

        {/* 3. SEJARAH & PERAN KAMI */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 space-y-4 text-slate-600 text-sm leading-relaxed">
                <h2 className="text-2xl font-bold text-[#0c2340] mb-4">Sejarah & Peran Kami</h2>
                <p>
                  Berdiri sejalan dengan komitmen Institut Teknologi PLN dalam mencetak inovasi di sektor energi, LPPM IT-PLN dibentuk sebagai pusat akselerasi Tri Dharma Perguruan Tinggi. Sejak awal pendiriannya, lembaga ini terus bertransformasi dari pengelola riset akademik menjadi katalisator inovasi teknologi berdaya saing. Perjalanan LPPM IT-PLN didorong oleh dedikasi untuk menjawab tantangan transisi energi, keandalan sistem ketenagalistrikan, dan pemanfaatan teknologi berkelanjutan bagi kemajuan bangsa.
                </p>
                <p>
                  Dalam menjalankan mandatnya, LPPM IT-PLN bergerak melalui tiga pilar terintegrasi: Bagian Pengembangan Penelitian yang mengarahkan riset strategis di bidang energi dan ketenagalistrikan menuju perolehan HKI; Bagian Pengembangan Pengabdian kepada Masyarakat yang menerjemahkan inovasi kampus menjadi solusi teknologi aplikatif bagi masyarakat; serta Bagian Publikasi dan Penerbitan yang mengelola jurnal terakreditasi dan penerbitan ilmiah guna memperluas diseminasi karya civitas akademika di tingkat nasional maupun global.
                </p>
              </div>

              <div className="lg:col-span-6">
                <div className="rounded-2xl overflow-hidden shadow-md">
                  <img 
                    src={itpln} 
                    alt="Gedung IT-PLN" 
                    className="w-full h-80 lg:h-96 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. VISI & MISI */}
        <section className="py-14 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl font-extrabold text-[#0c2340] text-center mb-10">Visi & Misi</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Visi Card */}
              <div className="bg-white rounded-2xl p-8 border-t-4 border-t-amber-400 border-x border-b border-x-slate-100 border-b-slate-100 shadow-sm flex flex-col justify-start">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-amber-100/80 flex items-center justify-center text-amber-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" strokeWidth="2" />
                      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" strokeWidth="2" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#0c2340]">Visi</h3>
                </div>
                <blockquote className="text-sm font-semibold text-slate-800 leading-relaxed border-none pl-0">
                  &ldquo;Menjadi lembaga terkemuka dan bereputasi internasional dalam riset, inovasi, dan pengabdian masyarakat di bidang energi dan teknologi pada tahun 2030.&rdquo;
                </blockquote>
              </div>

              {/* Misi Card */}
              <div className="bg-white rounded-2xl p-8 border-t-4 border-t-cyan-400 border-x border-b border-x-slate-100 border-b-slate-100 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-cyan-100/80 flex items-center justify-center text-cyan-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#0c2340]">Misi</h3>
                </div>
                <ul className="space-y-3.5 text-xs md:text-sm text-slate-600">
                  {[
                    'Meningkatkan kuantitas dan kualitas riset yang inovatif dan aplikatif.',
                    'Mendorong hilirisasi hasil riset dan perolehan Hak Kekayaan Intelektual (HKI).',
                    'Melaksanakan program pengabdian masyarakat yang memberdayakan dan berkelanjutan.',
                    'Membangun jejaring kerjasama nasional dan internasional untuk penguatan institusi.'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <svg className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 5. TUGAS & FUNGSI UTAMA */}
        <section className="py-14 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl font-extrabold text-[#0c2340] text-center mb-10">Tugas & Fungsi Utama</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Manajemen Riset */}
              <div className="bg-white border border-slate-100 rounded-2xl p-6 text-center shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] flex flex-col items-center hover:shadow-md transition">
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-[#0c2340] mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="font-bold text-slate-900 text-sm mb-2">Manajemen Riset</h3>
                <p className="text-xs text-slate-500 leading-relaxed">Pengelolaan hibah, evaluasi, dan monitoring pelaksanaan penelitian dosen dan mahasiswa.</p>
              </div>

              {/* Fasilitasi HKI */}
              <div className="bg-white border border-slate-100 rounded-2xl p-6 text-center shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] flex flex-col items-center hover:shadow-md transition">
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-[#0c2340] mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138z" />
                  </svg>
                </div>
                <h3 className="font-bold text-slate-900 text-sm mb-2">Fasilitasi HKI</h3>
                <p className="text-xs text-slate-500 leading-relaxed">Pendampingan pengajuan paten, hak cipta, dan perlindungan kekayaan intelektual lainnya.</p>
              </div>

              {/* Pengabdian Masyarakat */}
              <div className="bg-white border border-slate-100 rounded-2xl p-6 text-center shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] flex flex-col items-center hover:shadow-md transition">
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-[#0c2340] mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-slate-900 text-sm mb-2">Pengabdian Masyarakat</h3>
                <p className="text-xs text-slate-500 leading-relaxed">Koordinasi program CSR, KKN Tematik, dan penerapan teknologi tepat guna di masyarakat.</p>
              </div>

              {/* Kerjasama Publikasi */}
              <div className="bg-white border border-slate-100 rounded-2xl p-6 text-center shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] flex flex-col items-center hover:shadow-md transition">
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-[#0c2340] mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                </div>
                <h3 className="font-bold text-slate-900 text-sm mb-2">Kerjasama Publikasi</h3>
                <p className="text-xs text-slate-500 leading-relaxed">Membangun kemitraan strategis untuk publikasi jurnal ilmiah bereputasi dan seminar internasional.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. STRUKTUR ORGANISASI */}
        <section className="py-16 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#0c2340]">
                Struktur Organisasi
              </h2>
              <p className="text-xs md:text-sm text-slate-500 mt-2">
                Susunan kepengurusan dan tata kelola Lembaga Penelitian dan Pengabdian kepada Masyarakat (LPPM) IT-PLN
              </p>
            </div>

            <div className="flex flex-col items-center">
              {/* LEVEL 1: DIREKTUR */}
              <div className="relative flex flex-col items-center">
                <div className="w-72 bg-white rounded-2xl p-5 text-center shadow-md border-2 border-[#0c2340] hover:shadow-lg transition">
                  <span className="inline-block px-3 py-0.5 rounded-full text-[10px] font-bold tracking-wide uppercase bg-[#0c2340] text-amber-300 mb-3">
                    Pimpinan Utama
                  </span>
                  <div className="w-20 h-20 mx-auto rounded-full overflow-hidden mb-3 ring-4 ring-slate-100 shadow">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300" 
                      alt="Direktur / Kepala LPPM" 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm">Dr. Ir. Budi Santoso, M.T.</h3>
                  <p className="text-xs text-cyan-700 font-semibold mt-0.5">Direktur / Kepala LPPM</p>
                  
                  <div className="flex justify-center gap-2 mt-3 pt-3 border-t border-slate-100">
                    <button className="w-6 h-6 rounded bg-slate-100 text-slate-600 flex items-center justify-center hover:bg-cyan-50 hover:text-cyan-700 transition" title="Kirim Email">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </button>
                    <button className="w-6 h-6 rounded bg-slate-100 text-slate-600 flex items-center justify-center hover:bg-cyan-50 hover:text-cyan-700 transition" title="Profil Lengkap">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="w-0.5 h-10 bg-slate-300"></div>
              </div>

              {/* LEVEL 2 & 3: MANAJER & STAFF */}
              <div className="w-full max-w-6xl">
                <div className="hidden lg:block relative w-2/3 mx-auto h-0.5 bg-slate-300 mb-6">
                  <div className="absolute left-0 top-0 w-0.5 h-6 bg-slate-300"></div>
                  <div className="absolute left-1/2 -translate-x-1/2 top-0 w-0.5 h-6 bg-slate-300"></div>
                  <div className="absolute right-0 top-0 w-0.5 h-6 bg-slate-300"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* DIVISI 1: 1 MANAJER + 2 STAFF */}
                  <div className="flex flex-col items-center">
                    <div className="w-full max-w-70 bg-white rounded-xl p-4 text-center shadow-sm border border-slate-200 hover:border-cyan-500 transition">
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-cyan-50 text-cyan-700 mb-2">
                        Manajemen Riset
                      </span>
                      <div className="w-16 h-16 mx-auto rounded-full overflow-hidden mb-2 ring-2 ring-slate-100">
                        <img 
                          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300" 
                          alt="Prof. Dr. Siti Aminah, M.Sc." 
                          className="w-full h-full object-cover" 
                        />
                      </div>
                      <h4 className="font-bold text-slate-800 text-xs">Prof. Dr. Siti Aminah, M.Sc.</h4>
                      <p className="text-[11px] text-slate-500">Manajer Penelitian & Inovasi</p>
                    </div>

                    <div className="w-0.5 h-6 bg-slate-300"></div>

                    <div className="w-full space-y-3">
                      <div className="bg-white rounded-lg p-3 shadow-xs border border-slate-200 flex items-center gap-3">
                        <img 
                          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200" 
                          alt="Staff Riset 1" 
                          className="w-10 h-10 rounded-full object-cover" 
                        />
                        <div className="text-left">
                          <h5 className="font-bold text-slate-800 text-xs">Ahmad Fauzan, S.T.</h5>
                          <p className="text-[10px] text-slate-500">Staff Administrasi & Hibah Riset</p>
                        </div>
                      </div>

                      <div className="bg-white rounded-lg p-3 shadow-xs border border-slate-200 flex items-center gap-3">
                        <img 
                          src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200" 
                          alt="Staff Riset 2" 
                          className="w-10 h-10 rounded-full object-cover" 
                        />
                        <div className="text-left">
                          <h5 className="font-bold text-slate-800 text-xs">Rina Lestari, S.Kom.</h5>
                          <p className="text-[10px] text-slate-500">Staff Monev & Data Penelitian</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* DIVISI 2: 1 MANAJER + 1 STAFF */}
                  <div className="flex flex-col items-center">
                    <div className="w-full max-w-70 bg-white rounded-xl p-4 text-center shadow-sm border border-slate-200 hover:border-cyan-500 transition">
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-cyan-50 text-cyan-700 mb-2">
                        Pengabdian Masyarakat
                      </span>
                      <div className="w-16 h-16 mx-auto rounded-full overflow-hidden mb-2 ring-2 ring-slate-100">
                        <img 
                          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300" 
                          alt="Ir. Andi Pratama, Ph.D." 
                          className="w-full h-full object-cover" 
                        />
                      </div>
                      <h4 className="font-bold text-slate-800 text-xs">Ir. Andi Pratama, Ph.D.</h4>
                      <p className="text-[11px] text-slate-500">Manajer Pengabdian Masyarakat (PKM)</p>
                    </div>

                    <div className="w-0.5 h-6 bg-slate-300"></div>

                    <div className="w-full">
                      <div className="bg-white rounded-lg p-3 shadow-xs border border-slate-200 flex items-center gap-3">
                        <img 
                          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200" 
                          alt="Staff PKM" 
                          className="w-10 h-10 rounded-full object-cover" 
                        />
                        <div className="text-left">
                          <h5 className="font-bold text-slate-800 text-xs">Bambang Wijaya, M.T.</h5>
                          <p className="text-[10px] text-slate-500">Staff Program CSR & Desa Binaan</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* DIVISI 3: 1 MANAJER + 1 STAFF */}
                  <div className="flex flex-col items-center">
                    <div className="w-full max-w-70 bg-white rounded-xl p-4 text-center shadow-sm border border-slate-200 hover:border-cyan-500 transition">
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-cyan-50 text-cyan-700 mb-2">
                        Publikasi & HKI
                      </span>
                      <div className="w-16 h-16 mx-auto rounded-full overflow-hidden mb-2 ring-2 ring-slate-100">
                        <img 
                          src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=300" 
                          alt="Dr. Hendra Saputra, M.Sc." 
                          className="w-full h-full object-cover" 
                        />
                      </div>
                      <h4 className="font-bold text-slate-800 text-xs">Dr. Hendra Saputra, M.Sc.</h4>
                      <p className="text-[11px] text-slate-500">Manajer Publikasi & HKI</p>
                    </div>

                    <div className="w-0.5 h-6 bg-slate-300"></div>

                    <div className="w-full">
                      <div className="bg-white rounded-lg p-3 shadow-xs border border-slate-200 flex items-center gap-3">
                        <img 
                          src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=200" 
                          alt="Staff Jurnal" 
                          className="w-10 h-10 rounded-full object-cover" 
                        />
                        <div className="text-left">
                          <h5 className="font-bold text-slate-800 text-xs">Dewi Sartika, S.Hum.</h5>
                          <p className="text-[10px] text-slate-500">Staff Tata Kelola Jurnal & Sentra HKI</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      {/* 7. FOOTER (Reusable Component) */}
      <Footer />

    </div>
  );
};

export default Profil;