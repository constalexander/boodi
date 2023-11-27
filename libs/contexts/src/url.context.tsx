import URLService from '@boodi/services/url.service';
import { createContext } from 'react';

const UrlServiceContext = createContext<URLService | null>(null);

export default UrlServiceContext;
