import logo from "@/assets/logo.svg";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  return (
    <div className="fixed top-0 h-20 w-full z-10 flex flex-row items-center px-40 bg-gradient-to-b from-primary-background to-transparent">
      <Link href="/">
        <Image src={logo} width={190} height={40} alt="logo" />
      </Link>
      <nav className="flex flex-row items-center h-20 ml-auto space-x-12">
        <Link href="/">
          <p className="text-base font-normal text-primary">Home</p>
        </Link>
        <Link href="/services">
          <p className="text-base  font-normal text-primary-foreground">
            Services
          </p>
        </Link>
        <Link href="/contact">
          <p className="text-base font-normal text-primary-foreground">
            Contact
          </p>
        </Link>
        <Link href="/login">
          <p className="text-base font-normal text-primary-foreground">Login</p>
        </Link>
        <Link href="/register">
          <Button variant="outline" className="border-primary border-2">
            <p className="text-base font-normal text-primary">Join</p>
          </Button>
        </Link>
      </nav>
    </div>
  );
}
