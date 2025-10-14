import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/custom/navbar";
import { Button } from "@/components/ui/button";
import { HandIcon, MegaphoneIcon } from "lucide-react";

export default function Page() {
  return (
    <>
      <Navbar />
      <div className="py-5">
        <div className="flex items-center gap-5 justify-between mb-5">
          <h2 className="text-base xl:text-xl font-semibold max-w-xl">
            Lecture 2: Privacy and Confidentiality
          </h2>
          <Button variant="outline">
            <HandIcon /> Ask Question
          </Button>
        </div>
        <div>
          {[...new Array(10)].map((_, idx) => (
            // <LessonQuestion key={idx} />
            <article key={idx} className="not-last:border-b border-border py-5">
              <div className="flex-1">
                <div className="flex items-center mb-2">
                  <div className="mr-2">{idx + 1}.</div>
                  <h1 className="text-base xl:text-xl">
                    Please can you explain confidentiality better?
                  </h1>
                </div>
                <div className="space-x-1">
                  <Badge
                    variant="outline"
                    className="bg-emerald-600 text-white"
                  >
                    <HandIcon className="mr-1" /> Grace
                  </Badge>
                  <Badge variant="destructive">
                    <MegaphoneIcon className="mr-1" /> Not Answered
                  </Badge>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
