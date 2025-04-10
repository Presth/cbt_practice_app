import { z } from "zod";

export const loginSchema = z.object({
  username: z.string().nonempty("Username is required"),
  password: z.string().nonempty("Password is required"),
});

export const createAccountSchema = z.object({
  username: z.string().optional(),
  regNo: z.string().optional(),
  fullName: z.string().optional(),
  password: z.string().min(8, "Password must be at least 8 characters long"),
  email: z.string().email("Invalid email address"),
});
