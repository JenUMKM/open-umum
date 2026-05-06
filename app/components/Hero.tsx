const Hero = () => {
  return (
    <section className="relative isolate grid gap-8 overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:px-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 rounded-2xl bg-[url('/assets/img/gambar.png')] bg-center bg-no-repeat opacity-50 md:bg-right md:opacity-100 md:mask-l-to-66%"
        style={{ backgroundSize: "auto 600px" }}
      ></div>

      <article className="relative z-10 lg:my-20">
        <h1 className="max-w-xl text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
          Platform Komunitas &amp;
          <br />
          Marketplace <span className="text-emerald-600">UMKM</span>
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600 sm:mt-5 sm:text-lg">
          Hubungkan pelanggan dengan UMKM lokal. Cari toko terdekat, lihat
          katalog, atau kelola toko Anda dengan mudah.
        </p>

        <div className="mt-6 grid gap-3 sm:mt-7 sm:flex sm:flex-wrap sm:items-center sm:gap-4">
          <a
            href="#pelanggan"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow transition hover:bg-blue-700 sm:w-auto"
          >
            Sebagai Pelanggan
          </a>
          <a
            href="#pemilik"
            className="w-full rounded-xl border border-emerald-500 px-6 py-3 text-center text-sm font-semibold text-emerald-600 transition hover:bg-emerald-50 sm:w-auto"
          >
            Sebagai Pemilik UMKM
          </a>
        </div>

        <div
          aria-label="Fitur utama platform"
          className="mt-7 grid gap-3 sm:mt-8 sm:grid-cols-3"
        >
          {[
            { label: "Katalog Produk", value: "Digital" },
            { label: "Hubungi Penjual", value: "WhatsApp" },
            { label: "Biaya Layanan", value: "Gratis" },
          ].map((item, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={200 + idx * 100}
              className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
            >
              <p className="text-sm text-slate-500">{item.label}</p>
              <p className="mt-1 text-xl font-black text-slate-900">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
};

export default Hero;
