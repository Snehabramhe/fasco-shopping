import { z } from "zod";

const email = z.string().min(1, "Email is required").email("Enter a valid email");
 
export const authSchemas = {
  signin: z.object({
    email,
    password: z.string().min(6, "Password must be at least 6 characters"),
  }),

  signup: z
    .object({
      firstName: z.string().min(1, "First name is required"),
      lastName: z.string().min(1, "Last name is required"),
      email,
      phone: z.string().min(8, "Phone is required"),
      password: z.string().min(6, "Password must be at least 6 characters"),
      confirmPassword: z.string().min(6, "Confirm password is required"),
    })
    .refine((data) => data.password === data.confirmPassword, {
      path: ["confirmPassword"],
      message: "Passwords do not match",
    }),

  forgot: z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email,
    phone: z.string().min(8, "Phone is required"),
  }),

  confirm: z.object({
    code: z.string().min(4, "Confirmation code is required"),
  }),

  reset: z
    .object({
      newPassword: z.string().min(6, "Password must be at least 6 characters"),
      confirmNewPassword: z.string().min(6, "Confirm password is required"),
    })
    .refine((data) => data.newPassword === data.confirmNewPassword, {
      path: ["confirmNewPassword"],
      message: "Passwords do not match",
    }),
};
