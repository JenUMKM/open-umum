"use client";

import React from "react";
import { HiOutlineBuildingOffice2, HiOutlineMapPin, HiOutlinePhone } from "react-icons/hi2";

interface MitraProps {
  company: {
    id: string;
    name: string;
    address: string;
    phone: string;
  };
}

export default function CompanyCard({ company }: MitraProps) {
  return (
    <div className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-200 flex flex-col justify-between min-h-[180px]">
      
      <div>
        <div className="flex items-start gap-4">
          <div className="rounded-xl bg-blue-50 p-3 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200">
            <HiOutlineBuildingOffice2 className="text-2xl" />
          </div>
          <div className="space-y-1">
            <h3 className="font-black text-lg text-slate-900 tracking-tight leading-snug group-hover:text-blue-600 transition-colors">
              {company.name}
            </h3>
            <span className="inline-flex items-center rounded-md bg-slate-100 px-2 py-0.5 text-xs font-bold text-slate-600 uppercase tracking-wider">
              Mitra Aktif
            </span>
          </div>
        </div>

        <div className="mt-6 space-y-2.5 border-t border-slate-100 pt-4">
          <div className="flex items-center gap-2.5 text-slate-600">
            <HiOutlinePhone className="text-base text-slate-400 flex-shrink-0" />
            <span className="text-sm font-semibold tracking-wide text-slate-700">
              {company.phone}
            </span>
          </div>

          <div className="flex items-start gap-2.5 text-slate-600">
            <HiOutlineMapPin className="text-base text-slate-400 mt-0.5 flex-shrink-0" />
            <p className="text-xs font-medium leading-relaxed text-slate-500 line-clamp-2">
              {company.address}
            </p>
          </div>
        </div>
      </div>


    </div>
  );
}