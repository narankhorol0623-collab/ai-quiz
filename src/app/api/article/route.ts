import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

export async function POST(request: NextRequest, req: NextRequest) {
  try {
    const webhookSecret = process.env.CLERK_WEBHOOK_KEY;

    const article = await prisma.article.create({
      data: {
        title: "asd",
        content: "asd",
        summary: "asd",
        userId: "asdfasd",
        id: Date.now().toString(),
      },
    });

    return NextResponse.json(
      { message: "Article made up successfully!" },
      { status: 200 },
    );
  } catch (error) {
    return new Response("Not available to search!", { status: 400 });
  }
}
