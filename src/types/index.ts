import { Prisma } from "@prisma/client";

export function getLessonInclude() {
  return {
    tutor: { select: { name: true } },
  } satisfies Prisma.LessonInclude;
}

export function lessonSelect() {
  return {
    id: true,
    isActive: true,
    topic: true,
    createdAt: true,
    questions: true,
    _count: { select: { questions: true } },
  } satisfies Prisma.LessonSelect;
}

export type LessonSelect = Prisma.LessonGetPayload<{
  select: ReturnType<typeof lessonSelect>;
}>;
