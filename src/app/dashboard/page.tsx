import { getAuthUser } from "@/backend/services/userSvc";
import { Checkbox } from "@/components/ui/checkbox";
import { redirect } from "next/navigation";
import NvidiaIcon from "./assets/nvidia";
import CashappIcon from "./assets/cashapp";
import EpicIcon from "./assets/epic";
import MetaIcon from "./assets/meta";
import CalendarIcon from "@/assets/calendaricon";
import LocationIcon from "@/assets/locationicon";
import { ScrollArea } from "@/components/ui/scroll-area";
import Percent80 from "@/assets/80percent";
import RightArrow from "@/assets/rightarrow";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ToggleGroup } from "@/components/ui/toggle-group";
import { Toggle } from "@/components/ui/toggle";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import PlaceholderData from "./assets/data";

const fields = [
  "IT",
  "Education",
  "Automation",
  "Engineering",
  "Media and Entertainment",
];

const strengths = [
  "Frontend Development",
  "Project Management",
  "Data Analysis",
];

const skills = ["Figma", "Prototyping", "React", "Python"];

const jobs = [
  {
    position: "Data Scientist Intern",
    company: "NVIDIA",
    location: "New York, NY",
    date: "2024/07/28",
    icon: NvidiaIcon(),
    href: "https://www.nvidia.com/",
  },
  {
    position: "UI/UX Intern",
    company: "Cash App",
    location: "San Francisco, CA",
    date: "2024/07/14",
    icon: CashappIcon(),
    href: "https://cash.app/",
  },
  {
    position: "Project Manager",
    company: "Epic",
    location: "Madison, WI",
    date: "2024/08/15",
    icon: EpicIcon(),
    href: "https://www.epic.com/",
  },
  {
    position: "Graphics Software Engineering, Rendering - Reality Labs",
    company: "Meta",
    location: "United States (Remote)",
    date: "2024/08/15",
    icon: MetaIcon(),
    href: "https://www.metacareers.com/",
  },
  {
    position: "Project Manager",
    company: "Epic",
    location: "Madison, WI",
    date: "2024/08/15",
    icon: EpicIcon(),
    href: "https://www.epic.com/",
  },
];

export default async function Dashboard() {
  const user = await getAuthUser();
  if (!user) {
    redirect("/login");
  }
  return (
    <div className="space-y-8 h-full max-h-full flex flex-col">
      <h1 className="font-normal text-3xl text-primary-foreground">
        Welcome, {user.name}
      </h1>
      <div className="flex flex-row grow gap-[15px] h-full">
        <div className="min-w-0 bg-primary-background shrink flex flex-col items-center justify-between basis-[465px] h-full p-4 pb-8 rounded-sm space-y-5">
          <div>
            <h1 className="text-xl font-medium text-primary-foreground">
              Strengths & Skills
            </h1>
            <div className="flex flex-col items-center space-y-5">
              <div className="w-full space-y-4 h-full">
                <h2 className="text-sm font-normal text-primary-foreground text-opacity-60">
                  Key Strengths
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {strengths.map((strength, idx) => (
                    <div
                      key={idx}
                      className="flex flex-row items-center space-x-2 min-w-[50%]"
                    >
                      <Checkbox id={strength} />
                      <label
                        htmlFor={strength}
                        className="text-sm font-light text-primary-foreground"
                      >
                        {strength}
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
                  {skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="flex flex-row items-center space-x-2 min-w-[50%]"
                    >
                      <Checkbox id={skill} />
                      <label
                        htmlFor={skill}
                        className="text-sm font-light text-primary-foreground"
                      >
                        {skill}
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
                  {fields.map((field, idx) => (
                    <Toggle
                      key={idx}
                      className="p-2 border border-primary-foreground rounded-sm h-[28px] inline-flex items-center"
                    >
                      <p className="text-sm font-normal text-primary-foreground">
                        {field}
                      </p>
                    </Toggle>
                  ))}
                </ToggleGroup>
              </div>
            </div>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-primary-darkest relative bottom-0 text-primary-background w-[120px] h-[40px] text-sm font-medium rounded-sm">
                Analyze
              </Button>
            </DialogTrigger>
            <DialogContent className="min-w-[800px] rounded-lg bg-primary-background">
              <DialogHeader className="text-xl font-normal">
                Frontend Development
              </DialogHeader>
              <p className="text-sm font-normal opacity-60">
                Relevant Experience
              </p>
              <div className="flex flex-row space-x-4">
                <div className="bg-primary-background-light rounded-lg p-4 grow">
                  <h1 className="text-2xl font-medium">Fremond Automation</h1>
                  <p className="text-[12px] font-light">Blair, NE</p>
                  <p className="text-sm font-light">Freelance web designer</p>
                </div>
                <div className="bg-primary-background-light rounded-lg p-4 grow">
                  <h1 className="text-2xl font-medium">
                    Echo - Voice to Tab App
                  </h1>
                  <p className="text-[12px] font-light">Madison WI</p>
                  <p className="text-sm font-light">Frontend Developer</p>
                </div>
              </div>
              <div className="w-full bg-primary-background-light rounded-lg">
                <PlaceholderData />
              </div>
            </DialogContent>
          </Dialog>
        </div>
        <div className="min-w-0 bg-primary-background shrink basis-[465px] h-full max-h-full pt-4 rounded-sm flex flex-col">
          <h1 className="text-xl font-medium text-primary-foreground px-4">
            Recommended Jobs
          </h1>
          <ScrollArea className="shrink min-h-0 h-[calc(100vh-268px)]">
            {jobs.map((job, idx) => (
              <Link href={job.href} key={idx}>
                <div className="flex flex-col text-primary-foreground py-4 border-b space-y-8 hover:bg-primary-background-light px-4 transition-colors">
                  <div className="w-full flex flex-row items-center justify-between">
                    <div className="flex flex-col space-y-2">
                      <p className="text-base font-normal">{job.position}</p>
                      <p className="text-sm text-opacity-60 font-normal">
                        {job.company}
                      </p>
                    </div>
                    {job.icon}
                  </div>
                  <div className="flex flex-row justify-between">
                    <div className="flex flex-row items-center space-x-2">
                      <LocationIcon />
                      <p className="text-sm font-normal">{job.location}</p>
                    </div>
                    <div className="flex flex-row items-center space-x-2">
                      <CalendarIcon />
                      <p className="text-sm font-normal">{job.date}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </ScrollArea>
        </div>
        <div className="min-w-0 flex flex-col shrink basis-[465px] h-full space-y-[15px]">
          <Link href="" className="w-full bg-primary-background p-4 rounded-sm">
            <div className="flex flex-row items-center">
              <Percent80 />

              <h1 className="text-base font-normal text-primary-foreground">
                Your profile is 80% Complete
              </h1>
            </div>
          </Link>
          <div className="w-full bg-primary-background p-4 rounded-sm flex flex-col space-y-4">
            <h1 className="text-xl font-medium text-primary-foreground">
              Application Status
            </h1>
            <Button className="w-full h-[47px] p-4 bg-primary-background-light flex flex-row items-center rounded-sm justify-between">
              <p className="text-primary-foreground text-base font-normal">
                Accepted Offers
              </p>
              <div className="inline-flex items-center">
                <p className="text-sm text-primary-foreground">3</p>
                <RightArrow />
              </div>
            </Button>
            <Button className="w-full h-[47px] p-4 bg-primary-background-light flex flex-row items-center rounded-sm justify-between">
              <p className="text-primary-foreground text-base font-normal">
                Applications Submitted
              </p>
              <div className="inline-flex items-center">
                <p className="text-sm text-primary-foreground">19</p>
                <RightArrow />
              </div>
            </Button>
            <Button className="w-full h-[47px] p-4 bg-primary-background-light flex flex-row items-center rounded-sm justify-between">
              <p className="text-primary-foreground text-base font-normal">
                My Bidding Status
              </p>
              <div className="inline-flex items-center">
                <p className="text-sm text-primary-foreground">2</p>
                <RightArrow />
              </div>
            </Button>
            <Button className="w-full h-[47px] p-4 bg-primary-background-light flex flex-row items-center rounded-sm justify-between">
              <p className="text-primary-foreground text-base font-normal">
                Application Drafts
              </p>
              <div className="inline-flex items-center">
                <p className="text-sm text-primary-foreground">7</p>
                <RightArrow />
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
