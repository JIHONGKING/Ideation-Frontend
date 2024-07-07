import { getAuthUser } from "@/backend/services/userSvc";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const user = await getAuthUser();
  if (!user) {
    redirect("/login");
  }
  return (
    <main className="p-8">
      <div className="flex flex-col">
        <div className="flex flex-row space-x-8">
          <p>Name</p>
          <p>{user.name}</p>
        </div>
        <div className="flex flex-row space-x-8">
          <p>Email</p>
          <p>{user.email}</p>
        </div>
        <div className="flex flex-row space-x-8">
          <p>Password (Hashed)</p>
          <p>{user.password}</p>
        </div>
      </div>
    </main>
  );
}
