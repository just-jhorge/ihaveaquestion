"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { answerSchema, AnswerValues } from "@/validators";
import { zodResolver } from "@hookform/resolvers/zod";
import { Question } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useTransition, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { answerQuestion } from "./action";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Loader2 } from "lucide-react";

interface QuestionItemProps {
  idx: number;
  question: Question;
}

export default function QuestionItem({ idx, question }: QuestionItemProps) {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();
  const [showAnswerBox, setShowAnswerBox] = useState(false);

  function openAnswerBox() {
    if (question.isAnswered) {
      toast.info("This question has already been answered!");
      return;
    }

    setShowAnswerBox(true);
  }

  const form = useForm({
    resolver: zodResolver(answerSchema),
    defaultValues: { questionId: question.id, answer: "" },
  });

  function onSubmit(values: AnswerValues) {
    startTransition(async () => {
      const res = await answerQuestion(values);

      if (res.error) {
        toast.error(res.error);
        return;
      }

      if (res.success) {
        toast.success(res.success);
        router.refresh();
        form.reset();
        setShowAnswerBox(false);
      }
    });
  }

  return (
    <article className="pb-5">
      <div className="flex items-center justify-between gap-5 pb-3">
        <div className="flex items-center">
          <p className="mr-2">{idx + 1}.</p>
          <p>{question.question}</p>
        </div>
        <Button size="sm" onClick={openAnswerBox}>
          Answer
        </Button>
      </div>
      {showAnswerBox && (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="mb-2">
              <FormField
                control={form.control}
                name="answer"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        {...field}
                        className="min-h-20"
                        placeholder="Please write answer here..."
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button size="sm" variant="secondary" disabled={isPending}>
              {isPending && <Loader2 className="animate-spin size-4" />}
              Post Answer
            </Button>
          </form>
        </Form>
      )}
    </article>
  );
}
