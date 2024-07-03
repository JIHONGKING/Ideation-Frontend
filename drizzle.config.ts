import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.dev" });

if (!process.env.DB_NAME) throw new Error("DB_NAME is not set");
if (!process.env.DB_USER) throw new Error("DB_USER is not set");
if (!process.env.DB_PASSWORD) throw new Error("DB_PASSWORD is not set");
if (!process.env.DB_PORT) throw new Error("DB_PORT is not set");
if (!process.env.DB_HOST) throw new Error("DB_HOST is not set");

export default {
  schema: "./src/backend/db/schema.ts",
  out: "./src/backend/db/migrations",
  dialect: "postgresql",
  dbCredentials: {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    database: process.env.DB_NAME,
    ssl: false,
  },
} satisfies Config;
