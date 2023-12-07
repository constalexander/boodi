// libs/providers/src/singletons.provider.tsx
import { useMemo } from 'react';
import SingletonsContext from '@boodi/contexts/singletons.context';
import URLService from '@boodi/services/url.service';
import SupabaseService from '@boodi/services/supabase.service';
import URLProvider from './url.provider';
import SupabaseProvider from './supabase.provider';

type SingletonsProviderProps = {
  children: React.ReactNode;
};

const SingletonsProvider: React.FC<SingletonsProviderProps> = ({
  children,
}) => {
  const urlService = useMemo(() => URLService.getInstance(), []);
  const supabaseService = useMemo(() => SupabaseService.getInstance(), []);

  return (
    <SingletonsContext.Provider value={{ urlService, supabaseService }}>
      <URLProvider>
        <SupabaseProvider>{children}</SupabaseProvider>
      </URLProvider>
    </SingletonsContext.Provider>
  );
};

export default SingletonsProvider;
