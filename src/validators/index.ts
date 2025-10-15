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
