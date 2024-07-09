import Navbar from "./navbar";
import Sidebar from "./sidebar";
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="bg-[#F5F6F8] h-screen w-full">
      <Navbar />
      <div className="flex flex-row w-full">
        <Sidebar />
        <main className="fixed left-[300px] top-[60px] w-[calc(100%-300px)] h-[calc(100vh-60px)] px-6 py-12">
          {" "}
          {children}
        </main>
      </div>
    </main>
  );
}
