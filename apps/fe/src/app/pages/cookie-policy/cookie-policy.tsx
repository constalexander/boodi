import styles from './cookie-policy.module.scss';

/* eslint-disable-next-line */
export interface CookiePolicyProps {}

export function CookiePolicy(props: CookiePolicyProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to CookiePolicy!</h1>
    </div>
  );
}

export default CookiePolicy;
