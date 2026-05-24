"use client";

import { useActionState } from "react";
import { addProduct } from "./actions";
import { SubmitButton } from "@/app/components/SubmitButton";
import { HiOutlineCube } from "react-icons/hi2";

export default function AddProductForm() {
  const [state, formAction] = useActionState(addProduct, null);

  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-4 text-slate-900">
        <HiOutlineCube className="text-xl" />
        <h3 className="text-sm font-black uppercase tracking-wider">Input Produk Baru</h3>
      </div>
      
      <form action={formAction} className="grid gap-4 sm:grid-cols-3 items-start">
        
        <div className="space-y-1">
          <input 
            name="name"
            type="text" 
            placeholder="Nama Produk" 
            className={`w-full rounded-xl border px-4 py-2.5 text-slate-900 font-medium outline-none transition focus:ring-2 ${
              state?.errors?.name 
                ? "border-red-300 focus:border-red-500 focus:ring-red-100" 
                : "border-slate-200 focus:border-blue-500 focus:ring-blue-100"
            }`}
          />
          {state?.errors?.name && (
            <p className="text-[11px] font-medium text-red-500 pl-1">
              {state.errors.name[0]}
            </p>
          )}
        </div>

        <div className="space-y-1">
          <input 
            name="price"
            type="text"
            placeholder="Harga (Rp)" 
            className={`w-full rounded-xl border px-4 py-2.5 text-slate-900 font-medium outline-none transition focus:ring-2 ${
              state?.errors?.price 
                ? "border-red-300 focus:border-red-500 focus:ring-red-100" 
                : "border-slate-200 focus:border-blue-500 focus:ring-blue-100"
            }`}
          />
          {state?.errors?.price && (
            <p className="text-[11px] font-medium text-red-500 pl-1">
              {state.errors.price[0]}
            </p>
          )}
        </div>

        <div className="space-y-1">
          <div className="flex gap-2 items-start">
            <div className="w-full">
              <input 
                name="stock"
                type="text" 
                placeholder="Stok" 
                className={`w-full rounded-xl border px-4 py-2.5 text-slate-900 font-medium outline-none transition focus:ring-2 ${
                  state?.errors?.stock 
                    ? "border-red-300 focus:border-red-500 focus:ring-red-100" 
                    : "border-slate-200 focus:border-blue-500 focus:ring-blue-100"
                }`}
              />
            </div>
            <SubmitButton label="Simpan" />
          </div>
          {state?.errors?.stock && (
            <p className="text-[11px] font-medium text-red-500 pl-1/2">
              {state.errors.stock[0]}
            </p>
          )}
        </div>

      </form>
      
      {state?.message && (
        <p className={`mt-3 text-xs font-bold ${state.success ? "text-emerald-600" : "text-red-600"}`}>
          {state.message}
        </p>
      )}
    </div>
  );
}