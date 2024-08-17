"use client";

import { editTitleSchema } from "@/backend/api/schemas";
import { EditTitleSchema } from "@/backend/api/types";
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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { editProfile } from "./actions";

export default function EditProfile({
  name,
  title,
  location,
}: {
  name: string | null;
  title: string | null;
  location: string | null;
}) {
  const form = useForm<EditTitleSchema>({
    resolver: zodResolver(editTitleSchema),
    defaultValues: {
      name: name ? name : "",
      title: title ? title : "",
      location: location ? location : "",
    },
  });
  function onSubmit(values: EditTitleSchema) {
    // NOTE: Add checks in then()
    editProfile(values).then();
    console.log("Submitted", values);
  }
  return (
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
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full name</FormLabel>
              <FormControl>
                <Input type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Location</FormLabel>
              <FormControl>
                <Input type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
