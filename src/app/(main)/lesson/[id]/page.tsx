import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/custom/navbar";
import { Button } from "@/components/ui/button";
import { HandIcon, MegaphoneIcon } from "lucide-react";
import { cache } from "react";
import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import QuestionModalButton from "./QuestionModalButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
      _count: { select: { questions: true } },
      tutor: { select: { name: true } },
    },
  });

  if (!lesson) notFound();

  return lesson;
});

export default async function Page({ params }: { params: Params }) {
  const { id } = await params;
  const lesson = await getLesson(id);

  return (
    <>
      <Navbar />
      <div className="py-5">
        <div className="flex items-center gap-5 justify-between mb-5">
          <div>
            <h2 className="text-base xl:text-xl font-semibold max-w-xl">
              {lesson.topic}
            </h2>
            <p className="text-xs xl:text-sm text-muted-foreground">
              {lesson.tutor.name}
            </p>
          </div>
          <QuestionModalButton lesson={lesson} />
        </div>
        <div>
          {lesson.questions.length === 0 ? (
            <p className="text-lg text-muted-foreground">
              There are no questions for this lesson.
            </p>
          ) : (
            <Accordion type="single" collapsible>
              {lesson.questions.map((q) => (
                <AccordionItem value={q.id} key={q.id}>
                  <AccordionTrigger>{q.question}</AccordionTrigger>
                  <AccordionContent>
                    {q.isAnswered ? (
                      <p>Ans: {q.answer}</p>
                    ) : (
                      <div className="space-x-2">
                        <Badge
                          variant="outline"
                          className="bg-emerald-600 text-white"
                        >
                          <HandIcon className="mr-1" /> {q.askedBy}
                        </Badge>
                        <Badge variant="destructive">
                          <MegaphoneIcon className="mr-1" />
                          Not Answered
                        </Badge>
                      </div>
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          )}
        </div>
      </div>
    </>
  );
}
