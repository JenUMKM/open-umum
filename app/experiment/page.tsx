'use client';

import Footer from '@/app/components/Footer';
import Navbar from '@/app/components/Navbar';
import { useEffect, useState, useCallback } from 'react';

interface Address {
    id: number;
    street: string;
    streetName: string;
    buildingNumber: string;
    city: string;
    zipcode: string;
    country: string;
    country_code: string;
    latitude: number;
    longitude: number;
}

interface Contact {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    birthday: string;
    gender: string;
    website: string;
    image: string;
}

interface Company {
    id: number;
    name: string;
    email: string;
    vat: string;
    phone: string;
    country: string;
    addresses: Address[];
    website: string;
    image: string;
    contact: Contact;
}

interface ApiResponse {
    status: string;
    code: number;
    total: number;
    data: Company[];
}

function formatName(firstname: string, lastname: string) {
    return `${firstname} ${lastname}`;
}

function CompanyAvatar({ name, image }: { name: string; image: string }) {
    return (
        <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-white bg-slate-100 shadow-sm ring-1 ring-slate-200">
            <img
                src={image}
                alt={name}
                onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random&color=fff`;
                }}
                className="h-full w-full object-cover"
            />
        </div>
    );
}

function SkeletonCard() {
    return (
        <article className="animate-pulse rounded-xl border border-slate-200 bg-slate-50 p-5">
            <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-slate-200" />
                <div className="flex-grow space-y-2">
                    <div className="h-4 w-3/4 rounded bg-slate-200" />
                    <div className="h-3 w-1/2 rounded bg-slate-200" />
                </div>
            </div>
            <div className="mt-6 space-y-3">
                <div className="h-3 w-full rounded bg-slate-200" />
                <div className="h-3 w-5/6 rounded bg-slate-200" />
            </div>
            <div className="mt-6 flex gap-2">
                <div className="h-8 flex-grow rounded-lg bg-slate-200" />
                <div className="h-8 w-8 rounded-lg bg-slate-200" />
            </div>
        </article>
    );
}

function StatusBadge({ status }: { status: 'idle' | 'loading' | 'success' | 'error' }) {
    const map = {
        idle: { bg: 'bg-slate-100', text: 'text-slate-500', icon: 'ri-time-line', label: 'Idle' },
        loading: { bg: 'bg-amber-100', text: 'text-amber-600', icon: 'ri-loader-4-line', label: 'Loading…' },
        success: { bg: 'bg-emerald-100', text: 'text-emerald-600', icon: 'ri-check-line', label: 'Done' },
        error: { bg: 'bg-red-100', text: 'text-red-600', icon: 'ri-error-warning-line', label: 'Error' },
    };
    const s = map[status];
    return (
        <span
            data-testid="fetch-status-badge"
            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold ${s.bg} ${s.text}`}
        >
            <i className={`${s.icon} ${status === 'loading' ? 'animate-spin' : ''}`} />
            {s.label}
        </span>
    );
}

function CompanyCard({ company }: { company: Company }) {
    return (
        <article
            data-testid={`company-card-${company.id}`}
            className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-xl"
        >
            <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                    <CompanyAvatar name={company.name} image={company.image} />
                    <div>
                        <h3 className="line-clamp-1 text-base font-black text-slate-900 group-hover:text-blue-600 transition-colors">
                            {company.name}
                        </h3>
                        <p className="flex items-center gap-1 text-xs font-semibold text-slate-500">
                            <i className="ri-map-pin-line text-blue-500"></i>
                            {company.country}
                        </p>
                    </div>
                </div>
                <div className="rounded-full bg-slate-50 p-2 text-slate-400 transition group-hover:bg-blue-50 group-hover:text-blue-600">
                    <i className="ri-external-link-line"></i>
                </div>
            </div>

            <div className="mt-6 space-y-4">
                <div className="rounded-xl border border-slate-100 bg-slate-50/50 p-3">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Kontak Person</p>
                    <div className="mt-2 flex items-center gap-3">
                        <img
                            src={company.contact.image}
                            alt=""
                            className="h-8 w-8 rounded-lg bg-white border border-slate-200"
                            onError={(e) => (e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(company.contact.firstname)}&background=random`)}
                        />
                        <div>
                            <p className="text-xs font-bold text-slate-900">{formatName(company.contact.firstname, company.contact.lastname)}</p>
                            <p className="text-[10px] text-slate-500">{company.contact.email}</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1 rounded-lg bg-blue-50 px-2 py-1 text-[10px] font-bold text-blue-700">
                        <i className="ri-mail-send-line"></i>
                        {company.email.split('@')[1]}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-lg bg-emerald-50 px-2 py-1 text-[10px] font-bold text-emerald-700">
                        <i className="ri-phone-line"></i>
                        Active
                    </span>
                </div>
            </div>

            <div className="mt-6">
                <a
                    href={company.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-blue-600 active:scale-95"
                >
                    Lihat Profil Perusahaan
                </a>
            </div>
        </article>
    );
}

export default function ExplorerPage() {
    const [companies, setCompanies] = useState<Company[]>([]);
    const [filtered, setFiltered] = useState<Company[]>([]);
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [error, setError] = useState<string | null>(null);
    const [search, setSearch] = useState('');
    const [country, setCountry] = useState('all');
    const [sortBy, setSortBy] = useState('none');
    const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
    const [fetchTime, setFetchTime] = useState<number | null>(null);

    const fetchCompanies = useCallback(async () => {
        setStatus('loading');
        setError(null);
        const start = performance.now();

        try {
            const res = await fetch('https://fakerapi.it/api/v1/companies?_quantity=30');
            if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`);
            const data: ApiResponse = await res.json();
            const elapsed = performance.now() - start;

            setCompanies(data.data);
            setFiltered(data.data);
            setFetchTime(Math.round(elapsed));
            setStatus('success');
        } catch (err) {
            const elapsed = performance.now() - start;
            setFetchTime(Math.round(elapsed));
            setError(err instanceof Error ? err.message : 'Terjadi kesalahan');
            setStatus('error');
        }
    }, []);

    useEffect(() => {
        fetchCompanies();
    }, [fetchCompanies]);

    useEffect(() => {
        let result = [...companies];
        if (country !== 'all') {
            result = result.filter((c) => c.country === country);
        }
        if (search.trim()) {
            const q = search.toLowerCase();
            result = result.filter(
                (c) =>
                    c.name.toLowerCase().includes(q) ||
                    c.email.toLowerCase().includes(q) ||
                    c.country.toLowerCase().includes(q) ||
                    c.contact.firstname.toLowerCase().includes(q) ||
                    c.contact.lastname.toLowerCase().includes(q),
            );
        }

        if (sortBy === 'name') {
            result.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortBy === 'country') {
            result.sort((a, b) => a.country.localeCompare(b.country));
        }

        setFiltered(result);
    }, [search, country, sortBy, companies]);

    const stats = {
        total: filtered.length,
        countries: new Set(filtered.map(c => c.country)).size,
        activePartners: filtered.length, // Sample stat
        avgResponse: "24h" // Sample stat
    };

    const countries = ['all', ...Array.from(new Set(companies.map((c) => c.country)))].sort();

    return (
        <div className="bg-white overflow-hidden" data-testid="explorer-page">
            <Navbar />

            <main className="mx-auto max-w-[1220px] flex-grow space-y-8 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
                {/* Hero */}
                <section className="relative isolate overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 sm:p-10">
                    <div className="max-w-3xl">
                        <h1 className="mt-4 text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                            Daftar <span className="text-blue-600">Mitra Perusahaan</span> Terdaftar
                        </h1>
                        <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
                            Halaman ini menampilkan daftar perusahaan yang telah mendaftar dalam ekosistem OpenUMKM.
                        </p>
                    </div>
                </section>

                {/* Stats Summary */}
                <section className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-blue-200">
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Total Mitra</p>
                        <p className="mt-1 text-2xl font-black text-slate-900">{stats.total}</p>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-blue-200">
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Asal Negara</p>
                        <p className="mt-1 text-2xl font-black text-slate-900">{stats.countries}</p>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-blue-200">
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Status Aktif</p>
                        <div className="mt-1 flex items-center gap-2">
                            <p className="text-2xl font-black text-slate-900">{stats.activePartners}</p>
                            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        </div>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-blue-200">
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Rata-rata Respon</p>
                        <p className="mt-1 text-2xl font-black text-slate-900">{stats.avgResponse}</p>
                    </div>
                </section>



                {/* Filters & Sorting */}
                <section className="flex flex-col gap-4 bg-white/50 backdrop-blur-sm p-4 rounded-2xl border border-slate-200 shadow-sm">
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                        <div className="relative flex-grow max-w-md">
                            <i className="ri-search-line absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"></i>
                            <input
                                type="text"
                                placeholder="Cari..."
                                className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm text-slate-900 transition placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/10"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>

                        <div className="flex flex-wrap items-center gap-3">
                            <div className="flex items-center gap-2">
                                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Urutkan:</span>
                                <select
                                    className="rounded-xl border border-slate-200 bg-white py-2 pl-3 pr-8 text-xs font-medium text-slate-700 focus:border-blue-500 focus:outline-none appearance-none cursor-pointer"
                                    style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'%2364748b\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\'%3E%3C/path%3E%3C/svg%3E")', backgroundPosition: 'right 0.5rem center', backgroundSize: '0.8rem', backgroundRepeat: 'no-repeat' }}
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                >
                                    <option value="none">Default</option>
                                    <option value="name">Nama (A-Z)</option>
                                    <option value="country">Negara</option>
                                </select>
                            </div>

                            <div className="flex items-center gap-2 border-l border-slate-200 pl-3">
                                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Tampilan:</span>
                                <div className="flex rounded-lg bg-slate-100 p-1">
                                    <button
                                        type="button"
                                        onClick={() => setViewMode('grid')}
                                        className={`rounded-md p-1.5 transition ${viewMode === 'grid' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
                                    >
                                        <i className="ri-grid-fill text-lg"></i>
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setViewMode('table')}
                                        className={`rounded-md p-1.5 transition ${viewMode === 'table' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
                                    >
                                        <i className="ri-list-check text-lg"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Filter Negara:</span>
                        {countries.map((c) => (
                            <button
                                key={c}
                                onClick={() => setCountry(c)}
                                className={`rounded-full px-3 py-1 text-xs font-medium transition ${country === c ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                            >
                                {c === 'all' ? 'Semua Negara' : c}
                            </button>
                        ))}
                    </div>
                </section>

                {/* Product Grid */}
                <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
                    <div className="mb-6">
                        <h2 className="text-2xl font-black tracking-tight text-slate-900">
                            Daftar Mitra
                        </h2>
                        <p className="mt-1 text-sm text-slate-500">
                            Berikut adalah daftar perusahaan yang telah bergabung.
                        </p>
                    </div>

                    {status === 'loading' && (
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" data-testid="skeleton-grid">
                            {Array.from({ length: 6 }).map((_, i) => (
                                <SkeletonCard key={`skeleton-${i}`} />
                            ))}
                        </div>
                    )}

                    {status === 'error' && (
                        <div
                            data-testid="error-panel"
                            className="flex flex-col items-center gap-4 rounded-xl border border-red-200 bg-red-50 p-8 text-center"
                        >
                            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-100 text-red-500">
                                <i className="ri-error-warning-line text-3xl" />
                            </div>
                            <div>
                                <p className="font-bold text-red-700">Gagal fetch data</p>
                                <p className="mt-1 text-sm text-red-500">{error}</p>
                            </div>
                            <button
                                type="button"
                                onClick={fetchCompanies}
                                className="rounded-xl bg-red-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700"
                            >
                                Coba Lagi
                            </button>
                        </div>
                    )}

                    {status === 'success' && filtered.length > 0 && (
                        <>
                            {viewMode === 'grid' ? (
                                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" data-testid="company-grid">
                                    {filtered.map((company) => (
                                        <CompanyCard key={company.id} company={company} />
                                    ))}
                                </div>
                            ) : (
                                <div className="overflow-x-auto rounded-xl border border-slate-200">
                                    <table className="w-full text-left text-sm">
                                        <thead className="bg-slate-50 text-xs font-bold uppercase tracking-wider text-slate-500">
                                            <tr>
                                                <th className="px-4 py-3">Perusahaan</th>
                                                <th className="px-4 py-3">Negara</th>
                                                <th className="px-4 py-3">Email</th>
                                                <th className="px-4 py-3">Kontak Person</th>
                                                <th className="px-4 py-3 text-right">Aksi</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-200 bg-white">
                                            {filtered.map((company) => (
                                                <tr key={company.id} className="hover:bg-slate-50 transition">
                                                    <td className="px-4 py-4">
                                                        <div className="flex items-center gap-3">
                                                            <CompanyAvatar name={company.name} image={company.image} />
                                                            <span className="font-bold text-slate-900">{company.name}</span>
                                                        </div>
                                                    </td>
                                                    <td className="px-4 py-4">
                                                        <span className="inline-flex rounded-full bg-blue-50 px-2 py-1 text-[10px] font-bold uppercase text-blue-600">
                                                            {company.country}
                                                        </span>
                                                    </td>
                                                    <td className="px-4 py-4 text-slate-600">{company.email}</td>
                                                    <td className="px-4 py-4">
                                                        <div className="flex items-center gap-2">
                                                            <span className="font-medium text-slate-900">{formatName(company.contact.firstname, company.contact.lastname)}</span>
                                                        </div>
                                                    </td>
                                                    <td className="px-4 py-4 text-right">
                                                        <a href={company.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-bold text-xs">
                                                            Website
                                                        </a>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </>
                    )}

                    {status === 'success' && filtered.length === 0 && (
                        <div className="flex flex-col items-center gap-3 py-12 text-center" data-testid="empty-state">
                            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-slate-400">
                                <i className="ri-search-eye-line text-3xl" />
                            </div>
                            <p className="font-bold text-slate-700">Tidak ada yang cocok</p>
                            <p className="text-sm text-slate-500">Coba ubah keyword atau negaranya.</p>
                            <button
                                type="button"
                                onClick={() => {
                                    setSearch('');
                                    setCountry('all');
                                }}
                                className="mt-2 rounded-xl border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                            >
                                Reset Filter
                            </button>
                        </div>
                    )}
                </section>


            </main>

            <Footer />
        </div>
    );
}
