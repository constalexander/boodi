import { NextFunction, Request, Response } from 'express';
import {
  ChatCompletionChunk,
  ChatCompletionCreateParamsNonStreaming,
  ChatCompletionCreateParamsStreaming,
} from 'openai/resources/index.mjs';
import config from '../configs/app.config.js';
import {
  ai,
  defaultParamsStreaming,
  getStreamingCompletion,
} from '../services/openai.service.js';
import { saveInteraction } from '../services/supabase.service.js';
import { Stream } from 'openai/streaming.mjs';
import { countTokens } from '../utils/utils.js';

// export const askFirstOnly = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   const params: ChatCompletionCreateParamsNonStreaming = {
//     messages: [
//       {
//         role: "system",
//         content: `${config.prompts.boodi}${config.prompts.eightfoldPathFirstOnly}`,
//       },
//       {
//         role: "user",
//         content: `${req.body.suffering}`,
//       },
//     ],
//     model: config.openai.model,
//     temperature: 0.25,
//     max_tokens: 128,
//     n: 1,
//     stop: null,
//   };
//   const completion = await ai.chat.completions.create(params);

//   res.json({
//     result: completion.choices[0].message.content ?? "Please try again",
//   });
// };

// export const askFull = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   const params: ChatCompletionCreateParamsNonStreaming = {
//     messages: [
//       {
//         role: "system",
//         content: `${config.prompts.boodi}${config.prompts.eightfoldPathFull}`,
//       },
//       {
//         role: "user",
//         content: `${req.body.suffering}`,
//       },
//     ],
//     model: config.openai.model,
//     temperature: 0.25,
//     max_tokens: 1024,
//     n: 1,
//     stop: null,
//   };

//   const completion = await ai.chat.completions.create(params);

//   res.json({
//     result: completion.choices[0].message.content ?? "Please try again",
//   });
// };

// export const askFullStreaming = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   res.setHeader("Content-Type", "text/event-stream");
//   res.setHeader("Cache-Control", "no-cache");
//   res.setHeader("Connection", "keep-alive");

//   const params: ChatCompletionCreateParamsStreaming = {
//     ...defaultParamsStreaming,
//   };

//   const stream = await getStreamingCompletion(params);

//   for await (const chunk of stream) {
//     const text = chunk.choices[0]?.delta.content || "";
//     res.write(text);
//   }

//   res.end();
// };

export const askFull = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.ws) return;
  const ws = await req.ws();

  ws.on('error', console.error);

  ws.on('message', (msg: string) => {
    const msgObj = JSON.parse(msg);

    const startStream = async (input: string) => {
      const params = {
        messages: [
          {
            role: 'system',
            content: config.prompts.eightfoldPathFull,
          },
          {
            role: 'user',
            content: input,
          },
        ],
        max_tokens: 512,
      };

      const stream: Stream<ChatCompletionChunk> = await getStreamingCompletion(
        params
      );

      let totalTokens = countTokens(input);
      let output = '';
      for await (const chunk of stream) {
        const token = chunk.choices[0]?.delta.content || '';
        totalTokens++;
        output += token;

        ws.send(token);
      }

      ws.close();

      await saveInteraction(
        '/eightfold-path/full',
        input,
        output,
        totalTokens,
        msgObj.userUUID
      );
    };

    startStream(msgObj.suffering);
  });
};
