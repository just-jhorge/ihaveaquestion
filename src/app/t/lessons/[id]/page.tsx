import { Button } from "@/components/ui/button";
import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import React, { cache } from "react";
import QuestionItem from "./QuestionItem";

type Params = Promise<{ id: string }>;

const getLesson = cache(async (id: string) => {
  const lesson = await prisma.lesson.findUnique({
    where: { id },
    select: {
      id: true,
      topic: true,
      questions: { orderBy: { createdAt: "desc" } },
      createdAt: true,
      isActive: true,
    },
  });

  if (!lesson) notFound();

  return lesson;
});

export default async function Page({ params }: { params: Params }) {
  const { id } = await params;

  const lesson = await getLesson(id);

  return (
    <div className="py-5">
      <h2 className="text-2xl font-medium mb-5">T. {lesson.topic}</h2>
      <h4 className="text-lg border-b border-dashed mb-5">Questions: </h4>
      {lesson.questions.map((q, idx) => (
        <QuestionItem key={idx} idx={idx} question={q} />
      ))}
    </div>
  );
}
