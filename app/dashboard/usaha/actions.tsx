"use server";

import { createClient } from "@/app/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const mitraSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Nama mitra / usaha tidak boleh kosong." })
    .max(100, { message: "Nama maksimal 100 karakter." }),
  phone: z
    .string()
    .min(10, { message: "Nomor telepon minimal 10 digit." })
    .max(15, { message: "Nomor telepon maksimal 15 digit." })
    .regex(/^[0-9]+$/, { message: "Nomor telepon hanya boleh berisi angka." }),
  address: z
    .string()
    .min(5, { message: "Alamat minimal harus 5 karakter." }),
});

export async function addMitra(prevState: any, formData: FormData) {
  const supabase = await createClient();
  
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { success: false, message: "Sesi habis, silakan login ulang." };

  const rawData = {
    name: formData.get("name") as string,
    phone: formData.get("phone") as string,
    address: formData.get("address") as string,
  };

  const validatedFields = mitraSchema.safeParse(rawData);

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, phone, address } = validatedFields.data;

  const { error } = await supabase
    .from("mitras") 
    .insert([{ name, phone, address, user_id: user.id }]);

  if (error) return { success: false, message: "Gagal menambah mitra: " + error.message };

  revalidatePath("/dashboard/mitra");
  return { success: true, message: "Data mitra berhasil ditambahkan!" };
}

export async function updateMitra(prevState: any, formData: FormData) {
  const supabase = await createClient();
  
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { success: false, message: "Sesi habis." };

  const id = formData.get("id") as string;
  const rawData = {
    name: formData.get("name") as string,
    phone: formData.get("phone") as string,
    address: formData.get("address") as string,
  };

  const validatedFields = mitraSchema.safeParse(rawData);

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, phone, address } = validatedFields.data;

  const { error } = await supabase
    .from("mitras")
    .update({ name, phone, address })
    .eq("id", id)
    .eq("user_id", user.id);

  if (error) return { success: false, message: error.message };

  revalidatePath("/dashboard/mitra");
  return { success: true, message: "Data mitra berhasil diperbarui!" };
}

export async function deleteMitra(id: string) {
  const supabase = await createClient();
  
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { success: false };

  const { error } = await supabase
    .from("mitras")
    .delete()
    .eq("id", id)
    .eq("user_id", user.id);

  if (error) return { success: false };

  revalidatePath("/dashboard/mitra");
  return { success: true };
}