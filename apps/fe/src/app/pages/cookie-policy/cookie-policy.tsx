import styles from './cookie-policy.module.scss';

/* eslint-disable-next-line */
export interface CookiePolicyProps {}

export function CookiePolicy(props: CookiePolicyProps) {
  return (
    <div className={'p-5 max-w-[800px] px-[60px] mx-auto'}>
      <h1>Cookie Policy</h1>
    </div>
  );
}

export default CookiePolicy;
