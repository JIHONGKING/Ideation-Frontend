"use client";

import { editEducationSchema } from "@/backend/api/schemas";
import { EditEducationSchema, Education } from "@/backend/api/types";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import { editEducation } from "./actions";

export default function EditEducation({
  education,
}: {
  education: Education[];
}) {
  const form = useForm<EditEducationSchema>({
    resolver: zodResolver(editEducationSchema),
    defaultValues: {
      education: education.map((edu) => {
        return {
          school: edu.school,
          start_date: edu.start_date ? edu.start_date : "",
          end_date: edu.end_date ? edu.end_date : "",
          degrees:
            edu.degrees && edu.degrees.length > 0
              ? {
                  name: edu.degrees[0].name,
                  level: edu.degrees[0].level ? edu.degrees[0].level : "",
                }
              : { name: "", level: "" },
        };
      }),
    },
  });
  const {
    fields: edus,
    append: appendEdu,
    remove: removeEdu,
  } = useFieldArray({ name: "education", control: form.control });
  function onSubmit(values: EditEducationSchema) {
    // NOTE: Add checks to then()
    editEducation(values).then();
    console.log("Submitted", values);
  }
  return (
    <ScrollArea className="h-[800px]">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
          <Button
            type="submit"
            className="bg-primary-darkest text-white px-5 py-2 min-w-0 w-min"
          >
            Save changes
          </Button>
          <div className="space-y-1">
            {edus.map((field, idx) => (
              <div key={idx} className="mb-4 border-b-2 py-4">
                <Button
                  onClick={() => removeEdu(idx)}
                  variant="destructive"
                  className="text-sm"
                >
                  Delete
                </Button>
                <FormField
                  control={form.control}
                  name={`education.${idx}.school`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>School</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`education.${idx}.start_date`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Start Date</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`education.${idx}.end_date`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>End Date</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`education.${idx}.degrees.level`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Degree level</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`education.${idx}.degrees.name`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Degree name</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            ))}
            <Button
              onClick={() =>
                appendEdu({
                  school: "",
                  start_date: "",
                  end_date: "",
                  degrees: [{ level: "", name: "" }],
                })
              }
              className="text-white mt-4"
            >
              Add position
            </Button>
          </div>
        </form>
      </Form>
    </ScrollArea>
  );
}
