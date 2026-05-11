import { z } from "zod";

const passwordSchema = z
  .string()
  .min(8, "Password minimal 8 karakter")
  .regex(/[A-Z]/, "Password harus memiliki minimal 1 huruf besar")
  .regex(/[a-z]/, "Password harus memiliki minimal 1 huruf kecil")
  .regex(/[0-9]/, "Password harus memiliki minimal 1 angka")
  .regex(
    /[^A-Za-z0-9]/,
    "Password harus memiliki minimal 1 simbol"
  );

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Email wajib diisi")
    .email("Format email tidak valid"),

  password: passwordSchema,
});

export const registerSchema = z.object({
  fullName: z
    .string()
    .min(3, "Nama minimal 3 karakter")
    .max(50, "Nama maksimal 50 karakter")
    .regex(
      /^[a-zA-Z\s]+$/,
      "Nama hanya boleh berisi huruf"
    ),

  email: z
    .string()
    .min(1, "Email wajib diisi")
    .email("Format email tidak valid"),

  password: passwordSchema,
});