const UserRolesSection = () => {
  const customerFeatures = [
    { icon: "ri-map-pin-line", title: "Toko Terdekat", desc: "Cari UMKM yang paling dekat dari lokasi Anda yang sedang buka." },
    { icon: "ri-dashboard-line", title: "Filter Kategori", desc: "Jelajahi katalog berdasarkan kategori produk yang Anda inginkan." },
    { icon: "ri-circle-fill", title: "Lihat Status Toko", desc: "Ketahui apakah toko sedang buka atau tutup sebelum menghubungi." },
    { icon: "ri-whatsapp-line", title: "Chat via WhatsApp", desc: "Tanyakan produk, stok, atau harga langsung ke pemilik toko." },
  ];

  const ownerFeatures = [
    { icon: "ri-shopping-bag-3-line", title: "Kelola Katalog", desc: "Tambah, edit, dan tampilkan produk Anda dengan mudah ke pelanggan." },
    { icon: "ri-circle-fill", title: "Atur Status Toko", desc: "Aktifkan atau tutup toko Anda secara real-time agar pelanggan tahu." },
    { icon: "ri-map-pin-line", title: "Lokasi Toko", desc: "Tampilkan lokasi bisnis Anda agar mudah ditemukan pelanggan terdekat." },
    { icon: "ri-whatsapp-line", title: "Terima Chat WA", desc: "Pelanggan dapat menghubungi Anda langsung via WhatsApp tanpa ribet." },
  ];

  return (
    <>
      {/* Untuk Pelanggan */}
      <section id="pelanggan" className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
        <div className="mb-6 max-w-2xl">
          <h2 className="text-3xl font-black tracking-tight text-slate-900">
            Untuk <span className="text-emerald-600">Pelanggan</span>
          </h2>
          <p className="mt-3 text-slate-600">Temukan UMKM lokal yang Anda cari, lihat katalog produk mereka, dan hubungi langsung via WhatsApp.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {customerFeatures.map((item, index) => (
            <article key={index} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-start gap-3">
                <div className="rounded-lg bg-emerald-100 p-2 px-3 text-2xl" aria-hidden="true">
                  <i className={`${item.icon} text-emerald-600`}></i>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{item.desc}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Untuk Pemilik */}
      <section id="pemilik" className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
        <div className="mb-6 max-w-2xl">
          <h2 className="text-3xl font-black tracking-tight text-slate-900">
            Untuk <span className="text-blue-600">Pemilik UMKM</span>
          </h2>
          <p className="mt-3 text-slate-600">Kelola katalog produk Anda, atur status buka/tutup, dan terima kontak dari pelanggan melalui WhatsApp.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {ownerFeatures.map((item, index) => (
            <article key={index} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-start gap-3">
                <div className="rounded-lg bg-blue-100 py-2 px-3 text-2xl" aria-hidden="true">
                  <i className={`${item.icon} text-blue-600`}></i>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{item.desc}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};
export default UserRolesSection;