import { z } from "zod";
import { usernameExists } from "../services/userSvc";

export const registerSchema = z
  .object({
    username: z
      .string()
      .min(3, { message: "Username must be at least 3 characters." })
      .max(24, { message: "Username must be at most 24 characters." }),
    email: z.string().email({ message: "Must be a valid email address." }),
    firstName: z.string(),
    lastName: z.string(),
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
  .superRefine(async ({ username }, ctx) => {
    const exists = await usernameExists(username);
    if (exists) {
      ctx.addIssue({
        code: "custom",
        message: "The username is already taken.",
        path: ["username"],
      });
    }
  });

export const loginSchema = z.object({
  username: z.string(),
  password: z.string(),
});
