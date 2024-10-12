CREATE TABLE IF NOT EXISTS "degree" (
	"id" serial PRIMARY KEY NOT NULL,
	"level" varchar NOT NULL,
	"name" varchar NOT NULL,
	"education_id" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "education" (
	"id" serial PRIMARY KEY NOT NULL,
	"school" varchar NOT NULL,
	"start_date" varchar,
	"end_date" varchar,
	"user_id" integer
);
--> statement-breakpoint
ALTER TABLE "experience" ALTER COLUMN "company" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "experience" ADD COLUMN "type" varchar;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "location" varchar;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "title" varchar;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "about" text;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "degree" ADD CONSTRAINT "degree_education_id_education_id_fk" FOREIGN KEY ("education_id") REFERENCES "public"."education"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "education" ADD CONSTRAINT "education_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
