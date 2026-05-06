import { redirect } from "next/navigation";
import { createClient } from "../utils/supabase/server";
import { 
  HiOutlineCube, 
  HiOutlineUsers, 
  HiOutlineChatBubbleLeftRight, 
  HiOutlineStar,
} from "react-icons/hi2";

export default async function DashboardPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  const { count, error } = await supabase
    .from("products")
    .select("*", { count: 'exact', head: true })
    .eq("user_id", user.id);

  const stats = [
    { 
      label: "Produk", 
      value: error ? "0" : count?.toString() || "0", // Ambil dari DB
      icon: HiOutlineCube, 
      color: "text-blue-600" 
    },
    { label: "Pengunjung", value: "1.2k", icon: HiOutlineUsers, color: "text-emerald-600" },
    { label: "Pesan", value: "8", icon: HiOutlineChatBubbleLeftRight, color: "text-orange-500" },
    { label: "Rating", value: "4.8", icon: HiOutlineStar, color: "text-yellow-500" },
  ];

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-black text-slate-900 tracking-tight">Ringkasan Bisnis</h1>
        <p className="text-sm text-slate-500">
          Selamat datang kembali, <span className="font-bold text-slate-900">{user.email?.split('@')[0]}</span>.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <div key={i} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <stat.icon className={`text-2xl ${stat.color}`} />
              <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                AKTIF
              </span>
            </div>
            <div className="mt-3">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{stat.label}</p>
              <p className="text-2xl font-black text-slate-900 leading-none mt-1">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
}