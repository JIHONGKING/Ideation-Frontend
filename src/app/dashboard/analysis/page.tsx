import { getAuthId, getUserAnalysis } from "@/backend/services/userSvc";
import { Checkbox } from "@/components/ui/checkbox";
import { Toggle } from "@/components/ui/toggle";
import { ToggleGroup } from "@/components/ui/toggle-group";
import { redirect } from "next/navigation";
import Chart from "./chart";

export default async function Analysis() {
  const userid = await getAuthId();
  if (!userid) {
    redirect("/login");
  }
  const user = await getUserAnalysis(userid);
  if (!user) {
    redirect("/login");
  }
  const response = await fetch(`${process.env.BACKEND_ADDRESS}/jobs/data`, {
    method: "GET",
  });
  const data = await response.json();

  return (
    <div className="space-y-8 h-full max-h-full flex flex-col">
      <h1 className="font-normal text-3xl text-primary-foreground">
        AI Analysis
      </h1>
      <div className="flex flex-row grow gap-[15px] h-full">
        <div className="min-w-0 bg-primary-background shrink flex flex-col items-center justify-between basis-[465px] h-full p-4 pb-8 rounded-sm space-y-5">
          <div className="w-full">
            <h1 className="text-xl font-medium text-primary-foreground">
              Strengths & Skills
            </h1>
            <div className="flex flex-col items-center space-y-5">
              <div className="w-full space-y-4 h-full">
                <h2 className="text-sm font-normal text-primary-foreground text-opacity-60">
                  Key Strengths
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {user.strengths.map(({ name }, idx: number) => (
                    <div
                      key={idx}
                      className="flex flex-row items-center space-x-2 min-w-[50%]"
                    >
                      <Checkbox id={name} />
                      <label
                        htmlFor={name}
                        className="text-sm font-light text-primary-foreground"
                      >
                        {name}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full space-y-4">
                <h2 className="text-sm font-normal text-primary-foreground text-opacity-60">
                  Skills
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {user.skills.map(({ name }, idx) => (
                    <div
                      key={idx}
                      className="flex flex-row items-center space-x-2 min-w-[50%]"
                    >
                      <Checkbox id={name} />
                      <label
                        htmlFor={name}
                        className="text-sm font-light text-primary-foreground"
                      >
                        {name}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full space-y-4 max-h-full">
                <h2 className="text-sm font-normal text-opacity-60 text-primary-foreground">
                  Field (optional)
                </h2>
                <ToggleGroup
                  type="multiple"
                  className="flex flex-row flex-wrap justify-start gap-2"
                >
                  {user.fields.map(({ name }, idx) => (
                    <Toggle
                      key={idx}
                      className="p-2 border border-primary-foreground rounded-sm h-[28px] inline-flex items-center"
                    >
                      <p className="text-sm font-normal text-primary-foreground">
                        {name}
                      </p>
                    </Toggle>
                  ))}
                </ToggleGroup>
              </div>
            </div>
          </div>
        </div>
        <div className="min-w-0 bg-primary-background shrink justify-between basis-[465px] grow h-full p-4 pb-8 rounded-sm space-y-5">
          <h1 className="text-xl font-medium text-primary-foreground">
            You vs similar job seekers
          </h1>
          <Chart data={data} />
        </div>
      </div>
    </div>
  );
}
