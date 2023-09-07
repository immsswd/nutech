import { z } from "zod";

export const userLoginValidation = z.object({
  email: z.string().email({
    message: "Email must be filled",
  }),
  password: z
    .string()
    .min(5, { message: "Password must be filled, min 5 char" }),
});
