import { Tabs, TabsContent } from "@/components/ui/tabs";
import SeekerLogin from "./applicant";
import EmployerLogin from "./employer";

export default function Login() {
  return (
    <Tabs defaultValue="jobseeker">
      <TabsContent value="jobseeker" className="m-0">
        <SeekerLogin />
      </TabsContent>
      <TabsContent value="employer" className="m-0">
        <EmployerLogin />
      </TabsContent>
    </Tabs>
  );
}
