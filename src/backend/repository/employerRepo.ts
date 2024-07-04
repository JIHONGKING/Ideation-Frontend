import { Employer } from "../api/types";
import { db } from "@/backend/db";
import { employer as employer_table } from "../db/schema";
import { eq } from "drizzle-orm";

export async function dbCreateEmployer(employer: Employer) {
  console.info("employerRepo - dbCreateEmployer");
  console.info(employer);
}
export async function dbDeleteEmployer(username: string) {
  console.info("employerRepo - dbDeleteEmployer");
  console.info(username);
}
export async function dbEditEmployer(employer: Employer) {
  console.info("employerRepo - dbEditEmployer");
  console.info(employer);
}
export async function dbGetEmployerCredentials(email: string) {
  console.info("employerRepo - dbGetEmployerCredentials");
  console.info(email);
}
export async function dbGetEmployer(username: string) {
  console.info("employerRepo - dbGetEmployer");
  console.info(username);
}
export async function dbGetEmployerByEmail(email: string) {
  console.info("employerRepo - dbGetEmployerByEmail");
  console.info(email);
  return await db
    .select()
    .from(employer_table)
    .where(eq(employer_table.email, email));
}
export async function dbGetEmployerFields(username: string, fields: string[]) {
  console.info("employerRepo - dbGetEmployerFields");
  console.info(username, fields);
}
