import { useContext } from 'react';
import SupabaseServiceContext from '@boodi/contexts/supabase.context';

const useSupabaseService = () => {
  const context = useContext(SupabaseServiceContext);
  if (context === null) {
    throw new Error(
      'useSupabaseService must be used within a SupabaseServiceProvider'
    );
  }
  return context;
};

export default useSupabaseService;
