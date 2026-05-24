import React from "react";
import { createClient } from "@/app/utils/supabase/server";
import CompanyCard from "./explorer/CompanyCard";

async function getFilteredMitras(searchQuery: string) {
  const supabase = await createClient();

  let query = supabase.from("mitras").select("*");

  if (searchQuery) {
    query = query.ilike("name", `%${searchQuery}%`);
  }

  const { data, error } = await query.order("created_at", { ascending: false });

  if (error) {
    console.error("Gagal fetch data mitra:", error.message);
    return [];
  }

  return data || [];
}

export default async function MitraGrid({ searchQuery }: { searchQuery: string }) {
  const mitras = await getFilteredMitras(searchQuery);

  if (mitras.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="rounded-full bg-slate-100 p-6 text-slate-400">
          <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <p className="mt-4 text-xl font-bold text-slate-700">Mitra tidak ditemukan</p>
        <p className="text-slate-500">Tidak ada nama mitra yang cocok dengan "{searchQuery}".</p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {mitras.map((mitra) => (
        <CompanyCard key={mitra.id} company={mitra} />
      ))}
    </div>
  );
}