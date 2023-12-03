import { useRef, useState } from 'react';
import DOMPurify from 'dompurify';
import { MousePointerClick } from 'lucide-react';
import { Button } from '@boodi/ui/button';
import { gsEventName, trackEventName } from '@boodi/analytics';
import { supabase } from '@boodi/auth';
import { Input } from '@boodi/ui/input';
import useURLService from '@boodi/hooks/url.hook';
import styles from './whats-on-your-mind.module.scss';
import { useNavigate } from 'react-router-dom';

/* eslint-disable-next-line */
export interface WhatsOnYourMindProps {}

export function WhatsOnYourMind(props: WhatsOnYourMindProps) {
  const urlService = useURLService();

  const [inputText, setInputText] = useState('');
  const [boodiResponse, setBoodiResponse] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const webSocketRef = useRef<WebSocket | null>(null);

  const initVh = window.innerHeight;
  const navigate = useNavigate();

  const go = async () => {
    if (isButtonDisabled) return;

    const { data: sessionData, error: sessionError } =
      await supabase.auth.getSession();

    let userUUID: string | null = '';
    if (sessionData && !sessionError) {
      userUUID = sessionData?.session?.user?.id || null;
    }

    setIsButtonDisabled(true);
    setBoodiResponse('');

    if (webSocketRef.current) {
      webSocketRef.current.close();
    }

    const url = urlService.api.zeroShotWisdom;
    const socket = new WebSocket(url);
    webSocketRef.current = socket;

    socket.onopen = () => {
      const request = JSON.stringify({ inputText, userUUID });
      socket.send(request);
    };

    socket.onmessage = (e) => {
      setBoodiResponse((res) => res + e.data);
    };

    socket.onclose = () => {
      webSocketRef.current = null;
      setIsButtonDisabled(false);
    };

    socket.onerror = () => {
      webSocketRef.current = null;
    };
  };

  return (
    <div
      id="WhatsOnYourMindPage"
      className="w-screen min-h-screen overflow-x-hidden overflow-y-auto flex flex-col items-center justify-between"
    >
      <div
        className="top w-full sm:w-[90%] sm:max-w-[500px] md:w-[500px] px-5"
        style={{ marginTop: `${initVh / 3.25}px` }}
      >
        <img
          src="boodi-logo.svg"
          alt="Boodi.ai logo"
          className="w-[90%] max-w-[200px] mx-auto pb-3"
        />
        <h1 className="text-[6vw] sm:text-[1.5rem] text-center text-transparent bg-clip-text w-full mx-auto">
          What's on your mind?
        </h1>
        <div id="InputArea" className="flex flex-col">
          <Input
            type="text"
            className="flex-1"
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') go();
            }}
          />
          <Button
            className="mt-3"
            onClick={() => {
              trackEventName(gsEventName.whatsOnYourMind_2);
              go();
            }}
            disabled={isButtonDisabled}
          >
            <MousePointerClick />
          </Button>
        </div>

        <div id="OutputArea" className="mx-auto mt-7">
          <div
            className={`${styles['boodi-response']}`}
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(boodiResponse),
            }}
          ></div>
        </div>
      </div>

      <div className="bottom my-[40px]">
        <button
          className="text-white text-xs"
          onClick={() => {
            trackEventName(gsEventName.privacyPolicy_1);
            navigate('/privacy');
          }}
        >
          Privacy Policy
        </button>
      </div>
    </div>
  );
}

export default WhatsOnYourMind;
