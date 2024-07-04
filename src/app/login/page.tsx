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
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginUser } from "@/backend/services/userSvc";
import { loginSchema } from "@/backend/api/schemas";
import { LoginSchema } from "@/backend/api/types";
import { useRouter } from "next/navigation";

export default function Page() {
  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const router = useRouter();

  // FIX: Sometimes does default form submit behavior
  function onSubmit(values: LoginSchema) {
    loginUser(values).then((token) => {
      if (token) {
        document.cookie = `token=${token}; path=/`;
        router.replace("/dashboard");
      } else {
        form.setError("password", {
          type: "manual",
          message: "Incorrect credentials",
        });
        console.warn("Login not successful");
      }
    });
  }
  return (
    <main className="p-8 flex flex-col items-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 min-w-96 bg-secondary rounded-lg p-4"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel> Email address</FormLabel>
                <FormControl>
                  <Input type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>
      </Form>
    </main>
  );
}
