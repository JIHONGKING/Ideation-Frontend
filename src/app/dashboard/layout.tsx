import Navbar from "./navbar";
import Sidebar from "./sidebar";
export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <div className="flex flex-row w-full mt-[60px]">
        <Sidebar />
        {children}
      </div>
    </>
  );
}
