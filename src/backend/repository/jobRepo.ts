import { Job } from "@/backend/api/types";
import { db } from "@/backend/db";

export async function dbCreateJob(job: Job) {
  console.info("jobRepo - dbCreateJob");
  console.info(job);
}
export async function dbDeleteJob(uuid: string) {
  console.info("jobRepo - dbDeleteJob");
  console.info(uuid);
}
export async function dbEditJob(job: Job) {
  console.info("jobRepo - dbEditJob");
  console.info(job);
}
export async function dbGetJob(uuid: string) {
  console.info("jobRepo - dbGetJob");
  console.info(uuid);
}
export async function dbGetJobFields(uuid: string, attr: string[]) {
  console.info("jobRepo - dbGetJobFields");
  console.info(uuid, attr);
}
