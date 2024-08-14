import { z } from "zod";
import {
  loginSchema,
  registerUserSchema,
  registerEmployerSchema,
  editExperienceSchema,
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

export type Experience = {
  position: string | null;
  company: string;
  start_date: string | null;
  end_date: string | null;
  type: string | null;
};

export type Credentials = {
  email: string;
  password: string;
};

export type LoginSchema = z.infer<typeof loginSchema>;
export type RegisterUserSchema = z.infer<typeof registerUserSchema>;
export type RegisterEmployerSchema = z.infer<typeof registerEmployerSchema>;
export type EditExperienceSchema = z.infer<typeof editExperienceSchema>;
