import { Suspense } from 'react';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import FilterControls from '@/app/components/explorer/FilterControls';
import MitraGrid from '../components/MitraGrid';
import MitraSkeleton from '../components/MitraSkeleton';

export default async function ExplorerPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const resolvedParams = await searchParams;
  const searchQuery = resolvedParams.q || '';

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
              Jelajahi daftar perusahaan mitra yang tergabung dalam ekosistem integrasi OpenUMKM Anda.
            </p>
          </div>
        </section>

        {/* Filter Bar */}
        <Suspense fallback={<div className="h-20 w-full animate-pulse rounded-2xl bg-slate-200" />}>
          <FilterControls countries={[]} /> 
        </Suspense>

      
        <section>
          <Suspense key={searchQuery} fallback={<MitraSkeleton />}>
            <MitraGrid searchQuery={searchQuery} />
          </Suspense>
        </section>
      </main>

      <Footer />
    </div>
  );
}