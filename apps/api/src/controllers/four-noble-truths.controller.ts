import { NextFunction, Request, Response } from "express";
import { Stream } from "openai/streaming.mjs";
import { ChatCompletionChunk } from "openai/resources/index.mjs";
import config from "../configs/app.config.js";
import { getStreamingCompletion } from "../services/openai.service.js";
import { saveInteraction } from "../services/supabase.service.js";

export const ask = async (req: Request, res: Response, next: NextFunction) => {
  if (!req.ws) return;
  const ws = await req.ws();

  ws.on("error", console.error);

  ws.on("message", (msg: string) => {
    const msgObj = JSON.parse(msg);

    const startStream = async (message: string) => {
      const params = {
        messages: [
          {
            role: "system",
            content: config.prompts.fourNobleTruths,
          },
          {
            role: "user",
            content: message,
          },
        ],
        max_tokens: 512,
      };

      const stream: Stream<ChatCompletionChunk> = await getStreamingCompletion(
        params
      );

      let output = "";
      for await (const chunk of stream) {
        const token = chunk.choices[0]?.delta.content || "";
        output += token;

        ws.send(token);
      }

      ws.close();

      await saveInteraction(
        "/four-noble-truths",
        message,
        output,
        msgObj.userUUID
      );
    };

    startStream(msgObj.suffering);
  });
};
