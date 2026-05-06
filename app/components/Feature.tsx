const FeaturesSection = () => {
  const features = [
    { title: "Pencarian Cepat", desc: "Menemukan usaha dari kata kunci dalam satu tampilan." },
    { title: "Filter Kategori", desc: "Menyaring daftar usaha berdasarkan jenis produk atau layanan." },
    { title: "Profil Usaha", desc: "Menampilkan informasi usaha seperti katalog, lokasi, dan status toko." },
    { title: "Akses Kontak", desc: "Pengguna dapat menghubungi pemilik usaha melalui tombol kontak yang disediakan." },
    { title: "Status Toko", desc: "Informasi buka atau tutup membantu pengguna memilih waktu interaksi." },
    { title: "Antarmuka Simple", desc: "Desain yang sederhana dan mudah digunakan." },
  ];

  return (
    <section id="features" className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
      <div className="mb-6 max-w-3xl">
        <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900">Fitur Inti Aplikasi</h2>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((item, index) => (
          <article key={index} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <h3 className="font-bold text-slate-900">{item.title}</h3>
            <p className="mt-1 text-sm text-slate-600">{item.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
};
export default FeaturesSection;