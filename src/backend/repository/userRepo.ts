import {
  Credentials,
  EditAboutSchema,
  EditTitleSchema,
  User,
} from "../api/types";
import { db } from "@/backend/db";
import {
  degree,
  education,
  experience,
  user as user_table,
  userField,
  userNotification,
  userSkill,
  userStrength,
} from "../db/schema";
import { eq } from "drizzle-orm";

export async function dbCreateUser(user: User) {
  console.info("userRepo - dbCreateUser");
  console.info(user);
  await db.insert(user_table).values(user);
}
export async function dbDeleteUser(username: string) {
  console.info("userRepo - dbDeleteUser");
  console.info(username);
}
export async function dbEditUser(user: User) {
  console.info("userRepo - dbEditUser");
  console.info(user);
}
export async function dbGetUserCredentials(
  email: string,
): Promise<Credentials[]> {
  console.info("userRepo - dbGetUserCredentials");
  console.info(email);
  return await db
    .select({ email: user_table.email, password: user_table.password })
    .from(user_table)
    .where(eq(user_table.email, email));
}
export async function dbGetUserByEmail(email: string) {
  console.info("userRepo - dbGetUserByEmail");
  console.info(email);
  return await db.select().from(user_table).where(eq(user_table.email, email));
}
export async function dbGetUserById(id: number) {
  console.info("userRepo - dbGetUserById");
  console.info(id);
  return await db.select().from(user_table).where(eq(user_table.id, id));
}
export async function dbGetUserFields(username: string, attr: string[]) {
  console.info("userRepo - dbGetUserFields");
  console.info(username, attr);
}
export async function dbGetUserDashboard(id: number) {
  console.info("userRepo - dbGetUserDashboard");
  console.info(id);
  return await db.query.user.findFirst({
    columns: { name: true },
    with: {
      skills: { columns: { name: true } },
      strengths: { columns: { name: true } },
      fields: { columns: { name: true } },
    },
    where: eq(user_table.id, id),
  });
}

export async function dbGetUserAnalysis(id: number) {
  console.info("userRepo - dbGetUserAnalysis");
  console.info(id);
  return await db.query.user.findFirst({
    columns: { name: true },
    with: {
      skills: { columns: { name: true } },
      strengths: { columns: { name: true } },
      fields: { columns: { name: true } },
    },
    where: eq(user_table.id, id),
  });
}

export async function dbGetUserProfile(id: number) {
  console.info("userRepo - dbGetUserProfile");
  console.info(id);
  return await db.query.user.findFirst({
    columns: {
      name: true,
      title: true,
      location: true,
      profilePicUuid: true,
      about: true,
    },
    with: {
      experiences: {
        columns: {
          company: true,
          position: true,
          start_date: true,
          end_date: true,
          type: true,
        },
      },
      education: {
        columns: {
          school: true,
          start_date: true,
          end_date: true,
        },
        with: { degrees: { columns: { name: true, level: true } } },
      },
    },
    where: eq(user_table.id, id),
  });
}

export async function dbGetUserNavbar(id: number) {
  console.info("userRepo - dbGetUserNavbar");
  console.info(id);
  return await db.query.user.findFirst({
    columns: {
      profilePicUuid: true,
    },
    with: {
      notifications: true,
    },
  });
}

export async function dbDeleteUserSkills(id: number) {
  console.info("userRepo - dbDeleteUserSkills");
  console.info(id);
  await db.delete(userSkill).where(eq(userSkill.userId, id));
}

export async function dbAddUserSkills(id: number, skills: string[]) {
  console.info("userRepo - dbAddUserSkills");
  console.info(id, skills);
  const skillObjects = skills.map((skill) => ({ name: skill, userId: id }));
  await db.insert(userSkill).values(skillObjects);
}

export async function dbDeleteUserFields(id: number) {
  console.info("userRepo - dbDeleteUserFields");
  console.info(id);
  await db.delete(userField).where(eq(userField.userId, id));
}

export async function dbAddUserFields(id: number, fields: string[]) {
  console.info("userRepo - dbAddUserFields");
  console.info(id, fields);
  const fieldObjects = fields.map((field) => ({ name: field, userId: id }));
  await db.insert(userField).values(fieldObjects);
}

export async function dbDeleteUserExperience(id: number) {
  console.info("userRepo - dbDeleteUserExperience");
  console.info(id);
  await db.delete(experience).where(eq(experience.userId, id));
}

export async function dbAddUserExperience(id: number, exp: {}[]) {
  console.info("userRepo - dbAddUserExperience");
  console.info(id, exp);
  const experienceObjects = exp.map((e) => ({ ...e, userId: id }));
  await db.insert(experience).values(experienceObjects);
}

export async function dbDeleteUserEducation(id: number) {
  console.info("userRepo - dbDeleteUserEducation");
  console.info(id);
  await db.delete(education).where(eq(education.userId, id));
}

export async function dbAddUserEducation(id: number, edu: {}[]) {
  console.info("userRepo - dbAddUserEducation");
  console.info(id, edu);
  await db.transaction(async (tx) => {
    const educationObjects = edu.map((e) => ({ ...e, userId: id }));
    const ids = await tx
      .insert(education)
      .values(educationObjects)
      .returning({ id: education.id });
    const degreeObjects = edu.map((e, idx) => ({
      name: e.degree,
      educationId: ids[idx].id,
    }));
    await tx.insert(degree).values(degreeObjects);
  });
}

export async function dbUpdateUserTitle(id: number, fields: EditTitleSchema) {
  console.info("userRepo - dbUpdateUserTitle");
  console.info(id, fields);
  await db
    .update(user_table)
    .set({ name: fields.name, title: fields.title, location: fields.location })
    .where(eq(user_table.id, id));
}

export async function dbUpdateUserAbout(
  id: number,
  aboutForm: EditAboutSchema,
) {
  console.info("userRepo - dbUpdateUserAbout");
  console.info(id, aboutForm);
  await db
    .update(user_table)
    .set({ about: aboutForm.about })
    .where(eq(user_table.id, id));
}
