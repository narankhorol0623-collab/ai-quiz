import { error } from "console";
import OpenAI from "openai";

export async function openaiTextToImage(prompt: string) {
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_CONNECTION_KEY,
  });

  const response = await openai.images.generate({
    model: "dall-e-3",
    prompt: prompt,
    n: 1,
  });
}
