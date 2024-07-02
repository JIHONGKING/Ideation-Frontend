import { User } from "../api/types";
import { db } from "@/backend/db";

export async function dbCreateUser(user: User) {
  console.info("userRepo - dbCreateUser");
  console.info(user);
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
}
export async function dbGetUserFields(username: string, attr: string[]) {
  console.info("userRepo - dbGetUserFields");
  console.info(username, attr);
}
