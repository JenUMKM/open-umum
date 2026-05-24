import { createClient } from "@/app/utils/supabase/server";
import MitraManager from "./MitraManager"; 

export default async function DataUsahaPage() {
  const supabase = await createClient();
  
  const { data: { user } } = await supabase.auth.getUser();

  const { data: mitras } = await supabase
    .from("mitras")
    .select("*")
    .eq("user_id", user?.id || "")
    .order("created_at", { ascending: false });

  return (
    <div className="space-y-6 max-w-6xl">
      <header>
        <h1 className="text-2xl font-black text-slate-900 tracking-tight">Manajemen Mitra UMKM</h1>
        <p className="text-sm text-slate-500">
          Kelola jaringan mitra kerja, supplier, dan relasi bisnis Anda di sini.
        </p>
      </header>

     
      <MitraManager initialMitras={mitras || []} />
    </div>
  );
}