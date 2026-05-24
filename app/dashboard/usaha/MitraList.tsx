"use client";

import { useState, useActionState, startTransition } from "react";
import { HiOutlinePencilSquare, HiOutlineTrash, HiOutlineXMark, HiOutlineCheck } from "react-icons/hi2";
import { deleteMitra, updateMitra } from "./actions";

interface MitraListProps {
  mitras: any[];
  setOptimisticMitras: (action: { action: string; id: string; newData?: any }) => void;
}

export default function MitraList({ mitras, setOptimisticMitras }: MitraListProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm mt-6">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="px-6 py-4 text-xs font-black text-slate-500 uppercase tracking-wider">Nama Mitra</th>
              <th className="px-6 py-4 text-xs font-black text-slate-500 uppercase tracking-wider">No. Telepon</th>
              <th className="px-6 py-4 text-xs font-black text-slate-500 uppercase tracking-wider">Alamat</th>
              <th className="px-6 py-4 text-xs font-black text-slate-500 uppercase tracking-wider text-right">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {mitras.length === 0 ? (
              <tr>
                <td colSpan={4} className="px-6 py-10 text-center text-sm text-slate-400 font-medium">
                  Belum ada data mitra terdaftar.
                </td>
              </tr>
            ) : (
              mitras.map((item) => (
                <MitraRow key={item.id} item={item} setOptimisticMitras={setOptimisticMitras} />
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function MitraRow({ item, setOptimisticMitras }: { item: any; setOptimisticMitras: any }) {
  const [isEditing, setIsEditing] = useState(false);

  const [state, formAction] = useActionState(async (prevState: any, formData: FormData) => {
    const id = formData.get("id") as string;
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const address = formData.get("address") as string;

    startTransition(() => {
      setOptimisticMitras({ action: "update", id, newData: { name, phone, address } });
      setIsEditing(false);
    });

    const result = await updateMitra(prevState, formData);
    if (!result.success) setIsEditing(true);
    return result;
  }, null);

  async function handleDeleteClick(id: string) {
    if (!confirm("Hapus data mitra ini?")) return;
    startTransition(() => {
      setOptimisticMitras({ action: "delete", id });
    });
    await deleteMitra(id);
  }

  if (isEditing) {
    return (
      <tr className="bg-blue-50/30 text-slate-900">
        <td colSpan={4} className="p-4">
          <form action={formAction} className="grid grid-cols-4 gap-4 items-start">
            <input type="hidden" name="id" value={item.id} />
            <input name="name" defaultValue={item.name} className="rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none" />
            <input name="phone" defaultValue={item.phone} className="rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none" />
            <input name="address" defaultValue={item.address} className="rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none" />
            <div className="flex justify-end gap-2 pt-1">
              <button type="submit" className="p-2 bg-emerald-600 text-white rounded-lg"><HiOutlineCheck className="text-lg" /></button>
              <button type="button" onClick={() => setIsEditing(false)} className="p-2 bg-gray-500 text-white rounded-lg"><HiOutlineXMark className="text-lg" /></button>
            </div>
          </form>
        </td>
      </tr>
    );
  }

  return (
    <tr className="hover:bg-slate-50/50 transition text-slate-900">
      <td className="px-6 py-4 font-bold">{item.name}</td>
      <td className="px-6 py-4 font-medium text-slate-600">{item.phone}</td>
      <td className="px-6 py-4 text-sm text-slate-500 max-w-xs truncate">{item.address}</td>
      <td className="px-6 py-4 text-right">
        <div className="flex justify-end gap-2">
          <button onClick={() => setIsEditing(true)} className="p-2 hover:bg-blue-50 rounded-lg text-blue-600"><HiOutlinePencilSquare className="text-xl" /></button>
          <button onClick={() => handleDeleteClick(item.id)} className="p-2 hover:bg-red-50 rounded-lg text-red-600"><HiOutlineTrash className="text-xl" /></button>
        </div>
      </td>
    </tr>
  );
}