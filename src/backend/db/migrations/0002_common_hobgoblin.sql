CREATE TABLE IF NOT EXISTS "experience" (
	"id" serial PRIMARY KEY NOT NULL,
	"position" varchar,
	"company" varchar
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "job_skill" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar NOT NULL,
	"job_id" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user_notification" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar NOT NULL,
	"content" varchar NOT NULL,
	"href" varchar,
	"read" boolean DEFAULT false,
	"user_id" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user_skill" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar NOT NULL,
	"user_id" integer
);
--> statement-breakpoint
ALTER TABLE "employer" ADD COLUMN "profile_pic_uuid" varchar;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "profile_pic_uuid" varchar;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "job_skill" ADD CONSTRAINT "job_skill_job_id_job_id_fk" FOREIGN KEY ("job_id") REFERENCES "public"."job"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_notification" ADD CONSTRAINT "user_notification_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_skill" ADD CONSTRAINT "user_skill_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
