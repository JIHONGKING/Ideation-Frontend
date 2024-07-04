import { z } from "zod";
import { userEmailExists } from "@/backend/services/userSvc";
import { employerEmailExists } from "@/backend/services/employerSvc";

export const registerUserSchema = z
  .object({
    email: z.string().email({ message: "Must be a valid email address." }),
    name: z.string(),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters." }),
    confirmPassword: z.string(),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword != password) {
      ctx.addIssue({
        code: "custom",
        message: "Passwords do not match.",
        path: ["confirmPassword"],
      });
    }
  })
  .superRefine(async ({ email }, ctx) => {
    const exists = await userEmailExists(email);
    if (exists) {
      ctx.addIssue({
        code: "custom",
        message: "This email is already in use.",
        path: ["email"],
      });
    }
  });

export const registerEmployerSchema = z
  .object({
    email: z.string().email({ message: "Must be a valid email address." }),
    name: z.string(),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters." }),
    confirmPassword: z.string(),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword != password) {
      ctx.addIssue({
        code: "custom",
        message: "Passwords do not match.",
        path: ["confirmPassword"],
      });
    }
  })
  .superRefine(async ({ email }, ctx) => {
    const exists = await employerEmailExists(email);
    if (exists) {
      ctx.addIssue({
        code: "custom",
        message: "This email is already in use.",
        path: ["email"],
      });
    }
  });

export const loginSchema = z.object({
  email: z.string(),
  password: z.string(),
});
