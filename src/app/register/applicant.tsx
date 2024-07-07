"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { createUser } from "@/backend/services/userSvc";
import { registerUserSchema } from "@/backend/api/schemas";
import { RegisterUserSchema } from "@/backend/api/types";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { GoogleLogin } from "@react-oauth/google";
import { TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Page() {
  const form = useForm<RegisterUserSchema>({
    resolver: zodResolver(registerUserSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    mode: "onTouched",
  });
  const router = useRouter();

  function onSubmit(values: RegisterUserSchema) {
    createUser(values).then((success) =>
      success
        ? router.replace("/login")
        : console.warn("Registering was unsuccessful."),
    );
  }
  return (
    <main className="flex flex-row min-h-screen">
      <section className="w-[808px] max-w-[50%] bg-gradient-to-t from-primary to-primary-background flex flex-col items-center text-center pt-44 pb-20 shadow-md">
        <h1 className="text-4xl font-bold w-[456px]">
          Join CareerBridge AI and{" "}
          <p className="text-primary-darker">Find Your Dream Job!</p>
        </h1>
        <TabsList className="mt-auto w-[276px] h-[43px] rounded-sm space-x-1">
          <TabsTrigger
            value="employer"
            className="data-[state=active]:bg-primary-darkest data-[state=active]:text-primary-background text-lg font-light data-[state=active]:font-normal w-1/2 py-0 h-full"
          >
            Employer
          </TabsTrigger>
          <TabsTrigger
            value="jobseeker"
            className="data-[state=active]:bg-primary-darkest data-[state=active]:text-primary-background text-lg font-light data-[state=active]:font-normal w-1/2 py-0 h-full"
          >
            <p className="">Job seeker</p>
          </TabsTrigger>
        </TabsList>
      </section>
      <section className="flex flex-col items-center min-w-[50%] justify-center space-y-[56px]">
        <h1 className="text-2xl font-normal">Join as job seeker</h1>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-[56px] min-w-96 flex flex-col items-center"
          >
            <div className="space-y-[18px]">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Full Name"
                        className="bg-primary-background-light rounded-sm w-[465px] h-[50px] border-0 font-light text-base px-7 text-opacity-60"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Email Address"
                        className="bg-primary-background-light rounded-sm w-[465px] h-[50px] border-0 font-light text-base px-7 text-opacity-60"
                        {...field}
                      />
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
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Password"
                        className="bg-primary-background-light rounded-sm w-[465px] h-[50px] border-0 font-light text-base px-7 text-opacity-60"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Confirm Password"
                        className="bg-primary-background-light rounded-sm w-[465px] h-[50px] border-0 font-light text-base px-7 text-opacity-60"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="w-[345px] flex flex-col items-center space-y-[14px]">
              <Button type="submit" className="w-full h-[50px] rounded-sm">
                <p className="text-base font-normal text-primary-background">
                  Sign Up
                </p>
              </Button>
              <p className="text-sm text-primary-foreground text-opacity-60 font-light">
                Already have an account?{" "}
                <Link href="/login" className="font-normal text-primary">
                  Login
                </Link>
              </p>
              <p className="text-xl my-24">Or</p>
              <GoogleLogin
                onSuccess={(r) => console.log(r)}
                onError={() => console.warn("Error")}
                size="large"
                useOneTap
              ></GoogleLogin>
              {/* <Link href="" className="w-full"> */}
              {/*   <Button className="w-full h-[50px] rounded-sm bg-primary-background border-2 border-primary-foreground border-opacity-60"> */}
              {/*     Sign in with LinkedIn */}
              {/*   </Button> */}
              {/* </Link> */}
            </div>
          </form>
        </Form>
      </section>
    </main>
  );
}
