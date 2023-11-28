import { useContext } from 'react';
import UrlServiceContext from '@boodi/contexts/url.context';

const useURLService = () => {
  const context = useContext(UrlServiceContext);
  if (context === null) {
    throw new Error('useURLService must be used within a URLProvider');
  }
  return context;
};

export default useURLService;
