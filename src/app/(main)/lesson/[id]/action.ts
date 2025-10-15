"use server";

import prisma from "@/lib/prisma";
import { questionSchema, QuestionValues } from "@/validators";

export async function postQuestion(values: QuestionValues) {
  const validData = questionSchema.safeParse(values);

  if (!validData.success) return { error: "Invalid values. Please try again." };

  const { lessonId, nickname, question } = validData.data;

  await prisma.question.create({
    data: {
      askedBy: nickname,
      question,
      lessonId,
    },
  });

  return { success: "Question has been posted successfully." };
}
