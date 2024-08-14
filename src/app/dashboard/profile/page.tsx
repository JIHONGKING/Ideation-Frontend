import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { redirect } from "next/navigation";
import { getAuthId, getUserProfile } from "@/backend/services/userSvc";
import ResumeUpload from "./resumeupload";
import Image from "next/image";
import defaultProfileIcon from "@/assets/profile.webp";
import { ReactElement } from "react";
import EditAbout from "./edit-about";
import EditProfile from "./edit-profile";

function ResumeUploadButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-primary-darkest text-primary-background rounded-sm font-normal px-5 py-2 h-[34px]">
          Upload Resume
        </Button>
      </DialogTrigger>
      <DialogTitle />
      <ResumeUpload />
    </Dialog>
  );
}

function EditProfileButton({
  className,
  children,
  content,
}: {
  className: string;
  children: React.ReactNode;
  content: ReactElement;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className={className}>{children}</Button>
      </DialogTrigger>
      <DialogTitle />
      <DialogContent className="min-w-[650px] min-h-[400px] px-12">
        {content}
      </DialogContent>
    </Dialog>
  );
}

export default async function Profile() {
  const userid = await getAuthId();
  if (!userid) {
    redirect("/login");
  }
  const user = await getUserProfile(userid);
  if (!user) {
    redirect("/login");
  }
  return (
    <div className="flex flex-row space-x-4 text-primary-foreground h-full">
      <ScrollArea className="h-[calc(100vh-60px)] -translate-y-12 shrink basis-[800px]">
        <div className="flex flex-row space-x-4 mb-5 mt-12">
          {user.profilePicUuid ? (
            <div className="w-[144px] h-[144px] bg-primary-background rounded-sm" />
          ) : (
            <Image
              src={defaultProfileIcon}
              width={144}
              height={144}
              alt="profile icon"
              className="rounded-sm"
            />
          )}
          <div className="flex flex-col justify-between">
            <div className="space-y-2">
              <h1 className="text-[28px] font-normal h-[33px]">{user.name}</h1>
              <div className="space-y-px text-sm">
                <p className="h-[17px]">{user.title}</p>
                <p className="font-light opacity-60 h-[17px]">
                  {user.location}
                </p>
              </div>
            </div>
            <div className="flex flex-row space-x-2 text-sm">
              <ResumeUploadButton />
              <EditProfileButton
                className="bg-[#E5E5E5] rounded-sm font-normal px-5 py-2 h-[34px]"
                content={
                  <EditProfile
                    name={user.name}
                    title={user.title}
                    location={user.location}
                  />
                }
              >
                Edit Profile
              </EditProfileButton>
            </div>
          </div>
        </div>
        <div className="bg-primary-background p-5 space-y-[10px] rounded-sm">
          <div className="inline-flex justify-between w-full">
            <h1 className="text-xl font-normal">About</h1>
            <EditProfileButton
              className="bg-[#E5E5E5] rounded-sm font-normal px-5 py-2 h-[34px]"
              content={<EditAbout curAbout={user.about} />}
            >
              <p>Edit</p>
            </EditProfileButton>
          </div>
          <p className="text-sm font-light leading-[20px]">{user.about}</p>
        </div>
        <div className="bg-primary-background p-5 space-y-[10px] rounded-sm mt-2 pb-[30px]">
          <div className="inline-flex justify-between w-full">
            <h1 className="text-xl font-normal">Education</h1>
            <EditProfileButton className="bg-[#E5E5E5] rounded-sm font-normal px-5 py-2 h-[34px]">
              Edit
            </EditProfileButton>
          </div>
          {user.education.map((education, idx) => (
            <div className="flex flex-row space-x-4" key={idx}>
              <div className="w-[66px] h-[66px] bg-primary-background-light rounded-sm" />
              <div className="flex flex-col justify-between">
                <h1 className="text-base font-normal leading-[19px]">
                  {education.school}
                </h1>
                <div>
                  {education.degrees.map((degree, i) => (
                    <p className="text-sm font-light leading-[17px]" key={i}>
                      {degree.level ? `${degree.level} - ` : ""}
                      {degree.name ? degree.name : "None"}
                    </p>
                  ))}
                  <p className="text-sm text-primary-foreground opacity-60 font-light leading-[17px]">
                    {education.start_date}
                    {education.start_date && education.end_date ? " - " : ""}
                    {education.end_date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-primary-background p-5 rounded-sm mt-2">
          <div className="inline-flex justify-between w-full">
            <h1 className="text-xl font-normal mb-[10px]">Experience</h1>
            <EditProfileButton className="bg-[#E5E5E5] rounded-sm font-normal px-5 py-2 h-[34px]">
              Edit
            </EditProfileButton>
          </div>
          {user.experiences.map((exp, idx) => (
            <>
              <div
                className="flex flex-row space-x-4 h-[66px] items-center mb-7"
                key={idx}
              >
                <div className="w-[66px] h-[66px] bg-primary-background-light rounded-sm" />
                <div className="flex flex-col justify-between">
                  <h1 className="text-base font-normal leading-[19px]">
                    {exp.position}
                  </h1>
                  <div>
                    <p className="text-sm font-light leading-[17px]">
                      {exp.company} {exp.company && exp.type ? " · " : ""}
                      {exp.type}
                    </p>
                    <p className="text-sm text-primary-foreground opacity-60 font-light leading-[17px]">
                      {exp.start_date}{" "}
                      {exp.start_date && exp.end_date ? " - " : ""}
                      {exp.end_date}
                    </p>
                  </div>
                </div>
              </div>
              {idx < user.experiences.length - 1 ? (
                <Separator className="mb-6" />
              ) : (
                ""
              )}
            </>
          ))}
        </div>
      </ScrollArea>
      <div className="flex flex-col space-y-2 h-full shrink basis-[465px]">
        <div className="bg-primary-background rounded-sm h-[400px] p-4 opacity-50 bg-opacity-50">
          Notifications
        </div>
        <div className="bg-primary-background rounded-sm h-[224px] p-4 opacity-50 bg-opacity-50">
          Premium Services
        </div>
      </div>
    </div>
  );
}
