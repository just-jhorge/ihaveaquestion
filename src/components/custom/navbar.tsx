import Link from "next/link";
import { Button } from "../ui/button";
import { getSession } from "@/lib/get-session";
import {
  BookCheckIcon,
  HomeIcon,
  LogInIcon,
  MilestoneIcon,
} from "lucide-react";
import LogOutButton from "./logout-button";
import { ThemeSwitcher } from "./theme-switcher";

export default async function Navbar() {
  const session = await getSession();
  const user = session?.user;

  return (
    <nav className="h-14 shrink-0 w-full flex items-center justify-between border-b-2">
      <Button size="icon-sm" asChild>
        <Link href="/">
          <HomeIcon />
        </Link>
      </Button>
      <div className="flex items-center gap-2">
        {user ? (
          <div className="flex items-center gap-2">
            <Button size="sm" asChild>
              <Link href="/t/lessons">
                <BookCheckIcon />
                Lessons
              </Link>
            </Button>
            <LogOutButton />
          </div>
        ) : (
          <Button size="sm" asChild>
            <Link href="/auth/signin">
              <LogInIcon />
              Log In
            </Link>
          </Button>
        )}
        <ThemeSwitcher />
      </div>
    </nav>
  );
}
