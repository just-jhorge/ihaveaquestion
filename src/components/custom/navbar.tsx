import Link from "next/link";
import { Button } from "../ui/button";

const user1 = {
  name: "George Sarpong Afrifa",
  email: "gsafrifa@gmail.com",
  lessons: [
    {
      id: 1,
      title: "Privacy and Confidentiality in Healthcare",
    },
    { id: 2, title: "Telehealth" },
    { id: 3, title: "Electronic Health Record" },
  ],
  questions: [
    { id: 1, lessonId: 1, question: "Please what is confidentiality" },
  ],
};

const user2 = null;

export default function Navbar() {
  return (
    <nav className="h-14 w-full flex items-center justify-between border-b-2">
      <Button size="sm" asChild>
        <Link href="/">Home</Link>
      </Button>
      {user2 ? (
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
            <Link href="/sign-in">Sign In</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/sign-up">Sign Up</Link>
          </Button>
        </div>
      )}
    </nav>
  );
}
