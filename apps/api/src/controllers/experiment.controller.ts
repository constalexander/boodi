import { Request, Response } from "express";
import { ai } from "./../services/openai.service.js";
import config from "./../configs/app.config.js";

export const experiment1 = async (req: Request, res: Response) => {
  const completion = await ai.chat.completions.create({
    model: config.openai.model,
    temperature: 1.0,
    max_tokens: 256,
    messages: [
      { role: "system", content: config.prompts.zeroShotLearningAdvice },
      {
        role: "user",
        content: process.env.ALEX_PROMPT_1 || "",
      },
    ],
  });

  res.send(completion.choices[0]);
};
