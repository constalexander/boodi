import { createContext, useContext, useState } from 'react';
import URLService from '@boodi/services/url.service';

const UrlServiceContext = createContext<URLService | null>(null);

export const useURLService = () => {
  const context = useContext(UrlServiceContext);
  if (context === null) {
    throw new Error('useURLService must be used within a URLProvider');
  }
  return context;
};

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
