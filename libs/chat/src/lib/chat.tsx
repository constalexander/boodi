import { useEffect, useState } from 'react';
import { supabase } from '@boodi/auth';
import DOMPurify from 'dompurify';
import { SignInPopup } from '@boodi/auth';
import styles from './chat.module.scss';

/* eslint-disable-next-line */
export interface ChatProps {}

export function Chat(props: ChatProps) {
  const [truthBtnDisabled, setTruthBtnDisabled] = useState(false);
  const [truthBtnText, setTruthBtnText] = useState('Show Me The Truth');
  const [session, setSession] = useState<any>(null);
  const [currentUser, setCurrentuser] = useState<any>(null);
  const [suffering, setSuffering] = useState('');
  const [truths, setTruths] = useState('');
  const [eightfoldPath, setEightfoldPath] = useState('');
  const [isVisibleSignInPopup, setIsVisibleSignInPopup] = useState(false);

  useEffect(() => {
    document.body.classList.add(styles['chat']);
    document.title = 'Boodi | Chat';

    // getSession();
    // getUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session as any);
    });

    return () => {
      document.body.classList.remove(styles['chat']);
      subscription.unsubscribe();
    };
  }, []);

  const getUser = async () => {
    if (session) {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();

      if (error) return;
      setCurrentuser(user);
      console.log(user);
    }
  };

  const getSession = async () => {
    const { data: session, error: sessionError } =
      await supabase.auth.getSession();
    setSession(session);

    console.log('session-data', session);
    console.log('session-error', sessionError);
  };

  const signInWithOAuth = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: 'http://localhost:8888/chat',
        //redirectTo: 'https://boodi.ai',
        queryParams: {
          access_type: 'offline',
          prompt: 'consent',
        },
      },
    });
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (!error) window.location.reload();
  };

  const toggleSignInPopup = () => {
    setIsVisibleSignInPopup(true);
  };

  const refreshSession = async () => {
    const { data, error } = await supabase.auth.refreshSession();
    const { session, user } = data;
    console.log('refreshed session', session, user);

    // const { data: refreshed, error: refreshError } =
    //   await supabase.auth.refreshSession();

    // console.log('sessionrefresh-data', refreshed);
    // console.log('sessionrefresh-error', refreshError);
  };

  const showMeTheTruth = async () => {
    setTruthBtnDisabled(true);
    setTruthBtnTextRandomly();
    try {
      await Promise.all([getFourTruths(), getEightfoldPath()]);
      resetShowMeTheTruthBtn();
    } catch (error) {
      console.error(error);
    }
    resetShowMeTheTruthBtn();
  };

  const setTruthBtnTextRandomly = () => {
    const options = [
      'Seeking Insights...',
      'Channeling Wisdom...',
      'Gathering Light...',
    ];
    const randomIndex = Math.floor(Math.random() * options.length);
    setTruthBtnText(options[randomIndex]);
  };

  const resetShowMeTheTruthBtn = () => {
    setTruthBtnDisabled(false);
    setTruthBtnText('Show Me The Truth');
  };

  const getFourTruths = async () => {
    try {
      const response = await fetch(
        //'http://localhost:5000/four-noble-truths',
        'https://boodi-proxy.replit.app/four-noble-truths',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Origin: window.location.origin,
          },
          body: JSON.stringify({ suffering }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setTruths(data.result);
      } else {
        throw new Error(`Request failed with status ${response.status}`);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const getEightfoldPath = async () => {
    //const domain = 'http://localhost:5000';
    const domain = 'https://boodi-proxy.replit.app';
    const endpoint = session
      ? '/eightfold-path-full'
      : '/eightfold-path-first-only';

    const url = `${domain}${endpoint}`;
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Origin: window.location.origin,
        },
        body: JSON.stringify({ suffering }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setEightfoldPath(data.result);
      } else {
        throw new Error(`Request failed with status ${response.status}`);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className={`${styles['container']}`}>
      <div className={styles['user-top-bar']}>
        {/* <img src={session.user_metadata.picture} alt="Profile pic"></img>

          <span className={styles['full-name']}>
            {currentUser.user_metadata.full_name}
          </span>
          <br /> 

          <span className={styles['email']}>
            {currentUser.user_metadata.email}
          </span> */}
        {session && (
          <button
            className={`ghost-btn w-[100px] h-[20px] self-end`}
            onClick={() => {
              signOut();
            }}
          >
            Sign out
          </button>
        )}

        {!session && (
          <button
            className={`ghost-btn w-[100px] h-[20px] self-end`}
            onClick={() => {
              //signInWithEmail();
              //signInWithOAuth();
              toggleSignInPopup();
            }}
          >
            Sign in
          </button>
        )}
      </div>

      <h1>
        A Message From: <br />
        Boodi, The Enlightened Guide
      </h1>
      <p className={styles['boodi-message']}>
        "Dear traveler, in the vast expanse of the universe, you are a unique
        beacon of light. I acknowledge the weight you carry, the challenges you
        face, and the questions you seek answers to. In your quest for
        understanding, know that the essence of truth lies within you, waiting
        to be uncovered. Share with me your burdens, and let me guide you
        through the timeless wisdom of the Four Noble Truths, illuminating a
        path of liberation and peace."
      </p>

      <h2>Release Your Worries</h2>
      <p className={`${styles['worries-subtext']} max-w-[570px]`}>
        Put down what you’ve been carrying. Unburden your heart. Lighten your
        load. Speak your silence. Tell me - what has been causing you stress?
      </p>
      <textarea
        placeholder="E.g., 'I'm overwhelmed with work and personal life.'"
        value={suffering}
        onChange={(e) => setSuffering(e.target.value)}
      ></textarea>
      <p className="max-w-[570px]">
        <button
          className={`${styles['truth-btn']} primary-btn ${
            truthBtnDisabled ? 'disabled' : ''
          }`}
          onClick={() => showMeTheTruth()}
          disabled={truthBtnDisabled}
        >
          {truthBtnText}
        </button>
      </p>

      {truths && eightfoldPath && (
        <>
          <div className={styles['four-noble-truths']}>
            <h2>The Four Noble Truths</h2>
            <div
              className={styles['inner-content']}
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(truths) }}
            ></div>
          </div>

          <div className={styles['eightfold-path']}>
            <h2>The Noble Eightfold Path</h2>
            <div
              className={styles['inner-content']}
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(eightfoldPath),
              }}
            ></div>
            {!session && (
              <div className={styles['create-free-account']}>
                <p>
                  To access steps 2 &ndash; 8, <br />
                  create a free account.
                </p>

                <button
                  className={`${styles['gimme-btn']} primary-btn`}
                  onClick={() => {
                    toggleSignInPopup();
                  }}
                >
                  Gimme That Boodi
                </button>
              </div>
            )}
          </div>
        </>
      )}

      <div className={styles['footer-links']}>
        <a href="https://paypal.me/djprorok" target="_blank">
          Donate
        </a>
        <a
          href="https://calendly.com/davidprorok/clarity-session-for-innovators"
          target="_blank"
        >
          Find a coach
        </a>
      </div>
      {isVisibleSignInPopup && (
        <SignInPopup
          closePopup={() => setIsVisibleSignInPopup(false)}
        ></SignInPopup>
      )}
    </div>
  );
}

export default Chat;
