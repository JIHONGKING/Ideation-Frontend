CREATE TABLE IF NOT EXISTS "session" (
	"uuid" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" integer,
	"created_at" date NOT NULL
);
--> statement-breakpoint
ALTER TABLE "experience" ADD COLUMN "start_date" varchar;--> statement-breakpoint
ALTER TABLE "experience" ADD COLUMN "end_date" varchar;--> statement-breakpoint
ALTER TABLE "job" ADD COLUMN "location" varchar;--> statement-breakpoint
ALTER TABLE "job" ADD COLUMN "date" date;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "session" ADD CONSTRAINT "session_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
