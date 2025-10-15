import { getSession } from "@/lib/get-session";
import { redirect } from "next/navigation";
import Lessons from "./Lessons";

export default async function Page() {
  const session = await getSession();
  const user = session?.user;

  if (!user) redirect("/auth/signin");

  return <Lessons />;
}
