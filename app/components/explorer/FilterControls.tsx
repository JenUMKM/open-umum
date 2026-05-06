"use client";

import { useRouter, useSearchParams } from 'next/navigation';
import { useTransition } from 'react';

export default function FilterControls({ countries }: { countries: string[] }) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [isPending, startTransition] = useTransition();

    function handleFilter(key: string, value: string) {
        const params = new URLSearchParams(searchParams.toString());
        if (value && value !== 'all') {
            params.set(key, value);
        } else {
            params.delete(key);
        }

        startTransition(() => {
            router.push(`?${params.toString()}`, { scroll: false });
        });
    }

    return (
        <section className={`space-y-4 p-4 rounded-2xl border border-slate-200 bg-white shadow-sm ${isPending ? 'opacity-50' : ''}`}>
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div className="relative flex-grow max-w-md">
                    <input
                        type="text"
                        placeholder="Cari mitra..."
                        className="w-full rounded-xl border border-slate-200 py-2.5 pl-4 pr-4 text-sm focus:border-blue-500 outline-none"
                        defaultValue={searchParams.get('q') || ''}
                        onChange={(e) => handleFilter('q', e.target.value)}
                    />
                </div>
                
                <select 
                    className="rounded-xl border border-slate-200 p-2.5 text-sm outline-none"
                    onChange={(e) => handleFilter('sort', e.target.value)}
                    defaultValue={searchParams.get('sort') || 'none'}
                >
                    <option value="none">Default</option>
                    <option value="name">Nama (A-Z)</option>
                </select>
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
                <span className="text-[10px] font-bold uppercase text-slate-400">Negara:</span>
                {countries.map((c) => (
                    <button
                        key={c}
                        onClick={() => handleFilter('country', c)}
                        className={`rounded-full px-3 py-1 text-xs font-medium transition ${
                            (searchParams.get('country') || 'all') === c 
                            ? 'bg-blue-600 text-white' 
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                    >
                        {c === 'all' ? 'Semua' : c}
                    </button>
                ))}
            </div>
        </section>
    );
}