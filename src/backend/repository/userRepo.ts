import { User } from "../api/types";
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
export async function dbGetUserCredentials(username: string) {
  console.info("userRepo - dbGetUserCredentials");
  console.info(username);
}
export async function dbGetUser(username: string) {
  console.info("userRepo - dbGetUser");
  console.info(username);
  return await db
    .select()
    .from(user_table)
    .where(eq(user_table.username, username));
}
export async function dbGetUserFields(username: string, attr: string[]) {
  console.info("userRepo - dbGetUserFields");
  console.info(username, attr);
}
