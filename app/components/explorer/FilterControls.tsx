"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useTransition } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";

export default function FilterControls({ countries }: { countries: string[] }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  // Ambil nilai pencarian saat ini dari URL untuk dijadikan nilai default input
  const currentQuery = searchParams.get("q") || "";

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams.toString());
    
    if (term) {
      params.set("q", term);
    } else {
      params.delete("q"); // Hapus param jika kolom input kosong
    }

    startTransition(() => {
      router.replace(`${pathname}?${params.toString()}`);
    });
  }

  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:flex-row sm:items-center">
      <div className="relative flex-1">
        <HiMagnifyingGlass className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          placeholder="Cari nama mitra, nomor telepon, atau lokasi..."
          defaultValue={currentQuery}
          onChange={(e) => handleSearch(e.target.value)}
          className="w-full rounded-xl border border-slate-200 py-3 pl-12 pr-4 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        />
        {isPending && (
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-medium text-slate-400 animate-pulse">
            Mencari...
          </span>
        )}
      </div>

    </div>
  );
}