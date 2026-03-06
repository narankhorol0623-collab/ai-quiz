import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";
import { Webhook } from "svix";
export async function POST(request: NextRequest, req: NextRequest) {
  try {
    const webhookSecret = process.env.CLERK_WEBHOOK_KEY;

    if (!webhookSecret) {
      return NextResponse.json(
        { message: "Missing webhook secret!" },
        { status: 400 },
      );
    }

    const svixId = req.headers.get("svix-Id");
    const svixTimestamp = req.headers.get("svix-Id");
    const svixSignature = req.headers.get("svix-Id");

    if (!svixId || !svixSignature || !svixTimestamp) {
      return NextResponse.json({ message: "Error" }, { status: 400 });
    }

    const webhook = new Webhook(webhookSecret);
    const body = await req.text();

    try {
      const event = webhook.verify(body, {
        "svix-id": svixId,
        "svix-signature": svixSignature,
        "svix-timestamp": svixTimestamp,
      });

      const user = await prisma.user.create({
        data: {
          id: Date.now().toString(),
          email: "test@test.com",
          username: "test",
        },
      });

      return NextResponse.json(
        { message: "Article made up successfully!" },
        { status: 200 },
      );
    } catch (error) {
      return NextResponse.json(
        { message: "Invaliid Signature!" },
        { status: 400 },
      );
    }
  } catch (error) {
    return new Response("Not available to search!", { status: 400 });
  }
}
