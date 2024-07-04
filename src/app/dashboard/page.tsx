import { getAuthUser } from "@/backend/services/userSvc";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const user = await getAuthUser();
  if (!user) {
    redirect("/login");
  }
  return (
    <main className="p-8">
      <h1 className="text-xl">Dashboard</h1>
      <p>{user?.toString()}</p>
    </main>
  );
}
