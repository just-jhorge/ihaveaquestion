"use client";

import { signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { LogOutIcon } from "lucide-react";

export default function LogOutButton() {
  const router = useRouter();

  async function handleLogOut() {
    const { error } = await signOut();

    if (error) {
      toast.error(error.message || "Something went weong");
    } else {
      toast.success("Signed out successfully.");
      router.refresh();
    }
  }

  return (
    <Button onClick={handleLogOut} variant="destructive" size="icon-sm">
      <LogOutIcon />
    </Button>
  );
}
