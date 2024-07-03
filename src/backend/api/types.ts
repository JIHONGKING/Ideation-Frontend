import { z } from "zod";
import { loginSchema, registerSchema } from "./schemas";

export type Employer = {};

export type User = {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export type Job = {};

export type Credentials = {
  username: string;
  password: string;
};

export type LoginSchema = z.infer<typeof loginSchema>;
export type RegisterSchema = z.infer<typeof registerSchema>;
