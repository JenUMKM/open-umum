import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Layanan - OpenUMKM",
  description:
    "Layanan OpenUMKM untuk pelanggan dan pemilik UMKM: katalog digital, pencarian lokasi, kontak via WhatsApp, hingga pengelolaan toko.",
};

const services = [
  {
    icon: "ri-shopping-bag-3-line",
    accent: "blue",
    title: "Katalog Digital UMKM",
    desc: "Tampilkan produk Anda dengan foto, harga, dan deskripsi yang menarik secara online.",
    features: [
      "Tambah produk tanpa batas",
      "Foto multi-angle",
      "Atur stok & varian",
      "Bagikan link katalog",
    ],
  },
  {
    icon: "ri-map-pin-2-line",
    accent: "emerald",
    title: "Pencarian Berbasis Lokasi",
    desc: "Pelanggan dapat menemukan UMKM terdekat dengan filter kategori dan jarak.",
    features: [
      "Filter kategori",
      "Radius pencarian",
      "Peta interaktif",
      "Saran toko populer",
    ],
  },
  {
    icon: "ri-whatsapp-line",
    accent: "emerald",
    title: "Kontak via WhatsApp",
    desc: "Tombol satu-klik untuk menghubungkan pelanggan langsung ke pemilik usaha.",
    features: [
      "Pesan template otomatis",
      "Tanpa biaya tambahan",
      "Tracking interaksi",
      "Multi-nomor admin",
    ],
  },
  {
    icon: "ri-store-2-line",
    accent: "blue",
    title: "Manajemen Toko",
    desc: "Atur status buka/tutup, jam operasional, dan profil usaha kapan saja.",
    features: [
      "Status real-time",
      "Jam buka fleksibel",
      "Foto profil & banner",
      "Deskripsi usaha",
    ],
  },
  {
    icon: "ri-smartphone-line",
    accent: "blue",
    title: "Antarmuka Sederhana",
    desc: "Akses seluruh informasi usaha dengan mudah melalui tampilan yang rapi dan responsif di berbagai perangkat.",
    features: [
      "Akses dari HP & Laptop",
      "Navigasi intuitif",
      "Tampilan bersih",
      "Performa cepat",
    ],
  },
  {
    icon: "ri-global-line",
    accent: "emerald",
    title: "Akses Darimana Saja",
    desc: "Platform berbasis web yang dapat diakses langsung tanpa perlu mengunduh aplikasi tambahan.",
    features: [
      "Tanpa instalasi",
      "Hemat memori HP",
      "Akses dari browser",
      "Dukungan lintas perangkat",
    ],
  },
];

const tiers = [
  {
    name: "Pelanggan",
    price: "Gratis",
    badge: "Untuk Anda yang ingin berbelanja",
    accent: "emerald",
    points: [
      "Cari UMKM terdekat",
      "Lihat katalog tanpa registrasi",
      "Hubungi penjual via WhatsApp",
      "Simpan toko favorit",
    ],
    cta: "Mulai Jelajahi",
  },
  {
    name: "Pemilik UMKM",
    price: "Gratis",
    badge: "Khusus pelaku usaha",
    accent: "blue",
    points: [
      "Profil & katalog tanpa batas",
      "Atur status buka / tutup",
      "Akses ke dashboard analitik",
      "Dukungan komunitas penuh",
    ],
    cta: "Daftar Toko",
  },
];

const flow = [
  {
    num: 1,
    title: "Pilih Layanan",
    desc: "Tentukan apakah Anda pelanggan atau pemilik UMKM.",
  },
  {
    num: 2,
    title: "Daftarkan Diri",
    desc: "Isi form sederhana dengan data dasar Anda.",
  },
  {
    num: 3,
    title: "Lengkapi Profil",
    desc: "Pelanggan tidak wajib daftar. Pemilik mengisi profil & katalog.",
  },
  {
    num: 4,
    title: "Mulai Terhubung",
    desc: "Cari UMKM atau terima kontak dari pelanggan baru.",
  },
];

const accentMap: Record<
  string,
  { iconBg: string; iconText: string; check: string }
> = {
  blue: {
    iconBg: "bg-blue-100",
    iconText: "text-blue-600",
    check: "text-blue-600",
  },
  emerald: {
    iconBg: "bg-emerald-100",
    iconText: "text-emerald-600",
    check: "text-emerald-600",
  },
};

export default function ServicesPage() {
  return (
    <div className="bg-white overflow-hidden" data-testid="services-page">
      <Navbar />

      <main className="mx-auto max-w-[1220px] flex-grow space-y-8 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        {/* Hero */}
        <section
          data-aos="fade-up"
          className="relative isolate overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 sm:p-10"
        >
          <div className="max-w-3xl">
            <span className="inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-blue-700">
              Layanan
            </span>
            <h1 className="mt-4 text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Layanan Lengkap untuk <span className="text-blue-600">UMKM</span>{" "}
              &amp; <span className="text-emerald-600">Pelanggan</span>
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              Mulai dari katalog digital, pencarian lokasi, hingga pengelolaan
              toko, semuanya dirancang agar UMKM lokal lebih mudah ditemukan dan
              pelanggan lebih cepat terhubung.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/contact"
                data-testid="services-hero-cta-join"
                className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow transition hover:bg-blue-700"
              >
                Daftar Sekarang
              </Link>
              <a
                href="#layanan"
                data-testid="services-hero-cta-explore"
                className="rounded-xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Lihat Semua Layanan
              </a>
            </div>
          </div>
        </section>

        {/* Layanan Cards */}
        <section
          id="layanan"
          className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"
          data-aos="fade-up"
        >
          <div className="mb-6 max-w-3xl">
            <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900">
              Apa Saja yang Kami Tawarkan?
            </h2>
            <p className="mt-3 text-slate-600">
              Enam layanan inti untuk mendukung pengalaman digital UMKM dan
              kemudahan pelanggan.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, idx) => {
              const accent = accentMap[s.accent];
              return (
                <article
                  key={s.title}
                  data-aos="zoom-in"
                  data-aos-delay={150 + idx * 80}
                  data-testid={`service-card-${idx}`}
                  className="group rounded-xl border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div
                    className={`inline-flex h-11 w-11 items-center justify-center rounded-lg ${accent.iconBg} ${accent.iconText}`}
                  >
                    <i className={`${s.icon} text-2xl`}></i>
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-slate-900">
                    {s.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">{s.desc}</p>
                  <ul className="mt-4 space-y-2">
                    {s.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 text-sm text-slate-700"
                      >
                        <i
                          className={`ri-check-line mt-0.5 ${accent.check}`}
                        ></i>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </section>

        {/* Tiers */}
        <section
          data-aos="fade-up"
          className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"
        >
          <div className="mb-6 max-w-3xl">
            <h2 className="text-3xl font-black tracking-tight text-slate-900">
              Untuk Siapa Layanan Ini?
            </h2>
            <p className="mt-3 text-slate-600">
              Dua jalur penggunaan, satu platform yang sama. Tanpa biaya
              layanan.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {tiers.map((t, idx) => {
              const accent = accentMap[t.accent];
              return (
                <article
                  key={t.name}
                  data-aos="fade-up"
                  data-aos-delay={150 + idx * 100}
                  data-testid={`service-tier-${t.name.toLowerCase().replace(/\s+/g, "-")}`}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-7"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                        {t.badge}
                      </p>
                      <h3 className="mt-1 text-2xl font-black text-slate-900">
                        {t.name}
                      </h3>
                    </div>
                    <span
                      className={`rounded-full ${accent.iconBg} px-3 py-1 text-xs font-black ${accent.iconText}`}
                    >
                      {t.price}
                    </span>
                  </div>
                  <ul className="mt-5 space-y-2">
                    {t.points.map((p) => (
                      <li
                        key={p}
                        className="flex items-start gap-2 text-sm text-slate-700"
                      >
                        <i
                          className={`ri-checkbox-circle-fill ${accent.check}`}
                        ></i>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    data-testid={`service-tier-cta-${t.name.toLowerCase().replace(/\s+/g, "-")}`}
                    className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow transition hover:bg-blue-700"
                  >
                    {t.cta}
                  </Link>
                </article>
              );
            })}
          </div>
        </section>

        {/* Flow */}
        <section
          data-aos="fade-up"
          className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"
        >
          <div className="mx-auto mb-8 max-w-3xl text-center">
            <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              Cara Memanfaatkan Layanan
            </h2>
            <p className="mt-3 text-slate-600">
              Empat langkah singkat untuk mulai menggunakan OpenUMKM.
            </p>
          </div>

          <div className="relative">
            <div className="absolute top-8 left-14 right-14 hidden h-0.5 bg-blue-100 lg:block"></div>
            <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {flow.map((s, idx) => (
                <li
                  key={s.num}
                  className="relative"
                  data-aos="fade-up"
                  data-aos-delay={150 + idx * 100}
                >
                  <article
                    data-testid={`service-flow-${s.num}`}
                    className="relative z-10 h-full rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <div className="flex flex-col items-center gap-3 text-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-lg font-black text-white shadow">
                        {s.num}
                      </div>
                      <h3 className="text-base font-bold text-slate-900">
                        {s.title}
                      </h3>
                      <p className="text-sm text-slate-600">{s.desc}</p>
                    </div>
                  </article>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* FAQ kecil */}
        <section
          data-aos="fade-up"
          className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"
        >
          <h2 className="text-3xl font-black tracking-tight text-slate-900">
            Pertanyaan Umum
          </h2>
          <div className="mt-6 grid gap-3">
            {[
              {
                q: "Apakah benar-benar gratis?",
                a: "Ya. Semua layanan inti seperti katalog, pencarian, dan kontak WhatsApp dapat digunakan tanpa biaya.",
              },
              {
                q: "Apakah saya perlu menginstal aplikasi?",
                a: "Tidak. OpenUMKM berbasis web, bisa diakses langsung dari peramban pelanggan dan pemilik usaha.",
              },
              {
                q: "Bagaimana data toko saya disimpan?",
                a: "Data dikelola dengan standar keamanan modern dan hanya digunakan untuk menampilkan profil usaha Anda.",
              },
            ].map((item, idx) => (
              <details
                key={item.q}
                data-testid={`service-faq-${idx}`}
                className="group rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:bg-slate-100"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-sm font-semibold text-slate-900">
                  {item.q}
                  <i className="ri-arrow-down-s-line text-xl text-slate-500 transition group-open:rotate-180"></i>
                </summary>
                <p className="mt-2 text-sm text-slate-600">{item.a}</p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
