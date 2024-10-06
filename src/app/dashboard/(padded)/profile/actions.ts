"use server";

import {
  EditAboutSchema,
  EditEducationSchema,
  EditExperienceSchema,
  EditTitleSchema,
} from "@/backend/api/types";
import {
  getAuthId,
  updateUserAbout,
  updateUserEducation,
  updateUserExperience,
  updateUserFields,
  updateUserResume,
  updateUserSkills,
  updateUserTitle,
} from "@/backend/services/userSvc";
import { warn } from "console";
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

// TODO: FINISH THIS MF
export async function editEducation(formData: EditEducationSchema) {
  const userId = await getAuthId();
  if (!userId) {
    redirect("/login");
  }
  await updateUserEducation(userId, formData);
}

export async function editExperience(formData: EditExperienceSchema) {
  const userId = await getAuthId();
  if (!userId) {
    redirect("/login");
  }
  await updateUserExperience(userId, formData);
}

export async function editProfile(formData: EditTitleSchema) {
  const userId = await getAuthId();
  if (!userId) {
    redirect("/login");
  }
  await updateUserTitle(userId, formData);
}
export async function editAbout(formData: EditAboutSchema) {
  const userId = await getAuthId();
  if (!userId) {
    redirect("/login");
  }
  await updateUserAbout(userId, formData);
}
