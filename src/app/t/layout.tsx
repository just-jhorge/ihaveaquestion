import Navbar from "@/components/custom/navbar";
import { getSession } from "@/lib/get-session";
import { redirect } from "next/navigation";

export default async function TutorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();

  if (!session) {
    redirect("/");
  }

  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
