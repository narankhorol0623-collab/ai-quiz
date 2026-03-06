import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const quiz = await prisma.quiz.create({
      data: {
        id: Date.now().toString(),
        question: "hi",
        options: ["hiii", "hehe"],
        answer: "hi",
        articleId: "hii",
      },
    });

    return NextResponse.json(
      { message: "Quiz created successfully!" },
      { status: 200 },
    );
  } catch (error) {
    return new Response("Not available to create quiz!", { status: 400 });
  }
}
