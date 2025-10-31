import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";

export default async function Home() {
  const users = await prisma.user.findMany();
  // if(users.length > 0 || parseInt(users.id) > 1000) {
  //   notFound();
  // }
  console.log("users info: ", users)
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div>
        {users.map((user) => (
          <div key={user.id}>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
