"use server"; // WAJIB: Ini menandakan semua fungsi di bawah adalah Server Actions

import { redirect } from "next/navigation";
import { createClient } from "../utils/supabase/server"; // Sekarang ini aman diimpor
import { revalidatePath } from "next/cache";


export async function login(prevState: any, formData: FormData) {
  const supabase = await createClient();

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return { success: false, message: "Email atau password salah." };
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export async function signup(prevState: any, formData: FormData) {
  const supabase = await createClient();
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const { error } = await supabase.auth.signUp({ email, password });

  if (error) {
    return { success: false, message: error.message };
  }

  return { success: true, message: "Register berhasil! Silahkan Login" };
}

export async function logout() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  
  // Revalidate agar session di server benar-benar bersih di semua komponen
  revalidatePath("/", "layout");
  redirect("/login");
}