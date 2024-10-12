ALTER TABLE "employer" ADD COLUMN "name" varchar NOT NULL;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "name" varchar NOT NULL;--> statement-breakpoint
ALTER TABLE "employer" DROP COLUMN IF EXISTS "username";--> statement-breakpoint
ALTER TABLE "employer" DROP COLUMN IF EXISTS "first_name";--> statement-breakpoint
ALTER TABLE "employer" DROP COLUMN IF EXISTS "last_name";--> statement-breakpoint
ALTER TABLE "user" DROP COLUMN IF EXISTS "username";--> statement-breakpoint
ALTER TABLE "user" DROP COLUMN IF EXISTS "first_name";--> statement-breakpoint
ALTER TABLE "user" DROP COLUMN IF EXISTS "last_name";