import { createContext } from 'react';
import SupabaseService from '@boodi/services/supabase.service';

const SupabaseServiceContext = createContext<SupabaseService | null>(null);

export default SupabaseServiceContext;
