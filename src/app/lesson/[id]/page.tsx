import LessonQuestion from "@/components/custom/lesson-question";
import { Button } from "@/components/ui/button";
import { HandIcon } from "lucide-react";

export default function Page() {
  return (
    <div className="py-5">
      <div className="flex items-center gap-5 justify-between mb-5">
        <h2 className="text-xl font-semibold max-w-xl">
          Privacy and Confidentiality in Healthcare Settings
        </h2>
        <Button variant="outline">
          <HandIcon /> Ask a Question
        </Button>
      </div>
      <div>
        {[...new Array(10)].map((_, idx) => (
          <LessonQuestion key={idx} />
        ))}
      </div>
    </div>
  );
}
