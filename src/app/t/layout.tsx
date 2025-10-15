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
    <div className="max-w-2xl mx-auto px-4 xl:px-0">
      <Navbar />
      {children}
    </div>
  );
}
