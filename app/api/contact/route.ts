import { supabase } from "@/lib/superbase";
import { ContactPayload } from "@/lib/types";

export async function POST(req: Request) {
  try {
    const body: ContactPayload = await req.json();

    const { name, email, message } = body;

    if (!name || !email || !message) {
      return Response.json(
        { error: "Semua field wajib diisi" },
        { status: 400 }
      );
    }

    const { error } = await supabase.from("contacts").insert([
      {
        name,
        email,
        message,
      },
    ]);

    if (error) throw error;

    return Response.json({
      success: true,
      message: "Pesan berhasil dikirim",
    });
  } catch (err: any) {
    return Response.json(
      { error: err.message || "Terjadi kesalahan" },
      { status: 500 }
    );
  }
}