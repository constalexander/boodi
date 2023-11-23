import React, { createContext, useContext, useState } from 'react';
import URLService from '@boodi/services/url.service';

const UrlServiceContext = createContext<URLService | null>(null);

export const useURLService = () => {
  const context = useContext(UrlServiceContext);
  if (context === null) {
    throw new Error('useURLService must be used within a URLServiceProvider');
  }
  return context;
};

type URLServiceProviderProps = {
  children?: React.ReactNode;
};

export const URLServiceProvider: React.FC<URLServiceProviderProps> = ({
  children,
}) => {
  const [urlService] = useState(() => URLService.getInstance());

  return (
    <UrlServiceContext.Provider value={urlService}>
      {children}
    </UrlServiceContext.Provider>
  );
};
