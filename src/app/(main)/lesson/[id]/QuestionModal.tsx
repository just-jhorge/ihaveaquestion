"use client";

import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { LessonSelect } from "@/types";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";
import { postQuestion } from "./action";
import { toast } from "sonner";
import { questionSchema, QuestionValues } from "@/validators";

interface QuestionModalProps {
  open: boolean;
  onClose: () => void;
  lesson: LessonSelect;
}

export default function QuestionModal({
  open,
  onClose,
  lesson,
}: QuestionModalProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const form = useForm({
    resolver: zodResolver(questionSchema),
    defaultValues: {
      lessonId: lesson.id,
      nickname: "",
      question: "",
    },
  });

  function onSubmit(values: QuestionValues) {
    startTransition(async () => {
      const res = await postQuestion(values);

      if (res.error) {
        toast.error(res.error);
        return;
      }

      if (res.success) {
        toast.success(res.success);
        router.refresh();
        form.reset();
        onClose();
      }
    });
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{lesson.topic}</DialogTitle>
          <DialogDescription>
            Post a question for the above topic
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="space-y-4 mb-5">
              <FormField
                control={form.control}
                name="nickname"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Nickname</FormLabel>
                    <FormControl>
                      <Input {...field} type="text" placeholder="Nightingale" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="question"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Question</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        className="min-h-20"
                        placeholder="What's your question?"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button disabled={isPending} type="button" variant="secondary">
                  Cancel
                </Button>
              </DialogClose>
              <Button disabled={isPending}>
                {isPending && <Loader2 className="animate-spin size-4" />}
                Post Question
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
