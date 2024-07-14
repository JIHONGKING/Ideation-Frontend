"use server";

import { getAuthId, updateUserResume } from "@/backend/services/userSvc";
import { redirect } from "next/navigation";

export async function uploadResumeUser(formData: FormData) {
  const file = formData.get("file") as File;
  if (!file) {
    console.warn("File is undefined");
    return;
  }
  const userId = getAuthId();
  if (!userId) {
    redirect("/login");
  }
  await updateUserResume(file);
}
