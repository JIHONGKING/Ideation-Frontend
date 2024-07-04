import { Credentials, User } from "../api/types";
import { db } from "@/backend/db";
import { user as user_table } from "../db/schema";
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
