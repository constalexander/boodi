import { createContext } from 'react';
import URLService from '@boodi/services/url.service';

const UrlServiceContext = createContext<URLService | null>(null);

export default UrlServiceContext;
