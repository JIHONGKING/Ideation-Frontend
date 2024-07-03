"use server";

import { Employer, Credentials } from "@/backend/api/types";
import {
  dbCreateEmployer,
  dbDeleteEmployer,
  dbGetEmployerCredentials,
  dbEditEmployer,
  dbGetEmployer,
  dbGetEmployerFields,
} from "../repository/employerRepo";

export async function createEmployer(employer: Employer) {
  console.info("employerSvc - createEmployer");
  console.info(employer);
  try {
    // TODO: Check employer fields here
    await dbCreateEmployer(employer);
  } catch (e) {
    console.log(e);
  }
}
export async function deleteEmployer(username: string) {
  console.info("employerSvc - deleteEmployer");
  console.info(username);
  try {
    await dbDeleteEmployer(username);
  } catch (e) {
    console.log(e);
  }
}
export async function editEmployer(employer: Employer) {
  console.info("employerSvc - editEmployer");
  console.info(employer);
  try {
    await dbEditEmployer(employer);
  } catch (e) {
    console.log(e);
  }
}
export async function getEmployer(username: string) {
  console.info("employerSvc - getEmployer");
  console.info(username);
  try {
    return await dbGetEmployer(username);
  } catch (e) {
    console.log(e);
  }
}
export async function getEmployerAttr(username: string, attr: string[]) {
  console.info("employerSvc - getEmployerAttr");
  console.info(username, attr);
  try {
    return await dbGetEmployerFields(username, attr);
  } catch (e) {
    console.log(e);
  }
}
export async function loginEmployer(credentials: Credentials) {
  console.info("employerSvc - loginEmployer");
  console.info(credentials);
  try {
    const creds = await dbGetEmployerCredentials(credentials.username);
    // TODO: Login logic here
  } catch (e) {
    console.log(e);
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
