import Link from "next/link";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { GraduationCapIcon } from "lucide-react";

export default function LessonCard() {
  return (
    // <div className="w-full border rounded-xl p-6">
    //   <p>Lesson Card</p>
    //   <Button className="w-full">Enter Class</Button>
    // </div>
    <Card>
      <CardHeader>
        <CardTitle className="text-muted-foreground font-normal flex items-center">
          <GraduationCapIcon className="size-5 mr-2" /> George Sarpong Afrifa
        </CardTitle>
      </CardHeader>
      <CardContent>
        <h2 className="text-2xl font-semibold uppercase">
          Privacy and Confidentiality in Healthcare
        </h2>
      </CardContent>
      <CardFooter>
        <Button size="lg" className="w-full" asChild>
          <Link href={`/lesson/34723`}>Enter Classroom</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
