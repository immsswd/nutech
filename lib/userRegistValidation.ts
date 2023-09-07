import { z } from "zod";

export const userRegisterSchema = z
  .object({
    email: z.string().email({
      message: "Email wajib diisi",
    }),
    namaDepan: z
      .string()
      .min(1, { message: "Nama Depan wajib diisi" })
      .max(100),
    namaBelakang: z
      .string()
      .max(100)
      .transform((namaBelakang) => {
        if (namaBelakang === "") return null;
        return namaBelakang;
      }),

    password: z
      .string()
      .min(5, { message: "Password wajib diisi min 5 karakter" }),
    passwordKonfirmasi: z.string().min(5),
  })
  .refine((data) => data.password === data.passwordKonfirmasi, {
    message: "Password tidak sama",
    path: ["passwordKonfirmasi"],
  });
