import Navbar from "./navbar";
import Sidebar from "./sidebar";
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="bg-[#F5F6F8]">
      <Navbar />
      <div className="flex flex-row w-full">
        <Sidebar />
        <div className="pt-[60px] pl-[300px] min-h-screen w-full">
          {" "}
          {children}
        </div>
      </div>
    </main>
  );
}
