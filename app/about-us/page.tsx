import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Tentang Kami - OpenUMKM",
  description:
    "Mengenal lebih dekat OpenUMKM, platform komunitas dan marketplace yang mendukung pertumbuhan UMKM lokal di Indonesia.",
};

const values = [
  {
    icon: "ri-community-line",
    title: "Komunitas Lokal",
    desc: "Kami percaya kekuatan UMKM tumbuh dari kolaborasi antar pelaku usaha, pelanggan, dan komunitas sekitar.",
  },
  {
    icon: "ri-shield-check-line",
    title: "Transparan & Terbuka",
    desc: "Platform open-source yang dapat dipelajari, diaudit, dan dikembangkan bersama untuk kepentingan banyak orang.",
  },
  {
    icon: "ri-rocket-2-line",
    title: "Inovasi Berkelanjutan",
    desc: "Kami terus menghadirkan fitur baru yang relevan dengan kebutuhan UMKM di era digital.",
  },
  {
    icon: "ri-hand-heart-line",
    title: "Dukung UMKM",
    desc: "Misi kami adalah membantu UMKM lebih mudah ditemukan, dikenal, dan berkembang tanpa biaya layanan.",
  },
];

const stats = [
  { label: "UMKM Terdaftar", value: "1.200+" },
  { label: "Kota Terjangkau", value: "85" },
  { label: "Pelanggan Aktif", value: "24K" },
  { label: "Biaya Layanan", value: "Gratis" },
];

const milestones = [
  {
    year: "2023",
    title: "Ide Awal",
    desc: "OpenUMKM lahir dari diskusi komunitas pengembang yang ingin membantu UMKM masuk ke ranah digital.",
  },
  {
    year: "2024",
    title: "Versi Pertama",
    desc: "Rilis platform dengan fitur katalog, pencarian lokasi, dan integrasi WhatsApp untuk komunikasi cepat.",
  },
  {
    year: "2025",
    title: "Open Source",
    desc: "Source code dibuka untuk umum agar siapa pun dapat berkontribusi dan men-deploy versi mereka sendiri.",
  },
  {
    year: "2026",
    title: "Ekspansi Komunitas",
    desc: "Memperluas jangkauan ke lebih banyak kota dan menambah modul analitik untuk pemilik UMKM.",
  },
];

export default function AboutUsPage() {
  return (
    <div className="bg-white overflow-hidden" data-testid="about-page">
      <Navbar />

      <main className="mx-auto max-w-[1220px] flex-grow space-y-8 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        {/* Hero */}
        <section
          data-aos="fade-up"
          className="relative isolate overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 sm:p-10"
        >
          <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <span className="inline-block rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-700">
                Tentang Kami
              </span>
              <h1 className="mt-4 text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Membangun Ekosistem <span className="text-blue-600">UMKM</span>{" "}
                yang <span className="text-emerald-600">Terhubung</span>
              </h1>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
                OpenUMKM adalah platform komunitas dan marketplace yang
                menghubungkan pelanggan dengan pelaku UMKM lokal. Kami
                berkomitmen membuat usaha kecil mudah ditemukan, dikenal, dan
                tumbuh dalam ekosistem digital yang inklusif.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/services"
                  data-testid="about-cta-services"
                  className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow transition hover:bg-blue-700"
                >
                  Lihat Layanan Kami
                </Link>
                <Link
                  href="/contact"
                  data-testid="about-cta-contact"
                  className="rounded-xl border border-emerald-500 px-6 py-3 text-sm font-semibold text-emerald-600 transition hover:bg-emerald-50"
                >
                  Hubungi Tim
                </Link>
              </div>
            </div>

            <div data-aos="fade-left" className="grid grid-cols-2 gap-3">
              {stats.map((s) => (
                <div
                  key={s.label}
                  data-testid={`about-stat-${s.label.toLowerCase().replace(/\s+/g, "-")}`}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                >
                  <p className="text-sm text-slate-500">{s.label}</p>
                  <p className="mt-1 text-2xl font-black text-slate-900">
                    {s.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Misi & Visi */}
        <section data-aos="fade-up" className="grid gap-4 md:grid-cols-2">
          <article
            className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"
            data-testid="about-mission"
          >
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
              <i className="ri-flag-2-line text-xl"></i>
            </div>
            <h2 className="text-2xl font-black tracking-tight text-slate-900">
              Misi Kami
            </h2>
            <p className="mt-3 text-slate-600">
              Memberdayakan UMKM Indonesia melalui teknologi yang sederhana,
              terbuka, dan gratis. Kami ingin setiap pemilik usaha bisa hadir
              secara digital tanpa hambatan biaya atau kerumitan teknis.
            </p>
          </article>

          <article
            className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"
            data-testid="about-vision"
          >
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
              <i className="ri-eye-line text-xl"></i>
            </div>
            <h2 className="text-2xl font-black tracking-tight text-slate-900">
              Visi Kami
            </h2>
            <p className="mt-3 text-slate-600">
              Menjadi platform UMKM open-source paling dipercaya di Indonesia,
              di mana pelanggan dan pemilik usaha dapat saling terhubung secara
              cepat, jelas, dan praktis.
            </p>
          </article>
        </section>

        {/* Nilai-nilai */}
        <section
          data-aos="zoom-in"
          className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"
        >
          <div className="mb-6 max-w-3xl">
            <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900">
              Nilai yang Kami Pegang
            </h2>
            <p className="mt-3 text-slate-600">
              Empat prinsip yang menjadi fondasi setiap keputusan dan fitur yang
              kami bangun.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, idx) => (
              <article
                key={v.title}
                data-aos="fade-up"
                data-aos-delay={150 + idx * 100}
                data-testid={`about-value-${idx}`}
                className="rounded-xl border border-slate-200 bg-slate-50 p-5"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white text-blue-600 ring-1 ring-slate-200">
                  <i className={`${v.icon} text-xl`}></i>
                </div>
                <h3 className="mt-3 font-bold text-slate-900">{v.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{v.desc}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Perjalanan / Timeline */}
        <section
          data-aos="fade-up"
          className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"
        >
          <div className="mb-8 max-w-3xl">
            <h2 className="text-3xl font-black tracking-tight text-slate-900">
              Perjalanan Kami
            </h2>
            <p className="mt-3 text-slate-600">
              Beberapa tonggak penting dalam pertumbuhan OpenUMKM.
            </p>
          </div>

          <ol className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {milestones.map((m, i) => (
              <li
                key={m.year}
                data-aos="fade-up"
                data-aos-delay={150 + i * 100}
                data-testid={`about-milestone-${m.year}`}
                className="relative rounded-2xl border border-slate-200 bg-slate-50 p-5"
              >
                <span className="inline-flex h-10 w-fit items-center rounded-full bg-blue-600 px-3 text-xs font-black text-white">
                  {m.year}
                </span>
                <h3 className="mt-3 font-bold text-slate-900">{m.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{m.desc}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* CTA */}
        <section
          data-aos="fade-up"
          className="rounded-2xl border border-slate-200 bg-slate-50 p-8 sm:p-10"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
                Tertarik berkolaborasi dengan kami?
              </h2>
              <p className="mt-2 max-w-xl text-slate-600">
                Sebagai komunitas, mitra, atau kontributor open source. Pintu
                kami selalu terbuka.
              </p>
            </div>
            <Link
              href="/contact"
              data-testid="about-bottom-cta"
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow transition hover:bg-blue-700"
            >
              Hubungi Kami →
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
