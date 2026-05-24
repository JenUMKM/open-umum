"use server";

import { redirect } from "next/navigation";
import { createClient } from "../utils/supabase/server";
import { revalidatePath } from "next/cache";
import { z } from "zod"; // 1. Import Zod

const authSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email tidak boleh kosong." })
    .email({ message: "Format email tidak valid." }),
  password: z
    .string()
    .min(6, { message: "Password minimal harus 6 karakter." }),
});

export async function login(prevState: any, formData: FormData) {
  const supabase = await createClient();

  const rawEmail = formData.get("email") as string;
  const rawPassword = formData.get("password") as string;

  const validatedFields = authSchema.safeParse({
    email: rawEmail,
    password: rawPassword,
  });

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors, 
    };
  }

  const { email, password } = validatedFields.data;

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return { 
      success: false, 
      message: "Email atau password salah." 
    };
  }

  revalidatePath("/", "layout");
  redirect("/dashboard");
}

export async function signup(prevState: any, formData: FormData) {
  const supabase = await createClient();
  
  const rawEmail = formData.get("email") as string;
  const rawPassword = formData.get("password") as string;

  // Validasi input register
  const validatedFields = authSchema.safeParse({
    email: rawEmail,
    password: rawPassword,
  });

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { email, password } = validatedFields.data;
  const { error } = await supabase.auth.signUp({ email, password });

  if (error) {
    return { success: false, message: error.message };
  }

  return { success: true, message: "Register berhasil! Silakan login." };
}

export async function logout() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  
  revalidatePath("/", "layout");
  redirect("/login");
}