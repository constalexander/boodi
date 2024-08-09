import dotenv from 'dotenv';
import fs from 'fs';
import { Config } from '../models/app-config.type.js';

dotenv.config();

const env = process.env;
const config: Config = {
  app: {
    env: env.env || '',
    port: Number(env.PORT) || 3000,
    allowedOrigins: [
      'http://localhost:8888',
      'https://boodi.netlify.app',
      'https://boodi.ai',
    ],
  },
  supabase: {
    url: env.SUPABASE_URL ?? '',
    anonKey: env.SUPABASE_ANON_KEY ?? '',
    serviceRoleKey: env.SUPABASE_SERVICE_ROLE_KEY ?? '',
  },
  openai: {
    key: env.OPENAI_KEY || '',
    // model: 'gpt-4-1106-preview',
    model: 'gpt-4o-2024-08-06',
    max_tokens_1: env.MAX_TOKENS_1 ?? '',
  },
  // see loadPromptsIntoConfig in supabase.service.js
  prompts: {
    eightfoldPathFirstOnly: '',
    eightfoldPathFull: '',
    fourNobleTruths: '',
    initBoodi: '',
    quote: '',
    reflection: '',
    zeroShotLearningAdvice: '',
    zeroShotWisdom: '',
  },
};

export default config;
