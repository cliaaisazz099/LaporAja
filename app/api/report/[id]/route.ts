import { supabase } from "@/lib/superbase";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = await params;

    const { data: report, error } = await supabase
      .from("reports")
      .select("*")
      .eq("id", id)
      .single();

    if (error) throw error;

    const { data: images } = await supabase
      .from("report_images")
      .select("image_url")
      .eq("report_id", id);

    return Response.json({
      ...report,
      images: images?.map((img) => img.image_url) || [],
    });

  } catch (err: any) {
    return Response.json(
      { error: "Data tidak ditemukan" },
      { status: 404 }
    );
  }
}