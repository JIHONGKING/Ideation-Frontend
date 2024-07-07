import { Tabs, TabsContent } from "@/components/ui/tabs";
import SeekerLogin from "./applicant";
import EmployerLogin from "./employer";
import Image from "next/image";
import logo from "@/assets/logo.svg";
import Link from "next/link";

export default function Login() {
  return (
    <Tabs defaultValue="jobseeker">
      <Link href="/" className="absolute top-[18px] left-[160px]">
        <Image src={logo} width={190} height={40} alt="CareerBridge AI logo" />
      </Link>
      <TabsContent value="jobseeker" className="m-0">
        <SeekerLogin />
      </TabsContent>
      <TabsContent value="employer" className="m-0">
        <EmployerLogin />
      </TabsContent>
    </Tabs>
  );
}
