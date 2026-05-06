"use client";

import React, { useActionState } from "react";
import Link from "next/link";
import { signup } from "../auth/actions";
import { SubmitButton } from "../components/SubmitButton";

export default function RegisterPage() {
  const [state, formAction] = useActionState(signup, null);

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-12">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <header className="text-center sm:text-left">
          <h2 className="text-2xl font-black text-slate-900 sm:text-3xl">Daftar Akun UMKM</h2>
          <p className="mt-2 text-sm text-slate-600">
            Bergabunglah dengan ribuan mitra kami lainnya.
          </p>
        </header>

        {/* Notifikasi Status */}
        {state?.message && (
          <div className={`mt-6 rounded-xl border p-4 text-sm font-medium ${
            state.success 
              ? "border-emerald-100 bg-emerald-50 text-emerald-700" 
              : "border-red-100 bg-red-50 text-red-700"
          }`}>
            {state.message}
          </div>
        )}

        <form action={formAction} className="mt-8 grid gap-4">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-900">Email Bisnis</label>
            <input
              name="email"
              type="email"
              required
              /* Menambahkan text-slate-900 untuk warna teks ketikan hitam */
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 placeholder-slate-400 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
              placeholder="nama@bisnisanda.com"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-900">Password</label>
            <input
              name="password"
              type="password"
              required
              /* Menambahkan text-slate-900 untuk warna teks ketikan hitam */
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 placeholder-slate-400 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
              placeholder="Minimal 6 karakter"
            />
          </div>

          <div className="flex items-center gap-2 py-2">
            <input 
              type="checkbox" 
              id="terms" 
              required 
              className="h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500" 
            />
            <label htmlFor="terms" className="text-xs text-slate-500">
              Saya menyetujui syarat dan ketentuan yang berlaku.
            </label>
          </div>

          <SubmitButton label="Register" />
        
        </form>

        <footer className="mt-8 border-t border-slate-100 pt-6 text-center">
          <p className="text-sm text-slate-600">
            Sudah memiliki akun?{" "}
            <Link href="/login" className="font-bold text-blue-600 hover:underline">
              Masuk ke Dashboard
            </Link>
          </p>
        </footer>
      </div>
    </div>
  );
}