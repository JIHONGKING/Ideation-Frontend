"use server";

import {
  getAuthId,
  updateUserEducation,
  updateUserExperience,
  updateUserFields,
  updateUserResume,
  updateUserSkills,
} from "@/backend/services/userSvc";
import { redirect } from "next/navigation";

export async function uploadResumeUser(formData: FormData) {
  const file = formData.get("file") as File;
  if (!file) {
    console.warn("File is undefined");
    return;
  }
  const userId = await getAuthId();
  if (!userId) {
    redirect("/login");
  }
  return await updateUserResume(formData);
}

export async function updateProfile(data) {
  if (!data) {
    console.warn("Data is undefined!");
    return;
  }
  const userId = await getAuthId();
  if (!userId) {
    redirect("/login");
  }

  await Promise.all([
    updateUserSkills(userId, data.skills),
    updateUserExperience(userId, data.experience),
    updateUserEducation(userId, data.education),
    updateUserFields(userId, data.fields),
  ]);
}
