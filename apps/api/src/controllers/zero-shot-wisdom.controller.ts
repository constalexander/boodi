import { Request } from 'express';
import { Stream } from 'openai/streaming.mjs';
import { ChatCompletionChunk } from 'openai/resources/index.mjs';
import config from '../configs/app.config.js';
import { saveInteraction } from '../services/supabase.service.js';
import { getStreamingCompletion } from '../services/openai.service.js';
import { countTokens } from '../utils/utils.js';

export const ask = async (req: Request) => {
  if (!req.ws) return;
  const ws = await req.ws();

  ws.on('error', console.error);

  ws.on('message', (msg: string) => {
    const req = JSON.parse(msg);

    const startStream = async (input: string) => {
      const params = {
        messages: [
          {
            role: 'system',
            content: config.prompts.zeroShotWisdom,
          },
          {
            role: 'user',
            content: input,
          },
        ],
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
      if (config.app.env !== 'dev') {
        await saveInteraction(
          '/zero-shot-wisdom',
          input,
          output,
          totalTokens,
          req.userUUID
        );
      }
    };

    startStream(req.inputText);
  });
};

export const quote = async (req: Request) => {
  if (!req.ws) return;
  const ws = await req.ws();

  ws.on('error', console.error);

  ws.on('message', (msg: string) => {
    const req = JSON.parse(msg);

    const startStream = async (input: string) => {
      const params = {
        messages: [
          {
            role: 'system',
            content: `${config.prompts.zeroShotWisdom} ${config.prompts.quote}`,
          },
          {
            role: 'user',
            content: input,
          },
        ],
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

      if (config.app.env !== 'dev') {
        await saveInteraction(
          '/zero-shot-wisdom/quote',
          input,
          output,
          totalTokens,
          req.userUUID
        );
      }
    };

    startStream(req.inputText);
  });
};
