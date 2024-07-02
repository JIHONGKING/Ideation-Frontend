"use server";
import { createUser } from "@/backend/services/userSvc";
import { RegisterSchema } from "./page";

export async function register(formValues: RegisterSchema) {
  await createUser(formValues);
}
