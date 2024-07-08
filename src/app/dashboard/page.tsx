import { getAuthUser } from "@/backend/services/userSvc";
import { Checkbox } from "@/components/ui/checkbox";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const user = await getAuthUser();
  if (!user) {
    redirect("/login");
  }
  return (
    <div className="py-12 px-6 w-full h-full flex flex-col space-y-8">
      <h1 className="font-normal text-3xl text-primary-foreground">
        Welcome, {user.name}
      </h1>
      <main className="flex flex-row gap-[15px] grow h-full">
        <div className="min-w-0 bg-primary-background  shrink basis-[465px] h-full p-4 rounded-sm space-y-5">
          <h1 className="text-xl font-medium text-primary-foreground">
            {" "}
            Strengths & Skills
          </h1>
          <div className="flex flex-col items-center space-y-5">
            <div className="w-full space-y-4">
              <h2 className="text-sm font-normal text-primary-foreground text-opacity-60">
                Key Strengths
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-row items-center space-x-2 min-w-[50%]">
                  <Checkbox id="frontend" />
                  <label
                    htmlFor="frontend"
                    className="text-sm font-light text-primary-foreground"
                  >
                    Frontend Development
                  </label>
                </div>
                <div className="flex flex-row items-center space-x-2 min-w-[50%]">
                  <Checkbox id="management" />
                  <label
                    htmlFor="management"
                    className="text-sm font-light text-primary-foreground"
                  >
                    Project Management
                  </label>
                </div>
                <div className="flex flex-row items-center space-x-2 min-w-[50%]">
                  <Checkbox id="data" />
                  <label
                    htmlFor="data"
                    className="text-sm font-light text-primary-foreground"
                  >
                    Data Analysis
                  </label>
                </div>
              </div>
            </div>
            <div className="w-full space-y-4">
              <h2 className="text-sm font-normal text-primary-foreground text-opacity-60">
                Skills
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-row items-center space-x-2 min-w-[50%]">
                  <Checkbox id="figma" />
                  <label
                    htmlFor="figma"
                    className="text-sm font-light text-primary-foreground"
                  >
                    Figma
                  </label>
                </div>
                <div className="flex flex-row items-center space-x-2 min-w-[50%]">
                  <Checkbox id="prototype" />
                  <label
                    htmlFor="prototype"
                    className="text-sm font-light text-primary-foreground"
                  >
                    Prototyping
                  </label>
                </div>
                <div className="flex flex-row items-center space-x-2 min-w-[50%]">
                  <Checkbox id="react" />
                  <label
                    htmlFor="react"
                    className="text-sm font-light text-primary-foreground"
                  >
                    React
                  </label>
                </div>
                <div className="flex flex-row items-center space-x-2 min-w-[50%]">
                  <Checkbox id="python" />
                  <label
                    htmlFor="python"
                    className="text-sm font-light text-primary-foreground"
                  >
                    Python
                  </label>
                </div>
              </div>
            </div>
            <div className="w-full space-y-4">
              <h2 className="text-sm font-normal text-opacity-60 text-primary-foreground">
                Field (optional)
              </h2>
              <div className="flex flex-row flex-wrap gap-2">
                <div className="p-2 border border-primary-foreground rounded-sm h-[28px] inline-flex items-center">
                  <p className="text-sm font-normal text-primary-foreground">
                    IT
                  </p>
                </div>
                <div className="p-2 border border-primary-foreground rounded-sm h-[28px] inline-flex items-center">
                  <p className="text-sm font-normal text-primary-foreground">
                    Education
                  </p>
                </div>
                <div className="p-2 border border-primary-foreground rounded-sm h-[28px] inline-flex items-center">
                  <p className="text-sm font-normal text-primary-foreground">
                    Automation
                  </p>
                </div>
                <div className="p-2 border border-primary-foreground rounded-sm h-[28px] inline-flex items-center">
                  <p className="text-sm font-normal text-primary-foreground">
                    Engineering
                  </p>
                </div>
                <div className="p-2 border border-primary-foreground rounded-sm h-[28px] inline-flex items-center">
                  <p className="text-sm font-normal text-primary-foreground">
                    Media and Entertainment
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="min-w-0 bg-primary-background  shrink basis-[465px] h-full p-4 rounded-sm">
          <h1 className="text-xl font-medium text-primary-foreground">
            Recommended Jobs
          </h1>
        </div>
        <div className="min-w-0 flex flex-col shrink basis-[465px] h-full space-y-[15px]">
          <div className="w-full bg-primary-background p-4 rounded-sm">
            <h1 className="text-base font-normal text-primary-foreground">
              Your profile is 80% Complete
            </h1>
          </div>
          <div className="w-full bg-primary-background p-4 rounded-sm">
            <h1 className="text-xl font-medium text-primary-foreground">
              Application Status
            </h1>
          </div>
        </div>
      </main>
    </div>
  );
}
