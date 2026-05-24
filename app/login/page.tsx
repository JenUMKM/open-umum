"use client";

import React, { useActionState } from "react";
import Link from "next/link";
import { login } from "../auth/actions";
import { SubmitButton } from "../components/SubmitButton";

export default function LoginPage() {
  const [state, formAction] = useActionState(login, null);

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-12">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <header className="text-center sm:text-left">
          <h2 className="text-2xl font-black text-slate-900 sm:text-3xl">Selamat Datang Kembali</h2>
          <p className="mt-2 text-sm text-slate-600">
            Masuk untuk mengelola profil UMKM Anda.
          </p>
        </header>
        
        {state?.message && (
          <div className={`mt-6 rounded-xl border p-3 text-sm font-medium ${
            state.success 
              ? "border-emerald-100 bg-emerald-50 text-emerald-700" 
              : "border-red-100 bg-red-50 text-red-700"
          }`}>
            {state.message}
          </div>
        )}

        <form action={formAction} className="mt-8 grid gap-4">
          
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">Email</label>
            <input
              name="email"
              type="text"
              className={`w-full rounded-xl border px-4 py-3 text-slate-900 placeholder-slate-400 outline-none transition focus:ring-2 ${
                state?.errors?.email 
                  ? "border-red-300 focus:border-red-500 focus:ring-red-100" 
                  : "border-slate-200 focus:border-blue-500 focus:ring-blue-100"
              }`}
              placeholder="nama@email.com"
            />
            {state?.errors?.email && (
              <p className="text-xs font-medium text-red-500 mt-1 pl-1">
                {state.errors.email[0]}
              </p>
            )}
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">Password</label>
            <input
              name="password"
              type="password"
              className={`w-full rounded-xl border px-4 py-3 text-slate-900 placeholder-slate-400 outline-none transition focus:ring-2 ${
                state?.errors?.password 
                  ? "border-red-300 focus:border-red-500 focus:ring-red-100" 
                  : "border-slate-200 focus:border-blue-500 focus:ring-blue-100"
              }`}
              placeholder="••••••••"
            />
            {state?.errors?.password && (
              <p className="text-xs font-medium text-red-500 mt-1 pl-1">
                {state.errors.password[0]}
              </p>
            )}
          </div>

          <div className="pt-2 gap-3 flex flex-col">
            <SubmitButton label="Masuk Sekarang" />
          </div>
        </form>

        <footer className="mt-8 border-t border-slate-100 pt-6 text-center">
          <p className="text-sm text-slate-600">
            Belum punya akun?{" "}
            <Link href="/register" className="font-bold text-blue-600 hover:underline">
              Daftar Gratis
            </Link>
          </p>
        </footer>
      </div>
    </div>
  );
}