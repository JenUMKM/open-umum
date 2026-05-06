import React from 'react';
import Link from 'next/link';
import { logout } from '@/app/auth/actions';
// Import icon jika Anda ingin tampilan lebih konsisten dengan dashboard
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { createClient } from '../utils/supabase/server';

const Navbar = async () => {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();


  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex items-center gap-3 px-4 py-3 sm:gap-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-xl font-black tracking-tight text-slate-900 sm:text-2xl">
          OpenUMKM
        </Link>

        <nav aria-label="Menu utama" className="hidden flex-1 justify-center lg:flex">
          <ul className="flex items-center gap-10 text-sm font-semibold text-slate-700">
            <li><Link href="/" className="transition hover:text-blue-600">Beranda</Link></li>
            {/* Tampilkan link Dashboard di menu utama jika login */}
            {user && (
              <li>
                <Link href="/dashboard" className="flex items-center gap-1 text-blue-600 transition hover:text-blue-700 font-bold">
                   Dashboard
                </Link>
              </li>
            )}
            <li><Link href="/services" className="transition hover:text-blue-600">Layanan</Link></li>
            <li><Link href="/about-us" className="transition hover:text-blue-600">Tentang Kami</Link></li>
            <li><Link href="/experiment" className="transition hover:text-blue-600">Daftar Mitra</Link></li>
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-3">
          {!user ? (
            <>
              <Link
                href="/login"
                className="hidden text-sm font-semibold text-slate-700 transition hover:text-blue-600 sm:inline-block"
              >
                Masuk
              </Link>
              <Link
                href="/register"
                className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow transition hover:bg-blue-700"
              >
                Gabung Sekarang
              </Link>
            </>
          ) : (
            <div className="flex items-center gap-4">
              {/* Tombol Dashboard Cepat (Mobile/Desktop) */}
              <Link 
                href="/dashboard" 
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition sm:hidden"
              >
                <HiOutlineSquares2X2 className="text-xl" />
              </Link>

              <div className="hidden flex-col items-end sm:flex border-r border-slate-200 pr-4">
                <span className="text-xs font-bold text-slate-900">
                  {user.email?.split('@')[0]}
                </span>
                <span className="text-[10px] leading-none text-emerald-600 font-medium">Online</span>
              </div>
              
              <form action={logout}>
                <button
                  type="submit"
                  className="rounded-xl bg-gray-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-600 shadow-sm"
                >
                  Keluar
                </button>
              </form>
            </div>
          )}

          {/* Mobile Menu */}
          <details className="relative lg:hidden">
            <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-lg border border-slate-200 text-slate-700 transition hover:bg-slate-100">
              <span className="sr-only">Buka menu</span>
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </summary>
            <nav className="absolute right-0 top-12 z-50 w-56 rounded-xl border border-slate-200 bg-white p-3 shadow-xl">
              <ul className="space-y-2 text-sm font-semibold text-slate-700">
                <li><Link href="/" className="block rounded-lg px-3 py-2 hover:bg-slate-100">Beranda</Link></li>
                {/* Link Dashboard di Mobile Menu */}
                {user && (
                  <li>
                    <Link href="/dashboard" className="block rounded-lg px-3 py-2 text-blue-600 bg-blue-50 font-bold">
                      Dashboard
                    </Link>
                  </li>
                )}
                {!user ? (
                  <>
                    <li><Link href="/login" className="block rounded-lg px-3 py-2 hover:bg-slate-100">Masuk</Link></li>
                    <li><Link href="/register" className="mt-2 block rounded-lg bg-blue-600 px-3 py-2 text-center text-white">Daftar</Link></li>
                  </>
                ) : (
                  <li>
                    <form action={logout}>
                      <button className="w-full mt-2 rounded-lg bg-gray-500 px-3 py-2 text-white font-semibold">
                        Keluar
                      </button>
                    </form>
                  </li>
                )}
              </ul>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
};

export default Navbar;