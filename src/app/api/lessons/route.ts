import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const lessons = await prisma.lesson.findMany({
      where: { isActive: true },
      include: { questions: true },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(lessons);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
