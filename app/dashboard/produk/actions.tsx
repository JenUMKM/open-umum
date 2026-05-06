"use server";

import { createClient } from "@/app/utils/supabase/server";
import { revalidatePath } from "next/cache";

export async function addProduct(prevState: any, formData: FormData) {
  const supabase = await createClient();
  
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { success: false, message: "Sesi habis, silakan login ulang." };

  const name = formData.get("name") as string;
  const price = parseInt(formData.get("price") as string);
  const stock = parseInt(formData.get("stock") as string);

  const { error } = await supabase
    .from("products")
    .insert([
      { 
        name, 
        price, 
        stock, 
        user_id: user.id 
      }
    ]);

  if (error) {
    return { success: false, message: "Gagal menambah produk: " + error.message };
  }

  revalidatePath("/dashboard/produk");
  return { success: true, message: "Produk berhasil ditambahkan!" };
}

export async function deleteProduct(id: string) {
  const supabase = await createClient();
  
  const { error } = await supabase
    .from("products")
    .delete()
    .eq("id", id);

  if (error) return { success: false };

  revalidatePath("/dashboard/produk");
  return { success: true };
}

export async function updateProduct(formData: FormData) {
  const supabase = await createClient();
  
  const id = formData.get("id") as string;
  const name = formData.get("name") as string;
  const price = parseInt(formData.get("price") as string);
  const stock = parseInt(formData.get("stock") as string);

  const { error } = await supabase
    .from("products")
    .update({ name, price, stock })
    .eq("id", id);

  if (error) return { success: false, message: error.message };

  revalidatePath("/dashboard/produk");
  return { success: true, message: "Produk berhasil diperbarui!" };
}