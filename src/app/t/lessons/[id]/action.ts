"use server";

import prisma from "@/lib/prisma";
import { answerSchema, AnswerValues } from "@/validators";

export async function answerQuestion(values: AnswerValues) {
  const validData = answerSchema.safeParse(values);

  if (!validData.success) return { error: "Invalid values. Please try again." };

  const { questionId, answer } = validData.data;

  await prisma.question.update({
    where: { id: questionId },
    data: { answer, isAnswered: true },
  });

  return { success: "Question has been answered successfully." };
}
