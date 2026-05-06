import React from 'react';

const Footer = () => {
  const footerLinks = [
    { name: 'Privasi', href: '#' },
    { name: 'Ketentuan', href: '#' },
    { name: 'Bantuan', href: '#' },
  ];

  return (
    <footer className="border-t border-slate-200 bg-white py-12">
      <div className="mx-auto max-w-[1220px] px-4 sm:px-6 lg:px-8">
        {/* Call to Action Box */}
        <div className="rounded-2xl bg-blue-600 p-8 text-white shadow-lg">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-2xl font-black tracking-tight sm:text-3xl">
                Siap mengembangkan usahamu?
              </h2>
              <p className="mt-2 text-blue-100">
                Bergabung sekarang dan jadilah bagian dari komunitas UMKM yang
                terus bertumbuh.
              </p>
            </div>
            <div className="grid gap-3 sm:flex sm:flex-wrap">
              <a
                href="/contact"
                className="rounded-xl bg-white px-6 py-3 text-center text-sm font-semibold text-blue-700 shadow-sm transition hover:bg-blue-50"
              >
                Gabung Sekarang
              </a>
              <a
                href="/services"
                className="rounded-xl border border-white/60 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Pelajari Lebih Lanjut
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-100 pt-8 sm:flex-row">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} OpenUMKM
          </p>

          <nav aria-label="Navigasi Bawah">
            <ul className="flex gap-6 text-sm font-medium text-slate-500">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="transition hover:text-blue-600"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;