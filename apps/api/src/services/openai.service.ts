import OpenAI from 'openai';
import { Stream } from 'openai/streaming.mjs';
import { ChatCompletionChunk } from 'openai/resources/index.mjs';
import {
  ChatCompletionCreateParamsNonStreaming,
  ChatCompletionCreateParamsStreaming,
} from 'openai/resources/index.mjs';
import config from '../configs/app.config.js';

export const ai = new OpenAI({
  apiKey: config.openai.key,
});

export const getStreamingCompletion = async (
  extraParams: any
): Promise<Stream<ChatCompletionChunk>> => {
  const params: ChatCompletionCreateParamsStreaming = {
    ...defaultParamsStreaming,
    ...extraParams,
    messages: [...defaultParamsStreaming.messages, ...extraParams.messages],
  };

  console.warn(extraParams, params.temperature);

  const completion = await ai.chat.completions.create(params);
  return completion;
};

export const defaultParamsNonStreaming: ChatCompletionCreateParamsNonStreaming =
  {
    model: config.openai.model,
    temperature: 1,
    max_tokens: Number(config.openai.max_tokens_1),
    messages: [
      {
        role: 'system',
        content: config.prompts.initBoodi,
      },
    ],
  };

export const defaultParamsStreaming: ChatCompletionCreateParamsStreaming = {
  ...defaultParamsNonStreaming,
  stream: true,
};
