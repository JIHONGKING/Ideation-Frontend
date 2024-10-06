"use client";

import { editExperienceSchema } from "@/backend/api/schemas";
import { EditExperienceSchema, Experience } from "@/backend/api/types";
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

export default function EditExperience({
  experiences,
}: {
  experiences: Experience[];
}) {
  const form = useForm<EditExperienceSchema>({
    resolver: zodResolver(editExperienceSchema),
    defaultValues: {
      experiences: experiences.map((exp) => {
        return {
          position: exp.position ? exp.position : "",
          company: exp.company,
          start_date: exp.start_date ? exp.start_date : "",
          end_date: exp.end_date ? exp.end_date : "",
          type: exp.type ? exp.type : "",
        };
      }),
    },
  });
  const {
    fields: exps,
    append,
    remove,
  } = useFieldArray({ name: "experiences", control: form.control });
  function onSubmit(values: EditExperienceSchema) {
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
            {exps.map((field, idx) => (
              <div key={idx} className="mb-4 border-b-2 py-4">
                <Button
                  onClick={() => remove(idx)}
                  variant="destructive"
                  className="text-sm"
                >
                  Delete
                </Button>
                <FormField
                  control={form.control}
                  name={`experiences.${idx}.position`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Position</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`experiences.${idx}.company`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`experiences.${idx}.start_date`}
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
                  name={`experiences.${idx}.end_date`}
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
                  name={`experiences.${idx}.type`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Type</FormLabel>
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
                append({
                  position: "",
                  company: "",
                  start_date: "",
                  end_date: "",
                  type: "",
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
