import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ContactForm from "@/app/components/ContactForm";

export const metadata = {
  title: "Kontak - OpenUMKM",
  description:
    "Hubungi tim OpenUMKM untuk pertanyaan, kerja sama, atau dukungan UMKM Anda.",
};

const channels = [
  {
    icon: "ri-mail-line",
    accent: "bg-blue-100 text-blue-600",
    label: "Email",
    value: "halo@openumkm.id",
    desc: "Balasan dalam 1×24 jam pada hari kerja.",
    href: "mailto:halo@openumkm.id",
  },
  {
    icon: "ri-whatsapp-line",
    accent: "bg-emerald-100 text-emerald-600",
    label: "WhatsApp",
    value: "+62 812 3456 7890",
    desc: "Untuk pertanyaan cepat dan dukungan UMKM.",
    href: "https://wa.me/6281234567890",
  },
  {
    icon: "ri-map-pin-2-line",
    accent: "bg-blue-100 text-blue-600",
    label: "Alamat",
    value: "Jakarta Selatan, Indonesia",
    desc: "Hub komunitas kunjungan dengan janji temu.",
    href: "#",
  },
  {
    icon: "ri-time-line",
    accent: "bg-emerald-100 text-emerald-600",
    label: "Jam Operasional",
    value: "Sen – Jum, 09.00 – 17.00 WIB",
    desc: "Sabtu & Minggu: dukungan via email saja.",
    href: "#",
  },
];

const socials = [
  { icon: "ri-instagram-line", label: "Instagram", href: "#" },
  { icon: "ri-twitter-x-line", label: "X / Twitter", href: "#" },
  { icon: "ri-linkedin-box-line", label: "LinkedIn", href: "#" },
  {
    icon: "ri-github-fill",
    label: "GitHub",
    href: "https://github.com/ianz56/OpenUMKM",
  },
];

const topics = [
  { value: "umum", label: "Pertanyaan Umum" },
  { value: "kemitraan", label: "Kemitraan & Kerja Sama" },
  { value: "umkm", label: "Pendaftaran UMKM" },
  { value: "dukungan", label: "Dukungan Teknis" },
  { value: "media", label: "Pers & Media" },
  { value: "lainnya", label: "Lainnya" },
];

export default function ContactPage() {
  return (
    <div className="bg-white overflow-hidden" data-testid="contact-page">
      <Navbar />

      <main className="mx-auto max-w-[1220px] flex-grow space-y-8 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        {/* Hero */}
        <section
          data-aos="fade-up"
          className="relative isolate overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 sm:p-10"
        >
          <div className="max-w-3xl">
            <span className="inline-block rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-700">
              Kontak
            </span>
            <h1 className="mt-4 text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Mari Berbincang dengan{" "}
              <span className="text-blue-600">Tim Kami</span>
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              Ada pertanyaan, ide kerja sama, atau ingin mendaftarkan UMKM Anda?
              Kami siap mendengarkan dan membantu Anda menemukan solusi yang
              tepat.
            </p>
          </div>
        </section>

        {/* Channels */}
        <section
          data-aos="fade-up"
          className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"
        >
          <div className="mb-6 max-w-3xl">
            <h2 className="text-3xl font-black tracking-tight text-slate-900">
              Cara Menghubungi Kami
            </h2>
            <p className="mt-3 text-slate-600">
              Pilih kanal yang paling nyaman bagi Anda.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {channels.map((c, idx) => (
              <a
                key={c.label}
                href={c.href}
                data-aos="fade-up"
                data-aos-delay={150 + idx * 100}
                data-testid={`contact-channel-${c.label.toLowerCase()}`}
                className="group rounded-xl border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div
                  className={`inline-flex h-11 w-11 items-center justify-center rounded-lg ${c.accent}`}
                >
                  <i className={`${c.icon} text-2xl`}></i>
                </div>
                <p className="mt-4 text-xs font-bold uppercase tracking-wide text-slate-500">
                  {c.label}
                </p>
                <p className="mt-1 text-base font-bold text-slate-900">
                  {c.value}
                </p>
                <p className="mt-1 text-sm text-slate-600">{c.desc}</p>
              </a>
            ))}
          </div>
        </section>

        {/* Form + Sidebar */}
        <section className="grid gap-4 lg:grid-cols-[1.4fr_1fr]">
          {/* Form */}
          <div data-aos="fade-right" data-testid="contact-form-card">
            <ContactForm />
          </div>

          {/* Sidebar */}
          <aside className="space-y-4" data-aos="fade-left">
            <div
              className="rounded-2xl border border-slate-200 bg-white p-6"
              data-testid="contact-quick-help"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                <i className="ri-flashlight-line text-xl"></i>
              </div>
              <h3 className="mt-3 text-lg font-bold text-slate-900">
                Butuh Bantuan Cepat?
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                Untuk dukungan UMKM yang sudah aktif, gunakan WhatsApp untuk
                respon yang lebih cepat.
              </p>
              <a
                href="https://wa.me/6281234567890"
                data-testid="contact-quick-wa"
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow transition hover:bg-emerald-700"
              >
                <i className="ri-whatsapp-line text-lg"></i> Chat via WhatsApp
              </a>
            </div>

            <div
              className="rounded-2xl border border-slate-200 bg-white p-6"
              data-testid="contact-socials"
            >
              <h3 className="text-lg font-bold text-slate-900">Ikuti Kami</h3>
              <p className="mt-1 text-sm text-slate-600">
                Update terbaru dan tips UMKM di sosial media kami.
              </p>
              <ul className="mt-4 grid grid-cols-2 gap-2">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      data-testid={`contact-social-${s.label.toLowerCase().replace(/[^a-z]/g, "-")}`}
                      className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
                    >
                      <i className={`${s.icon} text-lg text-slate-600`}></i>
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="rounded-2xl border border-slate-200 bg-blue-600 p-6 text-white"
              data-testid="contact-cta-card"
            >
              <h3 className="text-lg font-black">Belum Daftar Toko?</h3>
              <p className="mt-1 text-sm text-blue-100">
                Daftarkan UMKM Anda untuk tampil di OpenUMKM dan jangkau
                pelanggan baru, gratis.
              </p>
              <a
                href="/services"
                data-testid="contact-cta-services"
                className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-blue-700 shadow transition hover:bg-blue-50"
              >
                Lihat Layanan
              </a>
            </div>
          </aside>
        </section>

        {/* Map placeholder */}
        <section
          data-aos="fade-up"
          className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"
          data-testid="contact-map"
        >
          <h2 className="text-2xl font-black tracking-tight text-slate-900">
            Lokasi Hub
          </h2>
          <div className="mt-5 overflow-hidden rounded-xl border border-slate-200">
            <iframe
              title="Lokasi OpenUMKM"
              src="https://www.openstreetmap.org/export/embed.html?bbox=106.7588%2C-6.2918%2C106.8588%2C-6.1918&layer=mapnik"
              className="h-72 w-full"
              loading="lazy"
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
