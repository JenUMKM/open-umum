"use client";

import { useState, useActionState } from "react";
import { deleteProduct, updateProduct } from "./actions";
import { HiOutlineCheck, HiOutlinePencilSquare, HiOutlineTrash, HiOutlineXMark } from "react-icons/hi2";

export default function ProductList({ products }: { products: any[] }) {
  const [editingId, setEditingId] = useState<string | null>(null);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="px-6 py-4 text-xs font-black text-slate-500 uppercase tracking-wider">Nama Produk</th>
              <th className="px-6 py-4 text-xs font-black text-slate-500 uppercase tracking-wider">Harga</th>
              <th className="px-6 py-4 text-xs font-black text-slate-500 uppercase tracking-wider">Stok</th>
              <th className="px-6 py-4 text-xs font-black text-slate-500 uppercase tracking-wider text-right">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {products.map((item) => (
              <ProductRow 
                key={item.id} 
                item={item} 
                isEditing={editingId === item.id} 
                setEditingId={setEditingId} 
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ProductRow({ 
  item, 
  isEditing, 
  setEditingId 
}: { 
  item: any; 
  isEditing: boolean; 
  setEditingId: (id: string | null) => void; 
}) {
  const [state, formAction] = useActionState(async (prevState: any, formData: FormData) => {
    const result = await updateProduct(prevState, formData);
    if (result.success) {
      setEditingId(null);
    }
    return result;
  }, null);

  if (isEditing) {
    return (
      <tr className="bg-blue-50/30 text-slate-900">
        <td colSpan={4} className="p-4">
          <form action={formAction} className="grid grid-cols-4 gap-4 items-start">
            <input type="hidden" name="id" value={item.id} />
            
            <div className="flex flex-col gap-1">
              <input 
                name="name" 
                defaultValue={item.name} 
                className={`rounded-lg border px-3 py-2 text-sm text-slate-900 outline-none transition focus:ring-2 ${
                  state?.errors?.name 
                    ? "border-red-300 focus:border-red-500 focus:ring-red-100" 
                    : "border-slate-200 focus:border-blue-500 focus:ring-blue-100"
                }`} 
              />
              {state?.errors?.name && (
                <span className="text-[10px] font-medium text-red-500 pl-1">{state.errors.name[0]}</span>
              )}
            </div>

            <div className="flex flex-col gap-1">
              <input 
                name="price" 
                defaultValue={item.price} 
                className={`rounded-lg border px-3 py-2 text-sm text-slate-900 outline-none transition focus:ring-2 ${
                  state?.errors?.price 
                    ? "border-red-300 focus:border-red-500 focus:ring-red-100" 
                    : "border-slate-200 focus:border-blue-500 focus:ring-blue-100"
                }`} 
              />
              {state?.errors?.price && (
                <span className="text-[10px] font-medium text-red-500 pl-1">{state.errors.price[0]}</span>
              )}
            </div>

            <div className="flex flex-col gap-1">
              <input 
                name="stock" 
                defaultValue={item.stock} 
                className={`rounded-lg border px-3 py-2 text-sm text-slate-900 outline-none transition focus:ring-2 ${
                  state?.errors?.stock 
                    ? "border-red-300 focus:border-red-500 focus:ring-red-100" 
                    : "border-slate-200 focus:border-blue-500 focus:ring-blue-100"
                }`} 
              />
              {state?.errors?.stock && (
                <span className="text-[10px] font-medium text-red-500 pl-1">{state.errors.stock[0]}</span>
              )}
            </div>

            <div className="flex justify-end gap-2 pt-1">
              <button type="submit" className="p-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition">
                <HiOutlineCheck className="text-lg" />
              </button>
              <button type="button" onClick={() => setEditingId(null)} className="p-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition">
                <HiOutlineXMark className="text-lg" />
              </button>
            </div>
          </form>

          {state?.message && !state.success && (
            <p className="text-xs font-bold text-red-600 mt-2 pl-1">{state.message}</p>
          )}
        </td>
      </tr>
    );
  }

  return (
    <tr className="hover:bg-slate-50/50 transition text-slate-900">
      <td className="px-6 py-4 font-bold">{item.name}</td>
      <td className="px-6 py-4 font-medium text-slate-600">
        Rp {new Intl.NumberFormat("id-ID").format(item.price)}
      </td>
      <td className="px-6 py-4">
        <span className={`inline-block px-2 py-1 rounded-lg text-[10px] font-black uppercase ${
          item.stock < 5 ? "bg-red-100 text-red-600" : "bg-emerald-100 text-emerald-600"
        }`}>
          {item.stock} Tersedia
        </span>
      </td>
      <td className="px-6 py-4 text-right">
        <div className="flex justify-end gap-2">
          <button 
            onClick={() => setEditingId(item.id)}
            className="p-2 hover:bg-blue-50 rounded-lg text-blue-600 transition"
          >
            <HiOutlinePencilSquare className="text-xl" />
          </button>
          <button 
            onClick={async () => { if (confirm('Hapus produk ini?')) await deleteProduct(item.id); }}
            className="p-2 hover:bg-red-50 rounded-lg text-red-600 transition"
          >
            <HiOutlineTrash className="text-xl" />
          </button>
        </div>
      </td>
    </tr>
  );
}