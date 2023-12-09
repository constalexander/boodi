import { createClient } from '@supabase/supabase-js';
import config from '../configs/app.config.js';
import { Config } from '../models/app-config.type.js';

export const supabase = createClient(
  config.supabase.url,
  config.supabase.serviceRoleKey
);

export const fetchPrompt = async (name: any) => {
  try {
    const { data, error } = await supabase
      .from('prompts')
      .select('*')
      .eq('name', name);
    if (error) throw error;

    return data[0]?.value;
  } catch (error: any) {
    console.error('Error fetching prompts:', error.message);
  }
};

export const loadPromptsIntoConfig = async () => {
  for (const p in config.prompts) {
    const v = await fetchPrompt(p as keyof Config['prompts']);
    if (!v) throw new Error(`Prompt for ${p} not found.`);
    config.prompts[p] = v;
  }
};

export const saveInteraction = async (
  endpoint: string,
  input: string,
  output: string,
  totalTokens: number,
  userUUID?: string
) => {
  const values = {
    endpoint,
    user_input: input,
    boodi_output: output,
    totalTokens: totalTokens,
    user_uuid: userUUID || null,
  };
  const { error } = await supabase.from('interactions').insert(values);

  if (error) {
    console.error('Error saving interaction:', error);
    return false;
  }
  return true;
};
