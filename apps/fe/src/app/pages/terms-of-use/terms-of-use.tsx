import styles from './terms-of-use.module.scss';

/* eslint-disable-next-line */
export interface TermsOfUseProps {}

export function TermsOfUse(props: TermsOfUseProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to TermsOfUse!</h1>
    </div>
  );
}

export default TermsOfUse;
