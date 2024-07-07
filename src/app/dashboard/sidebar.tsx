"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import DashIcon from "@/assets/dashicon";
import ProfileIcon from "@/assets/profileicon";
import AIIcon from "@/assets/aiicon";
import WorkIcon from "@/assets/workicon";
import ApplicationIcon from "@/assets/applicationicon";
import SettingsIcon from "@/assets/settingsicon";
import CollapseIcon from "@/assets/collapseicon";

export default function Sidebar() {
  const [loc, setLoc] = useState<string>("dashboard");
  const [collapsed, setCollapsed] = useState<boolean>(false);
  return (
    <nav className="p-[30px] pt-[90px] w-[300px] min-h-screen bg-primary-background flex flex-col justify-between">
      <div className="w-full space-y-8 flex flex-col items-center">
        <Button
          variant={loc == "dashboard" ? "dashnav" : "dashnavnop"}
          className="h-[44px] space-x-4 w-full"
        >
          <DashIcon
            className={
              loc == "dashboard"
                ? "stroke-primary-background"
                : "stroke-primary-foreground"
            }
          />
          <p> My Dashboard</p>
        </Button>
        <Separator className="w-1/2" />
        <section className="flex flex-col space-y-2 w-full">
          <Button
            variant={loc == "profile" ? "dashnav" : "dashnavnop"}
            className="h-[44px] space-x-4"
          >
            <ProfileIcon
              className={
                loc == "profile"
                  ? "fill-primary-background"
                  : "fill-primary-foreground"
              }
            />
            <p> My Profile</p>
          </Button>
          <Button
            variant={loc == "analysis" ? "dashnav" : "dashnavnop"}
            className="h-[44px] space-x-4"
          >
            <AIIcon
              className={
                loc == "analysis"
                  ? "fill-primary-background"
                  : "fill-primary-foreground"
              }
            />
            <p>Analysis</p>
          </Button>
          <Button
            variant={loc == "analysis" ? "dashnav" : "dashnavnop"}
            className="h-[44px] space-x-4"
          >
            <WorkIcon
              className={
                loc == "jobsearch"
                  ? "fill-primary-background"
                  : "fill-primary-foreground"
              }
            />
            <p>Job Search</p>
          </Button>
          <Button
            variant={loc == "analysis" ? "dashnav" : "dashnavnop"}
            className="h-[44px] space-x-4"
          >
            <ApplicationIcon
              className={
                loc == "application"
                  ? "fill-primary-background"
                  : "fill-primary-foreground"
              }
            />
            <p>My Applications</p>
          </Button>
          <Button
            variant={loc == "analysis" ? "dashnav" : "dashnavnop"}
            className="h-[44px] space-x-4"
          >
            <SettingsIcon
              className={
                loc == "settings"
                  ? "fill-primary-background"
                  : "fill-primary-foreground"
              }
            />
            <p>Settings</p>
          </Button>
        </section>
      </div>
      <Button variant="dashnavnop" className="space-x-4">
        <CollapseIcon className="stroke-primary-foreground" />
        <p>Collapse Sidebar</p>
      </Button>
    </nav>
  );
}
