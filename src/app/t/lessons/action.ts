"use server";

import prisma from "@/lib/prisma";
import { lessonSchema, LessonValues } from "@/validators";

export async function addLesson(values: LessonValues) {
  const validData = lessonSchema.safeParse(values);

  if (!validData.success) return { error: "Invalid values. Please try again." };

  const { topic, tutorId } = validData.data;

  await prisma.lesson.create({
    data: { topic, tutorId },
  });

  return { success: "Lesson has been added successfully." };
}
