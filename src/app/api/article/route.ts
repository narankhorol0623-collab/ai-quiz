import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_CONNECTION_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    const response = await openai.chat.completions.create({
      model: "gpt-5.2",
      messages: [{ role: "user", content: message }],
    });

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
      // {
      //   reply: response.choices[0].message.content,
      // },
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Not available to search!" },
      { status: 400 },
    );
  }
}
