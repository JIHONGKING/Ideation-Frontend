import { Job } from "@/backend/api/types";
import {
  dbCreateJob,
  dbDeleteJob,
  dbEditJob,
  dbGetJob,
  dbGetJobFields,
} from "../repository/jobRepo";

export async function createJob(job: Job) {
  console.info("jobSvc - createJob");
  console.info(job);
  try {
    // TODO: Validate job here
    await dbCreateJob(job);
  } catch (e) {
    console.warn(e);
  }
}
export async function deleteJob(uuid: string) {
  console.info("jobSvc - deleteJob");
  console.info(uuid);
  try {
    await dbDeleteJob(uuid);
  } catch (e) {
    console.warn(e);
  }
}
export async function editJob(job: Job) {
  console.info("jobSvc - editJob");
  console.info(job);
  try {
    await dbEditJob(job);
  } catch (e) {
    console.warn(e);
  }
}
export async function getJob(uuid: string) {
  console.info("jobSvc - getJob");
  console.info(uuid);
  try {
    return await dbGetJob(uuid);
  } catch (e) {
    console.warn(e);
  }
}
export async function getJobAttr(uuid: string, attr: string[]) {
  console.info("jobSvc - getJobAttr");
  console.info(uuid, attr);
  try {
    return await dbGetJobFields(uuid, attr);
  } catch (e) {
    console.warn(e);
  }
}
