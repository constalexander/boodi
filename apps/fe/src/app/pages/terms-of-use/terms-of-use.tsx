import styles from './terms-of-use.module.scss';

/* eslint-disable-next-line */
export interface TermsOfUseProps {}

export function TermsOfUse(props: TermsOfUseProps) {
  return (
    <div className={'p-5 max-w-[800px] px-[60px] mx-auto'}>
      <h1>Terms of Use</h1>
    </div>
  );
}

export default TermsOfUse;
