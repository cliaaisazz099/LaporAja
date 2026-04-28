import { supabase } from "@/lib/superbase";
import { NextRequest } from "next/server";

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  const { data: report, error } = await supabase
    .from("reports")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !report) {
    return Response.json(
      { error: "Data tidak ditemukan" },
      { status: 404 }
    );
  }

  const { data: images } = await supabase
    .from("report_images")
    .select("image_url")
    .eq("report_id", id);

  return Response.json({
    ...report,
    images: images?.map((img) => img.image_url) || [],
  });
}