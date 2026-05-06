import { createClient } from "@/app/utils/supabase/server";
import { HiOutlineCube } from "react-icons/hi2";
import AddProductForm from "./AddProductForm";
import ProductList from "./ProductList";

export default async function ProdukPage() {
  const supabase = await createClient();
  const { data: products } = await supabase
    .from("products")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <div className="space-y-8">
      <header>
        <h2 className="text-2xl font-black text-slate-900">Katalog Produk</h2>
        <p className="text-sm text-slate-500">Kelola daftar dagangan UMKM Anda di sini.</p>
      </header>

      <AddProductForm />

      {products && products.length > 0 ? (
        <ProductList products={products} />
      ) : (
        <div className="rounded-2xl border border-slate-200 bg-white p-20 text-center flex flex-col items-center justify-center">
          <HiOutlineCube className="text-5xl text-slate-200 mb-4" />
          <p className="font-bold text-slate-400">Belum ada produk terdaftar</p>
        </div>
      )}
    </div>
  );
}