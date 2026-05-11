'use server';

import { createSupabaseServer } from '@/lib/server';

export async function logoutAdmin() {
  const supabase = createSupabaseServer();

  await supabase.auth.signOut();

  return { success: true };
}