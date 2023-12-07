import { createContext } from 'react';
import URLService from '@boodi/services/url.service';
import SupabaseService from '@boodi/services/supabase.service';

const SingletonsContext = createContext<{
  urlService: URLService;
  supabaseService: SupabaseService;
} | null>(null);

export default SingletonsContext;
