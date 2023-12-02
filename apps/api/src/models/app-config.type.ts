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
    model: "gpt-3.5-turbo" | "gpt-4" | "gpt-4-1106-preview";
  };
  prompts: {
    [key: string]: string;
  };
}
