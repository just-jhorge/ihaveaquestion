"use client";

import { Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Lesson } from "@prisma/client";
import NewLessonButton from "./NewLessonButton";

export default function Lessons({
  userId,
  lessons,
}: {
  userId: string;
  lessons: Lesson[];
}) {
  return (
    <div className="py-5">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-xl font-semibold">
          You have ({lessons.length}) lessons
        </h3>
        <NewLessonButton userId={userId} />
      </div>
      <div className="space-y-3">
        {lessons.length === 0 ? (
          <div>You have no lessons available.</div>
        ) : (
          lessons.map((lesson, idx) => (
            <div key={idx} className="flex items-center justify-between">
              <div className="flex-1 flex items-center gap-2">
                <h2>{idx + 1}.</h2>
                <h2 className="text-lg">{lesson.topic}</h2>
              </div>
              <Button size="icon-sm" variant="destructive">
                <Trash />
              </Button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
