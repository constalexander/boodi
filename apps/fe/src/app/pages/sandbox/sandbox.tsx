import { useContext } from 'react';
import { observer } from 'mobx-react';
import { AppStoreContext } from '@boodi/contexts/app-store.context';
import { Header } from '@boodi/ui';

/* eslint-disable-next-line */
export interface SandboxProps {}

export const Sandbox = observer((props: SandboxProps) => {
  const appStore = useContext(AppStoreContext);
  return (
    <div>
      <Header />
      <h1>Welcome to Sandbox!</h1>
      <p>I hope you have fun!</p>
    </div>
  );
});

export default Sandbox;
