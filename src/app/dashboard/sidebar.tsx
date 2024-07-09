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
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const pathname = usePathname();
  return (
    <nav
      className={`p-[30px] w-[300px] h-[calc(100vh-60px)] bg-primary-background flex flex-col shrink-0 justify-between ${collapsed ? "max-w-0 px-0" : ""} transition-all`}
    >
      <div className="w-full space-y-8 flex flex-col items-center">
        <Link href="/dashboard" className="w-full">
          <Button
            variant={pathname == "/dashboard" ? "dashnav" : "dashnavnop"}
            className="h-[44px] space-x-4 w-full"
          >
            <DashIcon
              className={
                pathname == "/dashboard"
                  ? "stroke-primary-background"
                  : "stroke-primary-foreground"
              }
            />
            <p> My Dashboard</p>
          </Button>
        </Link>
        <Separator className="w-1/2" />
        <section className="flex flex-col space-y-2 w-full">
          <Link href="/dashboard/profile" className="w-full">
            <Button
              variant={
                pathname == "/dashboard/profile" ? "dashnav" : "dashnavnop"
              }
              className="h-[44px] space-x-4 w-full"
            >
              <ProfileIcon
                className={
                  pathname == "/dashboard/profile"
                    ? "fill-primary-background"
                    : "fill-primary-foreground"
                }
              />
              <p> My Profile</p>
            </Button>
          </Link>
          <Link href="/dashboard/analysis" className="w-full">
            <Button
              variant={
                pathname == "/dashboard/analysis" ? "dashnav" : "dashnavnop"
              }
              className="h-[44px] space-x-4 w-full"
            >
              <AIIcon
                className={
                  pathname == "/dashboard/analysis"
                    ? "fill-primary-background"
                    : "fill-primary-foreground"
                }
              />
              <p>Analysis</p>
            </Button>
          </Link>
          <Link href="/dashboard/jobs" className="w-full">
            <Button
              variant={pathname == "/dashboard/jobs" ? "dashnav" : "dashnavnop"}
              className="h-[44px] space-x-4 w-full"
            >
              <WorkIcon
                className={
                  pathname == "/dashboard/jobs"
                    ? "fill-primary-background"
                    : "fill-primary-foreground"
                }
              />
              <p>Job Search</p>
            </Button>
          </Link>
          <Link href="/dashboard/applications" className="w-full">
            <Button
              variant={
                pathname == "/dashboard/applications" ? "dashnav" : "dashnavnop"
              }
              className="h-[44px] space-x-4 w-full"
            >
              <ApplicationIcon
                className={
                  pathname == "/dashboard/applications"
                    ? "fill-primary-background"
                    : "fill-primary-foreground"
                }
              />
              <p>My Applications</p>
            </Button>
          </Link>
          <Link href="/dashboard/settings" className="w-full">
            <Button
              variant={
                pathname == "/dashboard/settings" ? "dashnav" : "dashnavnop"
              }
              className="h-[44px] space-x-4 w-full"
            >
              <SettingsIcon
                className={
                  pathname == "/dashboard/settings"
                    ? "fill-primary-background"
                    : "fill-primary-foreground"
                }
              />
              <p>Settings</p>
            </Button>
          </Link>
        </section>
      </div>
      <Button
        variant="dashnavnop"
        className="space-x-4"
        onClick={() => setCollapsed(true)}
      >
        <CollapseIcon className="stroke-primary-foreground" />
        <p>Collapse Sidebar</p>
      </Button>
    </nav>
  );
}
