"use client";

import { useActionState, useEffect, useRef, startTransition } from "react";
import { addMitra } from "./actions";
import { SubmitButton } from "@/app/components/SubmitButton";
import { HiOutlineUserPlus } from "react-icons/hi2";

export default function MitraForm({ 
  setOptimisticMitras 
}: { 
  setOptimisticMitras: (action: { action: "add"; id: string; newData: any }) => void; 
}) {
  const formRef = useRef<HTMLFormElement>(null);
  
  const [state, formAction] = useActionState(async (prevState: any, formData: FormData) => {
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const address = formData.get("address") as string;

    startTransition(() => {
      setOptimisticMitras({
        action: "add",
        id: "temp-id-" + Date.now(),
        newData: { id: "temp-id-" + Date.now(), name, phone, address }
      });
    });

    return await addMitra(prevState, formData);
  }, null);

  useEffect(() => {
    if (state?.success) formRef.current?.reset();
  }, [state]);

  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-4 text-slate-900">
        <HiOutlineUserPlus className="text-xl" />
        <h3 className="text-sm font-black uppercase tracking-wider">Registrasi Mitra Baru</h3>
      </div>
      
      <form ref={formRef} action={formAction} className="grid gap-4 sm:grid-cols-3 items-start">
        <div className="flex flex-col gap-1">
          <input name="name" placeholder="Nama Mitra / Usaha" className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-slate-900 font-medium outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition" />
          {state?.errors?.name && <span className="text-[11px] font-medium text-red-500 pl-1">{state.errors.name[0]}</span>}
        </div>

        <div className="flex flex-col gap-1">
          <input name="phone" placeholder="No. Telepon" className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-slate-900 font-medium outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition" />
          {state?.errors?.phone && <span className="text-[11px] font-medium text-red-500 pl-1">{state.errors.phone[0]}</span>}
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex gap-2 items-start">
            <div className="w-full">
              <input name="address" placeholder="Alamat Lengkap" className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-slate-900 font-medium outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition" />
            </div>
            <SubmitButton label="Simpan" />
          </div>
          {state?.errors?.address && <span className="text-[11px] font-medium text-red-500 pl-1">{state.errors.address[0]}</span>}
        </div>
      </form>
    </div>
  );
}