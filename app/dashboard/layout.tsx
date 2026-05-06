import { redirect } from "next/navigation";
import Link from "next/link";
import { logout } from "@/app/auth/actions";
import { createClient } from "../utils/supabase/server";
import {
    HiOutlineChartBar,
    HiOutlineBuildingOffice2,
    HiOutlineCube,
    HiOutlineMapPin,
    HiOutlineArrowLeftOnRectangle
} from "react-icons/hi2";

export default async function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) redirect("/login");

    const menuItems = [
        { name: "Ringkasan", href: "/dashboard", icon: HiOutlineChartBar },
        { name: "Data Produk", href: "/dashboard/produk", icon: HiOutlineCube },
        { name: "Data Usaha", href: "/dashboard/usaha", icon: HiOutlineBuildingOffice2 },
    ];

    return (
        <div className="flex min-h-screen bg-slate-50">
            {/* Sidebar - Fixed on desktop */}
            <aside className="fixed inset-y-0 left-0 z-50 w-64 border-r border-slate-200 bg-white hidden lg:flex flex-col">
                <div className="p-6">
                    <Link href="/" className="text-xl font-black text-slate-900 tracking-tight">
                        OpenUMKM<span className="text-emerald-600">.</span>
                    </Link>
                </div>

                <nav className="flex-1 px-4 space-y-1">
                    {menuItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-100 hover:text-blue-600 group"
                        >
                            <item.icon className="text-xl text-slate-400 group-hover:text-blue-600 transition-colors" />
                            {item.name}
                        </Link>
                    ))}
                </nav>

                <div className="p-4 border-t border-slate-100">
                    <div className="rounded-xl bg-slate-50 p-4 mb-4">
                        <p className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">User Aktif</p>
                        <p className="text-xs font-black text-slate-900 truncate mt-1">{user.email}</p>
                    </div>
                    <form action={logout}>
                        <button className="flex items-center justify-center gap-2 w-full rounded-xl bg-gray-500 py-2.5 text-xs font-bold text-white transition hover:bg-gray-600">
                            <HiOutlineArrowLeftOnRectangle className="text-lg" />
                            Keluar
                        </button>
                    </form>
                </div>
            </aside>

            {/* Main Content Area */}
            <div className="flex-1 lg:ml-64">
                {/* Top Header Mobile Only */}
                <header className="lg:hidden flex items-center justify-between bg-white p-4 border-b border-slate-200 sticky top-0 z-30">
                    <span className="font-black text-slate-900">OpenUMKM</span>
                    <details className="relative">
                        <summary className="list-none p-2 rounded-lg border border-slate-200 text-sm font-bold text-slate-700 cursor-pointer">Menu</summary>
                        <nav className="absolute right-0 mt-2 w-48 bg-white border border-slate-200 rounded-xl shadow-xl p-2">
                            {menuItems.map(item => (
                                <Link key={item.name} href={item.href} className="flex items-center gap-2 p-2 text-sm font-bold text-slate-700 hover:bg-slate-50 rounded-lg">
                                    <item.icon className="text-lg text-slate-400" />
                                    {item.name}
                                </Link>
                            ))}
                            <form action={logout} className="mt-2 pt-2 border-t border-slate-100">
                                <button className="flex items-center gap-2 w-full p-2 text-sm font-bold text-red-600 hover:bg-red-50 rounded-lg">
                                    <HiOutlineArrowLeftOnRectangle className="text-lg" />
                                    Keluar
                                </button>
                            </form>
                        </nav>
                    </details>
                </header>

                <main className="p-6 lg:p-10">
                    {children}
                </main>
            </div>
        </div>
    );
}