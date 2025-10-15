import { getSession } from "@/lib/get-session";
import { redirect } from "next/navigation";
import Lessons from "./Lessons";
import prisma from "@/lib/prisma";

export default async function Page() {
  const session = await getSession();
  const user = session?.user;

  if (!user) redirect("/auth/signin");

  const lessons = await prisma.lesson.findMany({
    where: { tutorId: user.id },
    orderBy: { createdAt: "desc" },
  });

  if (!lessons) {
    return <div>No lessons found.</div>;
  }

  return <Lessons userId={user.id} lessons={lessons} />;
}
