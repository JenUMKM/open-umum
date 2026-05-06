const HowItWorks = () => {
  const steps = [
    {
      step: "Langkah 1",
      title: "Cari Usaha",
      desc: "Pengguna memasukkan lokasi, filter, atau memilih kategori yang diinginkan.",
    },
    {
      step: "Langkah 2",
      title: "Lihat Detail",
      desc: "Sistem menampilkan informasi usaha agar pengguna dapat memilih yang paling sesuai.",
    },
    {
      step: "Langkah 3",
      title: "Hubungi Pemilik",
      desc: "Pengguna melanjutkan komunikasi melalui kontak yang tersedia pada profil usaha.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"
    >
      <div className="mb-6 max-w-3xl">
        <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900">
          Cara Kerja Aplikasi Dalam 3 Langkah
        </h2>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {steps.map((item, index) => (
          <article
            key={index}
            className="rounded-xl border border-slate-200 bg-slate-50 p-4"
          >
            <p className="text-xs font-bold text-blue-600">{item.step}</p>
            <h3 className="mt-1 font-bold text-slate-900">{item.title}</h3>
            <p className="mt-1 text-sm text-slate-600">
              {item.desc}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;