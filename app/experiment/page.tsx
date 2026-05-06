import { Suspense } from 'react';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import CompanyCard from '@/app/components/explorer/CompanyCard';
import FilterControls from '@/app/components/explorer/FilterControls';
import { ApiResponse, Company } from '../types/company';

async function getCompanies(): Promise<Company[]> {
  // Gunakan cache agar build tidak selalu fetch ke API eksternal
  const res = await fetch('https://fakerapi.it/api/v1/companies?_quantity=30', {
    next: { revalidate: 3600 },
  });
  
  if (!res.ok) throw new Error('Gagal mengambil data dari API');
  const data: ApiResponse = await res.json();
  return data.data;
}

export default async function ExplorerPage({
  searchParams,
}: {
  searchParams: { q?: string; country?: string; sort?: string };
}) {
  const allCompanies = await getCompanies();

  // Logic Filtering di sisi Server
  const query = searchParams.q?.toLowerCase() || '';
  const countryFilter = searchParams.country || 'all';
  const sortFilter = searchParams.sort || 'none';

  let filtered = allCompanies.filter((c) => {
    const matchesQuery = !query || 
      c.name.toLowerCase().includes(query) || 
      c.country.toLowerCase().includes(query) ||
      c.contact.firstname.toLowerCase().includes(query);
    
    const matchesCountry = countryFilter === 'all' || c.country === countryFilter;
    
    return matchesQuery && matchesCountry;
  });

  if (sortFilter === 'name') {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  }

  const countriesList = ['all', ...Array.from(new Set(allCompanies.map((c) => c.country)))].sort();

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main className="mx-auto max-w-[1220px] space-y-8 px-4 py-8 lg:px-8">
        {/* Hero Section */}
        <section className="rounded-2xl border border-slate-200 bg-white p-8 sm:p-12 shadow-sm">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
              Daftar <span className="text-blue-600">Mitra Terdaftar</span>
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Jelajahi daftar perusahaan mitra yang tergabung dalam ekosistem integrasi OpenUMKM.
            </p>
          </div>
        </section>

        {/* Filter Section - Dibungkus Suspense agar lolos Build Prerendering */}
        <Suspense fallback={<div className="h-32 w-full animate-pulse rounded-2xl bg-slate-200" />}>
          <FilterControls countries={countriesList} />
        </Suspense>

        {/* Content Section */}
        <section>
          {filtered.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((company) => (
                <CompanyCard key={company.id} company={company} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="rounded-full bg-slate-100 p-6 text-slate-400">
                <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <p className="mt-4 text-xl font-bold text-slate-700">Data tidak ditemukan</p>
              <p className="text-slate-500">Coba gunakan kata kunci atau filter negara lain.</p>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}