import { supabase } from "@/lib/supabase";

const MAX_FILES = 5;
const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp"];

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const location = formData.get("location") as string;
    const lat = formData.get("lat") as string;
    const long = formData.get("long") as string;

    const files = formData.getAll("images") as File[];

    // VALIDASI BASIC
    if (!title || !description || !location) {
      return Response.json(
        { error: "Field wajib belum lengkap" },
        { status: 400 }
      );
    }

    // VALIDASI FILE
    if (files.length > MAX_FILES) {
      return Response.json(
        { error: `Maksimal ${MAX_FILES} gambar` },
        { status: 400 }
      );
    }

    for (const file of files) {
      if (!ALLOWED_TYPES.includes(file.type)) {
        return Response.json(
          { error: "Format gambar tidak didukung (jpg, png, webp)" },
          { status: 400 }
        );
      }
    }

    // SLUG
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

    // INSERT REPORT
    const { data: report, error: reportError } = await supabase
      .from("reports")
      .insert([
        {
          title,
          description,
          location,
          lat,
          long
        },
      ])
      .select()
      .single();

    if (reportError) throw reportError;

    // UPLOAD IMAGES
    let uploadedImages: string[] = [];

    for (const file of files) {
      const fileExt = file.name.split(".").pop();
      const fileName = `${Date.now()}-${Math.random()}.${fileExt}`;
      const filePath = `reports/${report.id}/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from("report-images")
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data: publicUrl } = supabase.storage
        .from("report-images")
        .getPublicUrl(filePath);

      uploadedImages.push(publicUrl.publicUrl);
    }

    // INSERT KE TABLE IMAGES
    if (uploadedImages.length > 0) {
      const payload = uploadedImages.map((url) => ({
        report_id: report.id,
        image_url: url,
      }));

      const { error: imageError } = await supabase
        .from("report_images")
        .insert(payload);

      if (imageError) throw imageError;
    }

    return Response.json({
      success: true,
      data: report,
    });
  } catch (err: any) {
    return Response.json(
      { error: err.message },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const { data, error } = await supabase
      .from("reports")
      .select(`
        *,
        report_images (*)
      `)
      .order("created_at", { ascending: false });

    if (error) throw error;

    return Response.json(data);
  } catch (err: any) {
    return Response.json(
      { error: err.message },
      { status: 500 }
    );
  }
}