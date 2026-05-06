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
      
      <form action={formAction} className="grid gap-4 sm:grid-cols-3">
        <div className="space-y-1">
          <input 
            name="name"
            type="text" 
            required
            placeholder="Nama Produk" 
            className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-slate-900 font-medium outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
          />
        </div>
        <div className="space-y-1">
          <input 
            name="price"
            type="number" 
            required
            placeholder="Harga (Rp)" 
            className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-slate-900 font-medium outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
          />
        </div>
        <div className="flex gap-2">
          <input 
            name="stock"
            type="number" 
            required
            placeholder="Stok" 
            className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-slate-900 font-medium outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
          />
          <SubmitButton label="Simpan" />
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