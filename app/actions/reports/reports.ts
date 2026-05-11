"use server";

import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function deleteReport(id: string) {
  const { data, error } = await supabase
    .from("reports")
    .update({
      deleted_at: new Date().toISOString(),
    })
    .eq("id", id)
    .select();

  if (error) {
    console.error("DELETE ERROR:", error);
    throw new Error(error.message);
  }

  return data;
}