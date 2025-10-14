import { HandIcon, MegaphoneIcon } from "lucide-react";
import { Badge } from "../ui/badge";

export default function LessonQuestion() {
  return (
    <article className="flex items-start first:border-t not-last:border-b border-border py-5">
      <div className="flex-1">
        <h1 className="text-base xl:text-xl mb-2">
          Please can you explain confidentiality better?
        </h1>
        <div className="space-x-1">
          <Badge variant="outline" className="bg-emerald-600 text-white">
            <HandIcon className="mr-1" /> Grace
          </Badge>
          <Badge variant="destructive">
            <MegaphoneIcon className="mr-1" /> Not Answered
          </Badge>
        </div>
      </div>
    </article>
  );
}
