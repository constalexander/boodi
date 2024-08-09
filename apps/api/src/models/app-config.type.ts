export interface Config {
  app: {
    env: string;
    port: number;
    allowedOrigins: string[];
  };
  supabase: {
    url: string;
    anonKey: string;
    serviceRoleKey: string;
  };
  openai: {
    key: string;
    /** https://platform.openai.com/docs/models/gpt-4o */
    model:
      | 'gpt-3.5-turbo'
      | 'gpt-4'
      | 'gpt-4-1106-preview'
      | 'gpt-4o-2024-08-06';
    max_tokens_1: string;
  };
  prompts: {
    [key: string]: string;
  };
}
