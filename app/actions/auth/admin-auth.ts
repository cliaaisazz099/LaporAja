'use server';

import { loginSchema, registerSchema } from '@/lib/validations/admin-auth';
import { createSupabaseServer } from '@/lib/server';
import { supabase } from '@/lib/supabase';

type FieldErrors = {
  email?: string[];
  password?: string[];
  fullName?: string[];
};

export async function loginAdmin(data: {
  email: string;
  password: string;
}) {
  const validated = loginSchema.safeParse(data);

  if (!validated.success) {
    return {
      success: false,
      errors: validated.error.flatten().fieldErrors as FieldErrors,
    };
  }

  const supabase = createSupabaseServer();

  const { error } = await supabase.auth.signInWithPassword({
    email: validated.data.email,
    password: validated.data.password,
  });

  if (error) {
    return {
      success: false,
      message: 'Email atau password salah',
    };
  }

  return {
    success: true,
  };
}

export async function registerAdmin(data: {
  fullName: string;
  email: string;
  password: string;
}) {
  const validated = registerSchema.safeParse(data);

  if (!validated.success) {
    return {
      success: false,
      errors: validated.error.flatten().fieldErrors as FieldErrors,
    };
  }

  const supabase = createSupabaseServer();

  const { error } = await supabase.auth.signUp({
    email: validated.data.email,
    password: validated.data.password,
    options: {
      data: {
        full_name: validated.data.fullName,
        role: 'admin',
      },
    },
  });

  if (error) {
    return {
      success: false,
      message: error.message,
    };
  }

  return { success: true };
}