const RegistrationSteps = () => {
  const steps = [
    { title: "Daftar Akun", desc: "Buat akun gratis dalam hitungan menit." },
    { title: "Isi Data Usaha & Lokasi", desc: "Lengkapi informasi dan lokasi usahamu." },
    { title: "Tambah Produk", desc: "Unggah katalog produk untuk ditampilkan ke pelanggan." },
    { title: "Atur Status Toko", desc: "Set buka/tutup agar pelanggan tahu toko sedang aktif." },
    { title: "Terima Chat WA", desc: "Pelanggan hubungi toko lewat tombol WhatsApp." },
  ];

  return (
    <section id="kontak" className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">Cara Bergabung & Mulai Berjualan</h2>
        <p className="mt-3 text-slate-600">Khusus untuk pemilik UMKM yang ingin menjual. Ikuti 5 langkah sederhana berikut untuk mulai menggunakan platform.</p>
      </div>

      <div className="relative mt-8">
        <div className="absolute top-8 left-14 right-14 hidden h-0.5 bg-blue-100 lg:block"></div>
        <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {steps.map((item, index) => (
            <li key={index} className="relative">
              <article className="relative z-10 h-full rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                <div className="flex flex-col items-center gap-3 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-lg font-black text-white shadow">
                    {index + 1}
                  </div>
                  <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              </article>
              {index < steps.length - 1 && (
                <i className="ri-arrow-right-s-line absolute top-8 -right-3 z-20 hidden text-2xl text-blue-400 lg:block" aria-hidden="true"></i>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
export default RegistrationSteps;