export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="bg-[#F5F6F8] w-[calc(100%)] h-[calc(100vh-60px)] px-6 py-6">
      {children}
    </main>
  );
}
