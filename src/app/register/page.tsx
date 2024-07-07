import { Tabs, TabsContent } from "@/components/ui/tabs";
import SeekerRegister from "./applicant";
import EmployerRegister from "./employer";
import logo from "@/assets/logo.svg";
import Image from "next/image";

export default function Login() {
  return (
    <Tabs defaultValue="jobseeker">
      <Image
        src={logo}
        width={190}
        height={40}
        alt="CareerBridge AI logo"
        className="absolute top-[18px] left-[160px]"
      />
      <TabsContent value="jobseeker" className="m-0">
        <SeekerRegister />
      </TabsContent>
      <TabsContent value="employer" className="m-0">
        <EmployerRegister />
      </TabsContent>
    </Tabs>
  );
}
