"use client";
import { useState } from "react";
import { HiOutlinePencilSquare, HiOutlineTrash, HiOutlineXMark, HiOutlineCheck } from "react-icons/hi2";
import { deleteProduct, updateProduct } from "./actions";

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
              <tr key={item.id} className="hover:bg-slate-50/50 transition text-slate-900">
                {editingId === item.id ? (
                  /* --- MODE EDIT --- */
                  <td colSpan={4} className="p-4 bg-blue-50/30">
                    <form action={async (fd) => {
                      await updateProduct(fd);
                      setEditingId(null);
                    }} className="grid grid-cols-4 gap-4 items-center">
                      <input type="hidden" name="id" value={item.id} />
                      <input name="name" defaultValue={item.name} className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 outline-none focus:border-blue-500" required />
                      <input name="price" type="number" defaultValue={item.price} className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 outline-none focus:border-blue-500" required />
                      <input name="stock" type="number" defaultValue={item.stock} className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 outline-none focus:border-blue-500" required />
                      <div className="flex justify-end gap-2">
                        <button type="submit" className="p-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700">
                          <HiOutlineCheck className="text-lg" />
                        </button>
                        <button type="button" onClick={() => setEditingId(null)} className="p-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600">
                          <HiOutlineXMark className="text-lg" />
                        </button>
                      </div>
                    </form>
                  </td>
                ) : (
                  /* --- MODE TAMPILAN BIASA --- */
                  <>
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
                          onClick={async () => { if(confirm('Hapus produk ini?')) await deleteProduct(item.id); }}
                          className="p-2 hover:bg-red-50 rounded-lg text-red-600 transition"
                        >
                          <HiOutlineTrash className="text-xl" />
                        </button>
                      </div>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}