import { Button } from "@/components/ui/button";
import Navbar from "./navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="w-full p-8 mt-20 bg-gradient-to-t from-[#E1EDFF] to-primary-background h-[512px] px-40 flex flex-row justify-between">
        <div className="flex flex-col justify-around h-full">
          <div className="space-y-[10px]">
            <h1 className="text-5xl text-primary-foreground font-semibold">
              Where Talent Meets Opportunity
            </h1>
            <p className="text-primary-foreground opacity-60 font-normal">
              Transforming job searching and hiring with AI-powered solutions
              and bidding system.
            </p>
          </div>
          <Link href="/register" className="w-[222px]">
            <Button className="w-full h-[55px]">
              <p className="text-primary-background text-2xl font-light">
                Register
              </p>
            </Button>
          </Link>
        </div>
        <div className="w-[626px] h-[356px] rounded-lg bg-[#B9CEF6] shadow-md"></div>
      </main>
      <section className="bg-primary-background p-12 min-h-screen">
        <div className="flex flex-col items-center space-y-4 w-full">
          <h1 className="font-semibold text-4xl text-primary-foreground max-w-lg text-center">
            Manage your Career or Hiring Needs in a Single System
          </h1>
          <p className="text-[#717171]">Who is CareerBridge AI suitable for?</p>
        </div>
      </section>
    </div>
  );
}
