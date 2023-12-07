import { createContext } from 'react';
import { appStore } from '@boodi/stores/app.store';

export const AppStoreContext = createContext(appStore);
