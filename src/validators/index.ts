import { z } from "zod";

export const questionSchema = z.object({
  lessonId: z.string(),
  nickname: z
    .string()
    .min(1, { error: "How should we call you?" })
    .max(20, { error: "Nickname cannot be more than characters." }),
  question: z
    .string()
    .min(1, { error: "Question is required" })
    .min(10, { error: "Minimum 10 characters" }),
});

export type QuestionValues = z.infer<typeof questionSchema>;

export const lessonSchema = z.object({
  tutorId: z.string(),
  topic: z.string(),
});

export type LessonValues = z.infer<typeof lessonSchema>;

export const answerSchema = z.object({
  questionId: z.string(),
  answer: z.string(),
});

export type AnswerValues = z.infer<typeof answerSchema>;
