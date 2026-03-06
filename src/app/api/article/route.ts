import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const article = await prisma.article.create({
      data: {
        id: Date.now().toString(),
        title: "asd",
        content: "asd",
        summary: "asd",
        userId: "asdfasd",
      },
    });

    return NextResponse.json(
      { message: "Article made up successfully!" },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Not available to search!" },
      { status: 400 },
    );
  }
}
