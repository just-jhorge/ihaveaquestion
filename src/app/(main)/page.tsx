import LessonCard from "@/components/custom/lesson-card";
import Navbar from "@/components/custom/navbar";
import { Button } from "@/components/ui/button";
import { DoorOpen, GraduationCap } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="w-full py-5">
        <h2 className="mb-5 font-medium text-lg">Active Lessons:</h2>
        <div className="space-y-6">
          {[...new Array(6)].map((_, idx) => (
            <div key={idx} className="flex items-start justify-between gap-3">
              <div className="flex items-start">
                <h3 className="mr-2 text-lg">{idx + 1}.</h3>
                <div>
                  <h2 className="font-semibold text-base xl:text-lg">
                    Privacy and Confidentiality in Healthcare
                  </h2>
                  <p className="text-xs xl:text-sm text-muted-foreground">
                    George Sarpong Afrifa
                  </p>
                </div>
              </div>
              <Button variant="secondary" asChild>
                <Link href={`/lesson/342374`}>
                  <DoorOpen />
                  Enter Class
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
