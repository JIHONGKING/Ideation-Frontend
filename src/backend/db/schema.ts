import { relations } from "drizzle-orm";
import {
  pgTable,
  serial,
  varchar,
  integer,
  uuid,
  text,
  boolean,
  date,
} from "drizzle-orm/pg-core";

export const user = pgTable("user", {
  id: serial("id").primaryKey(),
  name: varchar("name").notNull(),
  email: varchar("email").notNull(),
  password: varchar("password").notNull(),
  profilePicUuid: varchar("profile_pic_uuid"),
  location: varchar("location"),
  title: varchar("title"),
  about: text("about"),
});

export const userRelation = relations(user, ({ many }) => ({
  notifications: many(userNotification),
  skills: many(userSkill),
  strengths: many(userStrength),
  fields: many(userField),
  experiences: many(experience),
  education: many(education),
}));

export const userSkill = pgTable("user_skill", {
  id: serial("id").primaryKey(),
  name: varchar("name").notNull(),
  userId: integer("user_id").references(() => user.id),
});

export const skillRelation = relations(userSkill, ({ one }) => ({
  user: one(user, {
    fields: [userSkill.userId],
    references: [user.id],
  }),
}));

export const userStrength = pgTable("user_strength", {
  id: serial("id").primaryKey(),
  name: varchar("name").notNull(),
  userId: integer("user_id").references(() => user.id),
});

export const strengthRelation = relations(userStrength, ({ one }) => ({
  user: one(user, {
    fields: [userStrength.userId],
    references: [user.id],
  }),
}));

export const userField = pgTable("user_field", {
  id: serial("id").primaryKey(),
  name: varchar("name").notNull(),
  userId: integer("user_id").references(() => user.id),
});
export const fieldRelation = relations(userField, ({ one }) => ({
  user: one(user, {
    fields: [userField.userId],
    references: [user.id],
  }),
}));

export const userNotification = pgTable("user_notification", {
  id: serial("id").primaryKey(),
  title: varchar("title").notNull(),
  content: varchar("content").notNull(),
  href: varchar("href"),
  read: boolean("read").default(false),
  userId: integer("user_id").references(() => user.id),
});
export const notificationRelation = relations(userNotification, ({ one }) => ({
  user: one(user, {
    fields: [userNotification.userId],
    references: [user.id],
  }),
}));

export const experience = pgTable("experience", {
  id: serial("id").primaryKey(),
  position: varchar("position"),
  company: varchar("company").notNull(),
  startDate: varchar("start_date"),
  endDate: varchar("end_date"),
  type: varchar("type"),
  userId: integer("user_id").references(() => user.id),
});
export const experienceRelation = relations(experience, ({ one }) => ({
  user: one(user, {
    fields: [experience.userId],
    references: [user.id],
  }),
}));

export const education = pgTable("education", {
  id: serial("id").primaryKey(),
  school: varchar("school").notNull(),
  startDate: varchar("start_date"),
  endDate: varchar("end_date"),
  userId: integer("user_id").references(() => user.id),
});
export const educationRelation = relations(education, ({ one, many }) => ({
  user: one(user, {
    fields: [education.userId],
    references: [user.id],
  }),
  degrees: many(degree),
}));

export const degree = pgTable("degree", {
  id: serial("id").primaryKey(),
  level: varchar("level").notNull(),
  name: varchar("name").notNull(),
  educationId: integer("education_id").references(() => education.id),
});
export const degreeRelation = relations(degree, ({ one }) => ({
  education: one(education, {
    fields: [degree.educationId],
    references: [education.id],
  }),
}));

export const employer = pgTable("employer", {
  id: serial("id").primaryKey(),
  name: varchar("name").notNull(),
  email: varchar("email").notNull(),
  password: varchar("password").notNull(),
  profilePicUuid: varchar("profile_pic_uuid"),
});

export const job = pgTable("job", {
  id: serial("id").primaryKey(),
  uuid: uuid("uuid").defaultRandom(),
  name: varchar("name").notNull(),
  employerId: integer("employer_id").references(() => employer.id),
  description: text("description"),
  location: varchar("location"),
  date: date("date"),
});

export const jobSkill = pgTable("job_skill", {
  id: serial("id").primaryKey(),
  name: varchar("name").notNull(),
  jobId: integer("job_id").references(() => job.id),
});
