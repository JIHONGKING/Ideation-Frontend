"use server";

import { Credentials, User } from "@/backend/api/types";
import {
  dbCreateUser,
  dbDeleteUser,
  dbEditUser,
  dbGetUserCredentials,
  dbGetUser,
  dbGetUserFields,
} from "../repository/userRepo";
import { RegisterSchema } from "@/backend/api/types";
import { registerSchema } from "@/backend/api/schemas";
import bcrypt from "bcrypt";

const saltRounds = 10;

export async function createUser(user: RegisterSchema) {
  console.info("userSvc - createUser");
  console.info(user);
  try {
    await registerSchema.parseAsync(user);
    const hashed_password = await bcrypt.hash(user.password, saltRounds);
    const updatedUser = user as User;
    updatedUser.password = hashed_password;
    await dbCreateUser(updatedUser);
  } catch (e) {
    console.warn(e);
    throw e;
  }
}
export async function deleteUser(username: string) {
  console.info("userSvc - deleteUser");
  console.info(username);
  try {
    await dbDeleteUser(username);
  } catch (e) {
    console.warn(e);
  }
}
export async function editUser(user: User) {
  console.info("userSvc - editUser");
  console.info(user);
  try {
    await dbEditUser(user);
  } catch (e) {
    console.warn(e);
  }
}
export async function getUser(username: string) {
  console.info("userSvc - getUser");
  console.info(username);
  try {
    return await dbGetUser(username);
  } catch (e) {
    console.warn(e);
  }
}

export async function usernameExists(username: string) {
  console.info("userSvc - usernameExists");
  console.info(username);
  try {
    const user = await dbGetUser(username);
    console.log(user);
    if (user.length) {
      return true;
    }
    return false;
  } catch (e) {
    return false;
  }
}
export async function getUserAttr(username: string, attr: string[]) {
  console.info("userSvc - getUserAttr");
  console.info(username, attr);
  try {
    return await dbGetUserFields(username, attr);
  } catch (e) {
    console.warn(e);
  }
}
export async function loginUser(credentials: Credentials) {
  console.info("userSvc - loginUser");
  console.info(credentials);
  try {
    const creds = await dbGetUserCredentials(credentials.username);
    // TODO: Login logic here
  } catch (e) {
    console.warn(e);
  }
}
export async function logoutUser(sessionid: string) {
  console.info("userSvc - logoutUser");
  console.info(sessionid);
  try {
    // TODO: Logout logic here
  } catch (e) {
    console.warn(e);
  }
}
export async function logoutEverywhereUser(username: string) {
  console.info("userSvc - logoutEverywhereUser");
  console.info(username);
  try {
    // TODO: Logout everywhere logic here
  } catch (e) {
    console.warn(e);
  }
}
