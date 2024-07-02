"use server";
import { Credentials } from "@/backend/api/types";
import { loginUser } from "@/backend/services/userSvc";

export async function login(credentials: Credentials) {
  await loginUser(credentials);
}
