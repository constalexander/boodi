import { useEffect, useState } from 'react';
import { gsEventName, trackEventName } from '@boodi/analytics';
import useSupabaseService from '@boodi/hooks/supabase.hook';
import styles from './sign-in-popup.module.scss';

/* eslint-disable-next-line */
export interface SignInPopupProps {
  closePopup: () => void;
  isSignUp: () => void;
}

export function SignInPopup(props: SignInPopupProps) {
  const [isVisiblePopup, setIsVisiblePopup] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const supabaseService = useSupabaseService();

  useEffect(() => {
    return () => {
      setIsVisiblePopup(true);
    };
  }, []);

  const signInWithEmail = async () => {
    //
    props.closePopup();
    const { data, error } =
      await supabaseService.supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });
  };

  const signUpWithEmail = async () => {
    props.closePopup();
    props.isSignUp();
    await supabaseService.supabase.auth.signUp({ email, password });
  };

  return (
    <div className={styles['sign-in-popup']}>
      <div className={`${styles['card']}`}>
        <div className={`${styles['inner-content']}`}>
          <span className={`${styles['close-btn']}`} onClick={props.closePopup}>
            X
          </span>
          <label htmlFor={'email'}>Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => {
              return;
            }}
          />
          <br />
          <label htmlFor={'password'}>Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => {
              return;
            }}
          />
        </div>
        <div className={`${styles['footer']} w-full`}>
          <button
            className={`${styles['ghost-btn']} ${styles['sign-up-btn']}`}
            onClick={() => {
              trackEventName(gsEventName.signUp_1);
              signUpWithEmail();
            }}
          >
            Sign Up
          </button>
          <button
            className={`${styles['primary-btn']} ${styles['sign-in-btn']}`}
            onClick={() => {
              trackEventName(gsEventName.signIn_2);
              signInWithEmail();
            }}
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignInPopup;
