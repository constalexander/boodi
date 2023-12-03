import styles from './privacy-policy.module.scss';

/* eslint-disable-next-line */
export interface PrivacyPolicyProps {}

export function PrivacyPolicy(props: PrivacyPolicyProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to PrivacyPolicy!</h1>
    </div>
  );
}

export default PrivacyPolicy;
