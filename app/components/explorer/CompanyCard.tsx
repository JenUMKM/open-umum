'use client'

import { Company } from "@/app/types/company";

export default function CompanyCard({ company }: { company: Company }) {
    const fullName = `${company.contact.firstname} ${company.contact.lastname}`;
    
    return (
        <article className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-xl">
            <div className="flex items-start gap-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-full border bg-slate-100">
                    <img 
                        src={company.image} 
                        alt={company.name}
                        className="h-full w-full object-cover"
                        onError={(e) => {
                            (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(company.name)}&background=random`;
                        }}
                    />
                </div>
                <div className="flex-grow">
                    <h3 className="line-clamp-1 text-base font-black text-slate-900 group-hover:text-blue-600">
                        {company.name}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500">{company.country}</p>
                </div>
            </div>

            <div className="mt-6 space-y-4">
                <div className="rounded-xl border border-slate-100 bg-slate-50/50 p-3">
                    <p className="text-[10px] font-bold uppercase text-slate-400">Kontak Person</p>
                    <div className="mt-2 flex items-center gap-3">
                        <p className="text-xs font-bold text-slate-900">{fullName}</p>
                    </div>
                </div>
            </div>

            <div className="mt-6">
                <a href={company.website} target="_blank" className="flex w-full justify-center rounded-xl bg-slate-900 px-4 py-2.5 text-xs font-bold text-white hover:bg-blue-600 transition">
                    Lihat Profil
                </a>
            </div>
        </article>
    );
}