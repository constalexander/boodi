import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { Provider } from 'mobx-react';
import { appStore } from '@boodi/stores/app.store';
import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <Provider appStore={appStore}>
      <App />
    </Provider>
  </StrictMode>
);
