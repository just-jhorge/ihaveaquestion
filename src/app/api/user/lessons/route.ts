import prisma from "@/lib/prisma";
import { getSession } from "@/lib/get-session";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const session = await getSession();
    const user = session?.user;

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const lessons = await prisma.lesson.findMany({
      where: { tutorId: user.id },
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
