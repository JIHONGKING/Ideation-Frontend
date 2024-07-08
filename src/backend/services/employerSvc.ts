"use server";

import {
  Employer,
  Credentials,
  RegisterEmployerSchema,
} from "@/backend/api/types";
import { registerEmployerSchema } from "@/backend/api/schemas";
import {
  dbCreateEmployer,
  dbDeleteEmployer,
  dbGetEmployerCredentials,
  dbEditEmployer,
  dbGetEmployerFields,
  dbGetEmployerByEmail,
} from "../repository/employerRepo";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const saltRounds = 10;

export async function createEmployer(employer: RegisterEmployerSchema) {
  console.info("employerSvc - createEmployer");
  console.info(employer);
  try {
    await registerEmployerSchema.parseAsync(employer);
    const hashed_password = await bcrypt.hash(employer.password, saltRounds);
    const updatedEmployer = employer as Employer;
    updatedEmployer.password = hashed_password;
    await dbCreateEmployer(updatedEmployer);
    return true;
  } catch (e) {
    console.warn(e);
    return false;
  }
}

// TODO: Test
export async function deleteEmployer(username: string) {
  console.info("employerSvc - deleteEmployer");
  console.info(username);
  try {
    await dbDeleteEmployer(username);
  } catch (e) {
    console.log(e);
  }
}
// TODO: Test
export async function editEmployer(employer: Employer) {
  console.info("employerSvc - editEmployer");
  console.info(employer);
  try {
    await dbEditEmployer(employer);
  } catch (e) {
    console.log(e);
  }
}
export async function employerEmailExists(email: string) {
  console.info("employerSvc - employerEmailExists");
  console.info(email);
  try {
    const employer = await dbGetEmployerByEmail(email);
    console.log(employer);
    if (employer.length) {
      return true;
    }
    return false;
  } catch (e) {
    return false;
  }
}
export async function getEmployer(email: string) {
  console.info("employerSvc - getEmployer");
  console.info();
  try {
    return await dbGetEmployerByEmail(email);
  } catch (e) {
    console.log(e);
  }
}

// TODO: TEST
export async function getEmployerAttr(username: string, attr: string[]) {
  console.info("employerSvc - getEmployerAttr");
  console.info(username, attr);
  try {
    return await dbGetEmployerFields(username, attr);
  } catch (e) {
    console.log(e);
  }
}
async function authEmployer(email: string, password: string) {
  const results = await dbGetEmployerCredentials(email);
  if (results.length != 1) {
    throw new Error("User does not exist");
  }
  const hashed_password = results[0].password;
  const success = await bcrypt.compare(password, hashed_password);
  if (success) {
    return (await dbGetEmployerByEmail(email))[0];
  } else {
    throw new Error("Invalid credentials");
  }
}

export async function loginEmployer(credentials: Credentials) {
  console.info("employerSvc - loginEmployer");
  console.info(credentials);
  try {
    const employer = await authEmployer(
      credentials.email,
      credentials.password,
    );
    if (!employer) {
      throw new Error("Login failed");
    }
    const jwt_secret = process.env.JWT_SECRET;
    if (!jwt_secret) {
      throw new Error("No JWT_SECRET defined");
    }
    return jwt.sign({ employerId: employer.id }, jwt_secret, {
      expiresIn: "60m",
    });
  } catch (e) {
    console.warn(e);
    return null;
  }
}
export async function logoutUser(sessionid: string) {
  console.info("employerSvc - logoutEmployer");
  console.info(sessionid);
  try {
    // TODO: Logout logic here
  } catch (e) {
    console.log(e);
  }
}
export async function logoutEverywhereUser(username: string) {
  console.info("employerSvc - logoutEverywhereEmployer");
  console.info(username);
  try {
    // TODO: Logout everywhere logic here
  } catch (e) {
    console.log(e);
  }
}
