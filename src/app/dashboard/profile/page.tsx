import { ScrollArea } from "@/components/ui/scroll-area";
import ProfileIcon from "./profileicon";
import { Button } from "@/components/ui/button";
import UWIcon from "./uwicon";
import AmazonIcon from "./amazonicon";
import EpicIcon from "./epicicon";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const experiences = [
  {
    position: "Frontend Developer",
    company: "Amazon",
    time: "Full-time",
    duration: "Sep 2021 - Present",
    icon: AmazonIcon(),
  },
  {
    position: "UI/UX Design Assistant",
    company: "Epic",
    time: "Part-time",
    duration: "Oct 2020 - Jan 2021",
    icon: EpicIcon(),
  },
];

function ResumeUpload() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-primary-darkest text-primary-background rounded-sm font-normal px-5 py-2 h-[34px]">
          Upload Resume
        </Button>
      </DialogTrigger>
      <DialogContent className="min-w-[800px] h-[650px] bg-primary-background"></DialogContent>
    </Dialog>
  );
}

export default function Profile() {
  return (
    <div className="flex flex-row space-x-4 text-primary-foreground h-full">
      <ScrollArea className="h-[calc(100vh-60px)] -translate-y-12 shrink basis-[800px]">
        <div className="flex flex-row space-x-4 mb-5 mt-12">
          <ProfileIcon />
          <div className="flex flex-col justify-between">
            <div className="space-y-2">
              <h1 className="text-[28px] font-normal h-[33px]">
                Austin Arthur
              </h1>
              <div className="space-y-px text-sm">
                <p className="h-[17px]">UI/UX Designer</p>
                <p className="font-light opacity-60 h-[17px]">
                  Madison, Wisconsin, United States
                </p>
              </div>
            </div>
            <div className="flex flex-row space-x-2 text-sm">
              <ResumeUpload />
              <Button className="bg-[#E5E5E5] rounded-sm font-normal px-5 py-2 h-[34px]">
                Edit Profile
              </Button>
            </div>
          </div>
        </div>
        <div className="bg-primary-background p-5 space-y-[10px] rounded-sm">
          <h1 className="text-xl font-normal">About</h1>
          <p className="text-sm font-light leading-[20px]">
            Passionate UI/UX Designer with 3 years of experience in crafting
            intuitive and visually appealing user interfaces. I specialize in
            transforming complex ideas into user-friendly digital experiences,
            ensuring every interaction is meaningful and enjoyable.{" "}
          </p>
        </div>
        <div className="bg-primary-background p-5 space-y-[10px] rounded-sm mt-2 pb-[30px]">
          <h1 className="text-xl font-normal">Education</h1>
          <div className="flex flex-row space-x-4">
            <UWIcon />
            <div className="flex flex-col justify-between">
              <h1 className="text-base font-normal leading-[19px]">
                University of Wisconsin - Madison
              </h1>
              <div>
                <p className="text-sm font-light leading-[17px]">
                  Bachelor of Science - BS, Computer Science
                </p>
                <p className="text-sm text-primary-foreground opacity-60 font-light leading-[17px]">
                  Sep 2017 - May 2021
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-primary-background p-5 rounded-sm mt-2">
          <h1 className="text-xl font-normal mb-[10px]">Experience</h1>
          {experiences.map((exp, idx) => (
            <>
              <div
                className="flex flex-row space-x-4 h-[66px] items-center mb-7"
                key={idx}
              >
                {exp.icon}
                <div className="flex flex-col justify-between">
                  <h1 className="text-base font-normal leading-[19px]">
                    {exp.position}
                  </h1>
                  <div>
                    <p className="text-sm font-light leading-[17px]">
                      {exp.company} · {exp.time}
                    </p>
                    <p className="text-sm text-primary-foreground opacity-60 font-light leading-[17px]">
                      {exp.duration}
                    </p>
                  </div>
                </div>
              </div>
              {idx < experiences.length - 1 ? (
                <Separator className="mb-6" />
              ) : (
                ""
              )}
            </>
          ))}
        </div>
      </ScrollArea>
      <div className="flex flex-col space-y-2 h-full shrink basis-[465px]">
        <div className="bg-primary-background rounded-sm h-[400px] p-4">
          Notifications
        </div>
        <div className="bg-primary-background rounded-sm h-[224px] p-4">
          Premium Services
        </div>
      </div>
    </div>
  );
}
