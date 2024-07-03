import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.dev" });

if (!process.env.DB_NAME) throw new Error("DB_NAME is not set");
if (!process.env.DB_USER) throw new Error("DB_USER is not set");
if (!process.env.DB_PASSWORD) throw new Error("DB_PASSWORD is not set");
if (!process.env.DB_PORT) throw new Error("DB_PORT is not set");
if (!process.env.DB_HOST) throw new Error("DB_HOST is not set");

const client = new Client({
  host: process.env.DB_HOST,
  port: 5432,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

client.connect();
export const db = drizzle(client);
