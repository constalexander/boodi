import fs from 'fs';
import path from 'path';
import { NextFunction, Request, Response } from 'express';
import { Stream } from 'openai/streaming.mjs';
import { ChatCompletionChunk } from 'openai/resources/index.mjs';
import config from '../configs/app.config.js';
import { saveInteraction } from '../services/supabase.service.js';
import { ai, getStreamingCompletion } from '../services/openai.service.js';

export const tts = async (req: Request, res: Response, next: NextFunction) => {
  //return; // wip
  const speechFile = path.resolve('./speech.mp3');

  async function main() {
    const mp3 = await (ai.audio as any).speech.create({
      model: 'tts-1-hd',
      voice: 'onyx',
      input: `Take. Rest. Take. Rest.`,
    });
    console.log(speechFile);
    const buffer = Buffer.from(await mp3.arrayBuffer());
    await fs.promises.writeFile(speechFile, buffer);
  }
  main();
};
