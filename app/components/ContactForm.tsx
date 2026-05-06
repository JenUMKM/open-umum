
const ContactForm = () => {
  const categories = [
    { value: "makanan", label: "Makanan & Minuman" },
    { value: "fashion", label: "Fashion & Pakaian" },
    { value: "kerajinan", label: "Kerajinan & Seni" },
    { value: "elektronik", label: "Elektronik & Gadget" },
    { value: "jasa", label: "Jasa & Digital" },
    { value: "lainnya", label: "Lainnya" },
  ];

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
      <div className="max-w-2xl">
        <h2 className="text-2xl font-black tracking-tight text-slate-900">Tertarik Bergabung?</h2>
        <p className="mt-2 text-slate-600">Tinggalkan data Anda dan kami akan menghubungi untuk membantu proses pendaftaran Anda.</p>
      </div>

      <form id="kontak-form" className="mt-6 max-w-2xl space-y-5 rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
        {/* Tipe User Selection */}
        <fieldset className="rounded-xl border border-slate-200 bg-white p-4">
          <legend className="px-1 text-sm font-semibold text-slate-900">Anda Adalah</legend>
          <div className="mt-3 flex flex-wrap gap-3">
            {[
              { id: 'pelanggan', label: 'Pelanggan' },
              { id: 'pemilik', label: 'Pemilik UMKM' }
            ].map((role) => (
              <label key={role.id} className="flex cursor-pointer items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 transition hover:bg-slate-100">
                <input type="radio" name="tipe_user" value={role.id} className="h-4 w-4 border-slate-300 text-blue-600 focus:ring-blue-500" required />
                <span className="text-sm text-slate-900">{role.label}</span>
              </label>
            ))}
          </div>
        </fieldset>

        {/* Input Nama & Email */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="nama" className="block text-sm font-semibold text-slate-900">Nama Lengkap</label>
            <input type="text" id="nama" name="nama" className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 placeholder-slate-500 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100" placeholder="Nama Anda" required />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-semibold text-slate-900">Email</label>
            <input type="email" id="email" name="email" className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 placeholder-slate-500 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100" placeholder="email@contoh.com" required />
          </div>
        </div>

        {/* Input WA & Kategori */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="nomor_wa" className="block text-sm font-semibold text-slate-900">Nomor WhatsApp</label>
            <input type="tel" id="nomor_wa" name="nomor_wa" className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 placeholder-slate-500 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100" placeholder="0812 3456 7890" required />
          </div>
          <div className="space-y-2">
            <label htmlFor="kategori" className="block text-sm font-semibold text-slate-900">Kategori Usaha / Minat</label>
            <select id="kategori" name="kategori" className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100" required defaultValue="">
              <option value="" disabled>-- Pilih --</option>
              {categories.map((cat) => (
                <option key={cat.value} value={cat.value}>{cat.label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Textarea Pesan */}
        <div className="space-y-2">
          <label htmlFor="pesan" className="block text-sm font-semibold text-slate-900">Pesan (opsional)</label>
          <textarea id="pesan" name="pesan" rows={4} className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 placeholder-slate-500 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100" placeholder="Jika pemilik UMKM, ceritakan tentang usaha Anda. Jika pelanggan, ada pertanyaan khusus?"></textarea>
        </div>

        {/* Checkbox Syarat & Ketentuan (Ditambahkan Kembali) */}
        <div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-3">
          <input type="checkbox" id="syarat" name="syarat" className="mt-1 h-4 w-4 rounded border-slate-300 text-blue-600 transition focus:ring-blue-500" required />
          <label htmlFor="syarat" className="text-sm text-slate-600">
            Saya setuju dengan syarat dan ketentuan serta menerima informasi terkait platform.
          </label>
        </div>

        <button type="submit" className="w-full rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Daftar Sekarang
        </button>
      </form>
    </section>
  );
};

export default ContactForm;