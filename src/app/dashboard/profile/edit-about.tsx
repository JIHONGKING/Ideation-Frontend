"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  about: z.string().max(800, { message: "Maximum length is 500 characters." }),
});

export default function EditAbout({ curAbout }: { curAbout: string | null }) {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      about: curAbout ? curAbout : "",
    },
  });
  function onSubmit(values: z.infer<typeof schema>) {
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
          name="about"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                About section<p className="font-thin">(500 characters max)</p>
              </FormLabel>
              <FormControl>
                <Textarea
                  className="w-full min-h-[200px] text-base"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
