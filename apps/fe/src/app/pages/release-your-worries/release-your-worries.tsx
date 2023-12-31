import { useEffect, useState } from 'react';
import DOMPurify from 'dompurify';
import { gsEventName, trackEventName } from '@boodi/analytics';
import { SignInPopup } from '@boodi/auth';
import useURLService from '@boodi/hooks/url.hook';
import useSupabaseService from '@boodi/hooks/supabase.hook';
import styles from './release-your-worries.module.scss';

/* eslint-disable-next-line */
export interface ReleaseYourWorriesProps {}

export function ReleaseYourWorries(props: ReleaseYourWorriesProps) {
  const urlService = useURLService();
  const supabaseService = useSupabaseService();

  const [truthBtnDisabled, setTruthBtnDisabled] = useState(false);
  const [truthBtnText, setTruthBtnText] = useState('Show Me The Truth');
  const [session, setSession] = useState<any>(null);
  const [currentUser, setCurrentuser] = useState<any>(null);
  const [userDidSignUp, setUserDidSignUp] = useState(false);
  const [suffering, setSuffering] = useState('');
  const [truths, setTruths] = useState('');
  const [eightfoldPathFirstOnly, setEightfoldPathFirstOnly] = useState('');
  const [eightfoldPathFull, setEightfoldPathFull] = useState('');
  const [isVisibleSignInPopup, setIsVisibleSignInPopup] = useState(false);

  useEffect(() => {
    document.body.classList.add(styles['chat']);
    document.title = 'Boodi | Chat';

    // getSession();
    // getUser();

    const {
      data: { subscription },
    } = supabaseService.supabase.auth.onAuthStateChange((_event, session) => {
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
      } = await supabaseService.supabase.auth.getUser();

      if (error) return;
      setCurrentuser(user);
    }
  };

  const getSession = async () => {
    const { data: session, error: sessionError } =
      await supabaseService.supabase.auth.getSession();
    setSession(session);
  };

  const signInWithOAuth = async () => {
    const { data, error } = await supabaseService.supabase.auth.signInWithOAuth(
      {
        provider: 'google',
        options: {
          redirectTo: window.location.origin,
          queryParams: {
            access_type: 'offline',
            prompt: 'consent',
          },
        },
      }
    );
  };

  const signOut = async () => {
    const { error } = await supabaseService.supabase.auth.signOut();
    if (!error) window.location.reload();
  };

  const toggleSignInPopup = () => {
    setIsVisibleSignInPopup(true);
  };

  const refreshSession = async () => {
    const { data, error } =
      await supabaseService.supabase.auth.refreshSession();
    const { session, user } = data;

    // const { data: refreshed, error: refreshError } =
    //   await supabaseService.supabase.auth.refreshSession();
  };

  const showMeTheTruth = async (fullPath = false) => {
    setTruthBtnDisabled(true);
    setTruthBtnTextRandomly();
    try {
      await getFourTruths_ws();
      await getEightfoldPath();
      setTruthBtnText('');
      //resetShowMeTheTruthBtn();
    } catch (error) {
      console.error(error);
    }
    setTruthBtnText('');
    //resetShowMeTheTruthBtn();
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
    const url = urlService.api.fourNobleTruths;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ suffering }),
      });

      if (!response.ok || !response.body) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      const loopRunner = true;

      while (loopRunner) {
        const { value, done } = await reader.read();
        if (done) break;
        const decodedChunk = decoder.decode(value, { stream: true });
        setTruths((truths) => truths + decodedChunk);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const getFourTruths_ws = async () => {
    const url = urlService.api.fourNobleTruths;
    const socket = new WebSocket(url);

    const { data: sessionData, error: sessionError } =
      await supabaseService.supabase.auth.getSession();

    let userUUID: string | null = '';
    if (sessionData && !sessionError) {
      userUUID = sessionData?.session?.user?.id || null;
    }

    socket.onopen = () => {
      const request = JSON.stringify({ suffering, userUUID });
      socket.send(request);
    };

    socket.onmessage = (e) => {
      setTruths((truths) => truths + e.data);
    };

    socket.onclose = (e) => {
      // console.log('Socket closed', e.code, e.reason);
    };

    socket.onerror = (err) => {
      console.error('Websocket error:', err);
    };
  };

  const getEightfoldPath = async () => {
    const url = urlService.api.eightfoldPathFull;
    const socket = new WebSocket(url);

    const { data: sessionData, error: sessionError } =
      await supabaseService.supabase.auth.getSession();

    let userUUID: string | null = '';
    if (sessionData && !sessionError) {
      userUUID = sessionData?.session?.user?.id || null;
    }

    socket.onopen = () => {
      const request = JSON.stringify({ suffering, userUUID });
      socket.send(request);
    };

    socket.onmessage = (e) => {
      setEightfoldPathFull((eightfoldPath) => eightfoldPath + e.data);
    };

    socket.onclose = (e) => {
      //console.log('Socket closed', e.code, e.reason);
    };

    socket.onerror = (err) => {
      console.error('Websocket error:', err);
    };
  };

  return (
    <div className={`${styles['container']}`}>
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
          className={`${styles['primary-btn']} ${
            truthBtnDisabled ? styles['disabled'] : ''
          }`}
          onClick={() => {
            trackEventName(gsEventName.showMeTheTruth_1);
            showMeTheTruth();
          }}
          disabled={truthBtnDisabled}
        >
          {truthBtnText}
        </button>
      </p>

      {truths && (
        <div className={`${styles['four-noble-truths']}`}>
          <div className={`${styles['inner-content']} !mb-0 !pb-0`}>
            <p className="italic mb-0">
              It's okay to acknowledge the discomfort of stress. It's temporary
              and your body is doing its best to heal in many ways right now.
            </p>
          </div>

          <h2>The Four Noble Truths</h2>
          <div
            className={styles['inner-content']}
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(truths) }}
          ></div>
        </div>
      )}

      {eightfoldPathFull && (
        <div className={styles['eightfold-path']}>
          <h2>The Noble Eightfold Path</h2>

          <div
            className={styles['inner-content']}
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(eightfoldPathFull),
            }}
          ></div>
        </div>
      )}

      {truths && eightfoldPathFull && !session && (
        <div className={styles['create-free-account']}>
          <p>
            Create your free account to unlock
            <br />
            your journey with Boodi.
            <br />
            <br />
            We are just getting started :)
          </p>

          <button
            className={`${styles['primary-btn']} w-auto`}
            onClick={() => {
              trackEventName(gsEventName.gimmeThatBoodi_1);
              toggleSignInPopup();
            }}
          >
            Gimme That Boodi
          </button>
          {userDidSignUp && (
            <p className={`mt-5`}>
              <strong>You've signed up! Please check your email.</strong>
            </p>
          )}
        </div>
      )}

      <div className={styles['footer-links']}>
        <a
          href="https://paypal.me/djprorok"
          target="_blank"
          rel="noreferrer"
          onClick={() => trackEventName(gsEventName.donate_1)}
        >
          Donate
        </a>
        <a
          href="https://calendly.com/davidprorok/clarity-session-for-innovators"
          target="_blank"
          rel="noreferrer"
          onClick={() => trackEventName(gsEventName.findACoach_1)}
        >
          Find a coach
        </a>
      </div>
      {isVisibleSignInPopup && (
        <SignInPopup
          closePopup={() => setIsVisibleSignInPopup(false)}
          isSignUp={() => setUserDidSignUp(true)}
        ></SignInPopup>
      )}
    </div>
  );
}

export default ReleaseYourWorries;
