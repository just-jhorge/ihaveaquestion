import Link from "next/link";
import { Button } from "../ui/button";
import { getSession } from "@/lib/get-session";
import { BookCheckIcon, HomeIcon, LogOutIcon } from "lucide-react";
import LogOutButton from "./logout-button";

export default async function Navbar() {
  const session = await getSession();
  const user = session?.user;

  return (
    <nav className="h-14 w-full flex items-center justify-between border-b-2">
      <Button size="sm" asChild>
        <Link href="/">
          <HomeIcon />
          HOME
        </Link>
      </Button>
      {user ? (
        <div className="flex items-center gap-2">
          <Button size="sm" asChild>
            <Link href="/t/lessons">
              <BookCheckIcon />
              LESSONS
            </Link>
          </Button>
          <LogOutButton />
        </div>
      ) : (
        <div className="space-x-2">
          <Button size="sm" asChild>
            <Link href="/auth/signin">SIGN IN</Link>
          </Button>
          <Button size="sm">GET ONBOARD</Button>
        </div>
      )}
      {/* {user ? (
        <div className="space-x-2">
          <Button size="sm" asChild>
            <Link href="/lessons">Lessons</Link> border-2
          </Button>
          <Button size="sm" asChild>
            <Link href="/questions">My Questions</Link>
          </Button>
        </div>
      ) : (
        <div className="space-x-2">
          <Button size="sm" asChild>
            <Link href="/auth/signin">Sign In</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/auth/signup">Sign Up</Link>
          </Button>
        </div>
      )} */}
    </nav>
  );
}
