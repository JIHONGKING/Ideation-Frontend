import { Employer } from "../api/types";

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
export async function dbGetEmployerCredentials(username: string) {
  console.info("employerRepo - dbGetEmployerCredentials");
  console.info(username);
}
export async function dbGetEmployer(username: string) {
  console.info("employerRepo - dbGetEmployer");
  console.info(username);
}
export async function dbGetEmployerFields(username: string, fields: string[]) {
  console.info("employerRepo - dbGetEmployerFields");
  console.info(username, fields);
}
