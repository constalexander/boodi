import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DOMPurify from 'dompurify';
import { MousePointerClick } from 'lucide-react';
import { Header, Button, Input, Footer } from '@boodi/ui';
import { gsEventName, trackEventName } from '@boodi/analytics';
import useURLService from '@boodi/hooks/url.hook';
import useSupabaseService from '@boodi/hooks/supabase.hook';
import styles from './whats-on-your-mind.module.scss';

/* eslint-disable-next-line */
export interface WhatsOnYourMindProps {}

export function WhatsOnYourMind(props: WhatsOnYourMindProps) {
  const urlService = useURLService();
  const supabaseService = useSupabaseService();

  const [inputText, setInputText] = useState('');
  const [boodiResponse, setBoodiResponse] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const webSocketRef = useRef<WebSocket | null>(null);

  const initVh = window.innerHeight;
  const navigate = useNavigate();

  const go = async () => {
    if (isButtonDisabled) return;

    const { data: sessionData, error: sessionError } =
      await supabaseService.supabase.auth.getSession();

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
      className="w-screen min-h-screen overflow-x-hidden overflow-y-auto flex flex-col items-center justify-between bg-gradrad-2"
    >
      <Header showLogo={false} />
      <div
        className="top w-full sm:w-[90%] sm:max-w-[500px] md:w-[500px] px-5 text-center"
        style={{ marginTop: `${initVh / 100}px` }}
      >
        <img
          src="boodi-logo.svg"
          alt="Boodi.ai logo"
          className="w-[90%] max-w-[140px] mx-auto pb-3"
        />
        <h1 className="inline-block text-[6vw] sm:text-[1.25rem] text-center text-transparent bg-clip-text bg-gradlin-1 scale-y-[1.15] mt-1">
          What's on your mind?
        </h1>
        <div id="InputArea" className="flex flex-col">
          <Input
            type="text"
            className="flex-1 mt-3"
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') go();
            }}
          />
          <Button
            className="mt-3 "
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
      <Footer />
    </div>
  );
}

export default WhatsOnYourMind;
