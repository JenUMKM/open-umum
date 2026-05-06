const Benefit = () => {
  const benefits = [
    {
      title: "Cepat Ditemukan",
      desc: "Pengguna dapat mencari usaha berdasarkan nama, kategori, atau lokasi tanpa proses yang rumit.",
    },
    {
      title: "Informasi Lebih Jelas",
      desc: "Detail profil usaha membantu pengguna memahami layanan sebelum menghubungi pemilik.",
    },
    {
      title: "Kontak Lebih Praktis",
      desc: "Akses kontak langsung membuat komunikasi jadi cepat untuk pertanyaan produk atau layanan.",
    },
  ];

  return (
    <section
      id="benefits"
      className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"
    >
      <div className="mb-6 max-w-3xl">
        <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900">
          Kenapa Harus Pakai?
        </h2>
        <p className="mt-3 text-slate-600">
          Aplikasi ini dirancang untuk memudahkan proses pencarian usaha,
          melihat detail, dan melanjutkan komunikasi ke pemilik usaha.
        </p>
      </div>
      
      <div className="grid gap-4 md:grid-cols-3">
        {benefits.map((item, index) => (
          <article 
            key={index} 
            className="rounded-xl border border-slate-200 bg-slate-50 p-4"
          >
            <h3 className="font-bold text-slate-900">{item.title}</h3>
            <p className="mt-1 text-sm text-slate-600">
              {item.desc}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Benefit;