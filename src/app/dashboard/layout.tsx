import Navbar from "./navbar";
import Sidebar from "./sidebar";
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <div className="flex flex-row w-full mt-[60px]">
        <Sidebar />
        <main className="bg-[#F5F6F8] w-[calc(100%)] h-[calc(100vh-60px)] px-6 py-12">
          {" "}
          {children}
        </main>
      </div>
    </>
  );
}
