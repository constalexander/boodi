import { createClient } from '@supabase/supabase-js';

class SupabaseService {
  private static instance: SupabaseService;
  private _supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_ANON_KEY
  );

  public static getInstance(): SupabaseService {
    if (!SupabaseService.instance) {
      SupabaseService.instance = new SupabaseService();
    }
    return SupabaseService.instance;
  }

  get supabase() {
    return this._supabase;
  }
}

export default SupabaseService;
