"use server";

import { Credentials, User } from "@/backend/api/types";
import {
  dbCreateUser,
  dbDeleteUser,
  dbEditUser,
  dbGetUserCredentials,
  dbGetUserByEmail,
  dbGetUserFields,
  dbGetUserById,
  dbGetUserDashboard,
  dbGetUserProfile,
} from "../repository/userRepo";
import { RegisterUserSchema } from "@/backend/api/types";
import { registerUserSchema } from "@/backend/api/schemas";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
import { cookies } from "next/headers";

dotenv.config({ path: ".env.dev" });

const saltRounds = 10;

export async function createUser(user: RegisterUserSchema) {
  console.info("userSvc - createUser");
  console.info(user);
  try {
    await registerUserSchema.parseAsync(user);
    const hashed_password = await bcrypt.hash(user.password, saltRounds);
    const updatedUser = user as User;
    updatedUser.password = hashed_password;
    await dbCreateUser(updatedUser);
    return true;
  } catch (e) {
    console.warn(e);
    return false;
  }
}
// TODO: Test
export async function deleteUser(username: string) {
  console.info("userSvc - deleteUser");
  console.info(username);
  try {
    await dbDeleteUser(username);
  } catch (e) {
    console.warn(e);
  }
}
// TODO: Test
export async function editUser(user: User) {
  console.info("userSvc - editUser");
  console.info(user);
  try {
    await dbEditUser(user);
  } catch (e) {
    console.warn(e);
  }
}
// TODO: Test
export async function getUser(email: string) {
  console.info("userSvc - getUser");
  console.info(email);
  try {
    return await dbGetUserByEmail(email);
  } catch (e) {
    console.warn(e);
  }
}

export async function userEmailExists(email: string) {
  console.info("userSvc - userEmailExists");
  console.info(email);
  try {
    const user = await dbGetUserByEmail(email);
    console.log(user);
    if (user.length) {
      return true;
    }
    return false;
  } catch (e) {
    return false;
  }
}
// TODO: Test
export async function getUserAttr(username: string, attr: string[]) {
  console.info("userSvc - getUserAttr");
  console.info(username, attr);
  try {
    return await dbGetUserFields(username, attr);
  } catch (e) {
    console.warn(e);
  }
}
async function authUser(email: string, password: string) {
  const results = await dbGetUserCredentials(email);
  if (results.length != 1) {
    throw new Error("User does not exist");
  }
  const hashed_password = results[0].password;
  const success = await bcrypt.compare(password, hashed_password);
  if (success) {
    return (await dbGetUserByEmail(email))[0];
  } else {
    throw new Error("Invalid credentials");
  }
}
export async function loginUser(credentials: Credentials) {
  console.info("userSvc - loginUser");
  console.info(credentials);
  try {
    const user = await authUser(credentials.email, credentials.password);
    if (!user) {
      throw new Error("Login failed");
    }
    const jwt_secret = process.env.JWT_SECRET;
    if (!jwt_secret) {
      throw new Error("No JWT_SECRET defined");
    }
    const token = jwt.sign({ userId: user.id }, jwt_secret, {
      expiresIn: "60m",
    });
    const nextCookies = cookies();
    nextCookies.set("token", token, { httpOnly: true });
    return true;
  } catch (e) {
    console.warn(e);
    return false;
  }
}
// export async function getAuthUser(): Promise<User | null> {
//   console.info("userSvc - getAuthUser");
//   const nextCookies = cookies();
//   const token = nextCookies.get("token")?.value;
//   console.info(token);
//   if (!token) {
//     return null;
//   }
//   const jwt_secret = process.env.JWT_SECRET;
//   if (!jwt_secret) {
//     throw new Error("No JWT_SECRET defined");
//   }
//   try {
//     const decoded = jwt.verify(token, jwt_secret);
//     console.log("decoded:", decoded);
//     return (await dbGetUserById(decoded.userId))[0];
//   } catch (e) {
//     console.info(e);
//     return null;
//   }
// }

export async function getAuthId(): Promise<number | null> {
  console.info("userSvc - getAuthId");
  const nextCookies = cookies();
  const token = nextCookies.get("token")?.value;
  console.info(token);
  if (!token) {
    return null;
  }
  const jwt_secret = process.env.JWT_SECRET;
  if (!jwt_secret) {
    throw new Error("No JWT_SECRET defined");
  }
  try {
    const decoded = jwt.verify(token, jwt_secret);
    return decoded.userId;
  } catch (e) {
    console.info(e);
    return null;
  }
}
export async function logoutUser() {
  console.info("userSvc - logoutUser");
  try {
    const nextCookies = cookies();
    nextCookies.delete("token");
  } catch (e) {
    console.warn(e);
  }
}

// INFO: Currently not possible with Token based auth
export async function logoutEverywhereUser(username: string) {
  console.info("userSvc - logoutEverywhereUser");
  console.info(username);
  try {
    // TODO: Logout everywhere logic here
  } catch (e) {
    console.warn(e);
  }
}

export async function getUserDashboard(id: number) {
  console.info("userSvc - getUserDashboard");
  return await dbGetUserDashboard(id);
}

export async function getUserProfile(id: number) {
  console.info("userSvc - getUserProfile");
  return await dbGetUserProfile(id);
}

export async function updateUserResume(formData: FormData) {
  console.info("userSvc - updateUserResume");
  console.info(formData);
  const response = await fetch(`${process.env.BACKEND_ADDRESS}`, {
    method: "POST",
    body: formData,
  });
  const json = await response.json();
  console.log(json);
}
