"use server";

import { createClient } from "@/app/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const productSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Nama produk tidak boleh kosong." })
    .max(100, { message: "Nama produk maksimal 100 karakter." }),
  price: z
    .number({ error: "Harga harus berupa angka." })
    .min(1, { message: "Harga produk minimal Rp 1." }),
  stock: z
    .number({ error: "Stok harus berupa angka." })
    .min(0, { message: "Stok tidak boleh bernilai negatif." }),
});

export async function addProduct(prevState: any, formData: FormData) {
  const supabase = await createClient();
  
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { success: false, message: "Sesi habis, silakan login ulang." };

  const rawData = {
    name: formData.get("name") as string,
    price: Number(formData.get("price")),
    stock: Number(formData.get("stock")),
  };

  const validatedFields = productSchema.safeParse(rawData);

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, price, stock } = validatedFields.data;

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

export async function updateProduct(prevState: any, formData: FormData) {
  const supabase = await createClient();
  
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { success: false, message: "Sesi habis, silakan login ulang." };

  const id = formData.get("id") as string;
  
  const rawData = {
    name: formData.get("name") as string,
    price: Number(formData.get("price")),
    stock: Number(formData.get("stock")),
  };

  const validatedFields = productSchema.safeParse(rawData);

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, price, stock } = validatedFields.data;

  const { error } = await supabase
    .from("products")
    .update({ name, price, stock })
    .eq("id", id)
    .eq("user_id", user.id); 

  if (error) return { success: false, message: error.message };

  revalidatePath("/dashboard/produk");
  return { success: true, message: "Produk berhasil diperbarui!" };
}

export async function deleteProduct(id: string) {
  const supabase = await createClient();
  
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { success: false, message: "Sesi habis." };

  const { error } = await supabase
    .from("products")
    .delete()
    .eq("id", id)
    .eq("user_id", user.id); 

  if (error) return { success: false };

  revalidatePath("/dashboard/produk");
  return { success: true };
}