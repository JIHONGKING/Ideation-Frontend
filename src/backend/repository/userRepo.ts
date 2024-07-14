import { Credentials, User } from "../api/types";
import { db } from "@/backend/db";
import {
  user as user_table,
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
          startDate: true,
          endDate: true,
          type: true,
        },
      },
      education: {
        with: { degrees: { columns: { name: true, level: true } } },
      },
    },
    where: eq(user_table.id, id),
  });
}
