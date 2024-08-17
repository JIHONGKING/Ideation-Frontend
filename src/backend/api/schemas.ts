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

export const editExperienceSchema = z.object({
  experiences: z
    .object({
      position: z.string().max(50, { message: "Maximum 50 characters" }),
      company: z.string().max(50, { message: "Maximum 50 characters" }),
      start_date: z.string().max(50),
      end_date: z.string().max(50),
      type: z.string().max(50),
    })
    .array(),
});

export const editEducationSchema = z.object({
  education: z
    .object({
      school: z.string().max(100, { message: "Maximum 50 characters" }),
      start_date: z.string().max(50),
      end_date: z.string().max(50),
      degrees: z.object({
        level: z.string().max(20),
        name: z.string().max(100),
      }),
    })
    .array(),
});
