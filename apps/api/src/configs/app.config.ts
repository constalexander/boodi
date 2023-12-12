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
    //model: "gpt-3.5-turbo",
    //model: "gpt-4",
    model: 'gpt-4-1106-preview',
    max_tokens_1: env.MAX_TOKENS_1 ?? '',
  },
  // see loadPromptsIntoConfig in supabase.service.js
  prompts: {
    initBoodi: '',
    fourNobleTruths: '',
    eightfoldPathFirstOnly: '',
    eightfoldPathFull: '',
    zeroShotLearningAdvice: '',
    zeroShotWisdom: '',
    quote: '',
  },
};

export default config;
