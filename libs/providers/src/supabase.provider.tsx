import { useState } from 'react';
import SupabaseServiceContext from '@boodi/contexts/supabase.context';
import SupabaseService from '@boodi/services/supabase.service';

type SupabaseProviderProps = {
  children?: React.ReactNode;
};

const SupabaseProvider: React.FC<SupabaseProviderProps> = ({ children }) => {
  const [supabaseService] = useState(() => SupabaseService.getInstance());

  return (
    <SupabaseServiceContext.Provider value={supabaseService}>
      {children}
    </SupabaseServiceContext.Provider>
  );
};

export default SupabaseProvider;
