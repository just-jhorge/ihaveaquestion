"use client";

import { lessonSchema, LessonValues } from "@/validators";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { addLesson } from "./action";
import { toast } from "sonner";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

interface NewLessonModalProps {
  open: boolean;
  userId: string;
  onClose: () => void;
}

export default function NewLessonModal({
  open,
  userId,
  onClose,
}: NewLessonModalProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const form = useForm({
    resolver: zodResolver(lessonSchema),
    defaultValues: { tutorId: userId, topic: "" },
  });

  function onSubmit(values: LessonValues) {
    startTransition(async () => {
      const res = await addLesson(values);

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
          <DialogTitle>Add Lesson</DialogTitle>
          <DialogDescription>
            Add a new lesson for students to ask questions on
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="mb-5">
              <FormField
                control={form.control}
                name="topic"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Lesson Topic</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        className="min-h-20"
                        placeholder="Introduction to Nursing and Midwifery Informatics"
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
                Add Lesson
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
