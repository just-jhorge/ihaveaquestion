"use client";

import Link from "next/link";
import { DoorOpen, DotIcon, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { kyInstance } from "@/lib/ky";
import { LessonSelect } from "@/types";
import { format } from "date-fns";

export default function Lessons() {
  const {
    data: lessons,
    error,
    isFetching,
  } = useQuery({
    queryKey: ["lessons"],
    queryFn: () => kyInstance.get("/api/lessons").json<LessonSelect[]>(),
    retry: 3,
  });

  if (isFetching) {
    return (
      <div className="w-full h-[calc(100svh-58px)] flex items-center justify-center">
        <div className="flex items-center gap-2">
          <Loader2 className="size-4 animate-spin" />
          Fetching active lessons...
        </div>
      </div>
    );
  }

  if (error) {
    return <div>Error fetching data</div>;
  }

  if (!lessons) {
    return <div>No lessons found</div>;
  }

  return (
    <section className="w-full py-5">
      <h2 className="mb-5 font-medium text-lg">Active Lessons:</h2>
      <div className="space-y-6">
        {lessons.map((lesson, idx) => (
          <div
            key={lesson.id}
            className="flex items-start justify-between gap-3"
          >
            <div className="flex items-start">
              <h3 className="mr-2 text-lg">{idx + 1}.</h3>
              <div>
                <h2 className="font-semibold text-base xl:text-lg">
                  {lesson.topic}
                </h2>
                <div className="flex items-center gap-1">
                  <p className="text-xs xl:text-sm text-muted-foreground">
                    {lesson.questions.length}{" "}
                    {lesson.questions.length === 1 ? "Question" : "Questions"}
                  </p>
                  <DotIcon />
                  <p className="text-sm text-muted-foreground">
                    {format(lesson.createdAt, "dd MMM yyyy")}
                  </p>
                </div>
              </div>
            </div>

            <Button variant="secondary" asChild>
              <Link href={`/lesson/${lesson.id}`}>
                <DoorOpen />
                Join
              </Link>
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}
