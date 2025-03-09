import { z } from "zod";

export const LoginSchema = z.object({
  license: z.string().min(1, { message: "กรุณากรอกข้อมูลให้ครบ" }),
  password: z.string().min(1, { message: "กรุณากรอกข้อมูลให้ครบ" }),
});

export type LoginType = z.infer<typeof LoginSchema>;
