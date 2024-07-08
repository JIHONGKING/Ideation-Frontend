import logo from "@/assets/logo.svg";
import profile from "@/assets/profile.webp";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import searchicon from "@/assets/searchicon.svg";
import bellicon from "@/assets/bellicon.svg";
import messageicon from "@/assets/messageicon.svg";
import { ChevronDown } from "lucide-react";
import { logoutUser } from "@/backend/services/userSvc";
export default function Navbar() {
  return (
    <div className="fixed top-0 h-[60px] w-full z-10 flex flex-row items-center pl-[52px] pr-[183px] bg-primary-background border-b border-[#D6D6D6] border-opacity-60">
      <Link href="/">
        <Image src={logo} width={190} height={40} alt="logo" />
      </Link>
      <div className="w-[465px] h-[42px] ml-[80px] bg-primary-background-light rounded-sm inline-flex pl-5">
        <Link href="/search" className="rounded-full p-2 m-1">
          <Image src={searchicon} width={18} height={18} alt="Search icon" />
        </Link>
        <Input className="w-full text-lg" placeholder="Search for jobs"></Input>
      </div>
      <div className="flex flex-row items-center h-20 ml-auto space-x-7">
        <Link href="/dashboard/messages">
          <Image
            src={messageicon}
            width={22}
            height={22}
            alt="messages"
          ></Image>
        </Link>
        <Link href="/dashboard/notifications">
          <Image
            src={bellicon}
            width={29}
            height={29}
            alt="notifications"
          ></Image>
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger className="inline-flex items-center">
            <Image
              src={profile}
              width={40}
              height={40}
              alt="profile icon"
              className="rounded-lg"
            />
            <ChevronDown />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <form action={logoutUser}>
              <Button
                type="submit"
                variant="ghost"
                className="w-full text-primary-foreground"
              >
                Logout
              </Button>
            </form>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
