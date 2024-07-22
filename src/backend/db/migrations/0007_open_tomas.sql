ALTER TABLE "degree" DROP CONSTRAINT "degree_education_id_education_id_fk";
--> statement-breakpoint
ALTER TABLE "education" DROP CONSTRAINT "education_user_id_user_id_fk";
--> statement-breakpoint
ALTER TABLE "experience" DROP CONSTRAINT "experience_user_id_user_id_fk";
--> statement-breakpoint
ALTER TABLE "job_skill" DROP CONSTRAINT "job_skill_job_id_job_id_fk";
--> statement-breakpoint
ALTER TABLE "user_field" DROP CONSTRAINT "user_field_user_id_user_id_fk";
--> statement-breakpoint
ALTER TABLE "user_notification" DROP CONSTRAINT "user_notification_user_id_user_id_fk";
--> statement-breakpoint
ALTER TABLE "user_skill" DROP CONSTRAINT "user_skill_user_id_user_id_fk";
--> statement-breakpoint
ALTER TABLE "user_strength" DROP CONSTRAINT "user_strength_user_id_user_id_fk";
--> statement-breakpoint
ALTER TABLE "degree" ALTER COLUMN "education_id" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "education" ALTER COLUMN "user_id" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "experience" ALTER COLUMN "user_id" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "job" ALTER COLUMN "employer_id" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "job_skill" ALTER COLUMN "job_id" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "user_field" ALTER COLUMN "user_id" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "user_notification" ALTER COLUMN "user_id" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "user_skill" ALTER COLUMN "user_id" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "user_strength" ALTER COLUMN "user_id" SET NOT NULL;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "degree" ADD CONSTRAINT "degree_education_id_education_id_fk" FOREIGN KEY ("education_id") REFERENCES "public"."education"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "education" ADD CONSTRAINT "education_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "experience" ADD CONSTRAINT "experience_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "job_skill" ADD CONSTRAINT "job_skill_job_id_job_id_fk" FOREIGN KEY ("job_id") REFERENCES "public"."job"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_field" ADD CONSTRAINT "user_field_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_notification" ADD CONSTRAINT "user_notification_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_skill" ADD CONSTRAINT "user_skill_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_strength" ADD CONSTRAINT "user_strength_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
