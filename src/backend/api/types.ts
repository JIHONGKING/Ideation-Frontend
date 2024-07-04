import { z } from "zod";
import {
  loginSchema,
  registerUserSchema,
  registerEmployerSchema,
} from "./schemas";

export type Employer = {
  name: string;
  email: string;
  password: string;
};

export type User = {
  name: string;
  email: string;
  password: string;
};

export type Job = {};

export type Credentials = {
  email: string;
  password: string;
};

export type LoginSchema = z.infer<typeof loginSchema>;
export type RegisterUserSchema = z.infer<typeof registerUserSchema>;
export type RegisterEmployerSchema = z.infer<typeof registerEmployerSchema>;
