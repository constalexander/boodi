import { useState } from 'react';
import UrlServiceContext from '@boodi/contexts/url.context';
import URLService from '@boodi/services/url.service';

type URLProviderProps = {
  children?: React.ReactNode;
};

export const URLProvider: React.FC<URLProviderProps> = ({ children }) => {
  const [urlService] = useState(() => URLService.getInstance());

  return (
    <UrlServiceContext.Provider value={urlService}>
      {children}
    </UrlServiceContext.Provider>
  );
};
