import { Header } from '@boodi/ui';

/* eslint-disable-next-line */
export interface SandboxProps {}

export function Sandbox(props: SandboxProps) {
  return (
    <div>
      <Header />
      <h1>Welcome to Sandbox!</h1>
      <p>I hope you have fun!</p>
    </div>
  );
}

export default Sandbox;
