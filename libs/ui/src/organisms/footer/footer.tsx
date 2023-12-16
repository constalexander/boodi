import { useNavigate } from 'react-router-dom';
import { Button } from '@boodi/ui';
import { gsEventName, trackEventName } from '@boodi/analytics';
/* eslint-disable-next-line */
export interface FooterProps {}

export function Footer(props: FooterProps) {
  const navigate = useNavigate();

  return (
    <div className="w-full text-center mb-5">
      <Button
        variant="ghost"
        onClick={() => {
          trackEventName(gsEventName.about_1);
          navigate('/about');
        }}
      >
        About
      </Button>
      <Button
        variant="ghost"
        onClick={() => {
          trackEventName(gsEventName.about_1);
          navigate('/tools');
        }}
      >
        More Tools
      </Button>
      <Button
        variant="ghost"
        onClick={() => {
          trackEventName(gsEventName.joinCommunity_1);
          window.open(
            'https://www.facebook.com/groups/exponentialenlightenment',
            '_blank'
          );
        }}
      >
        Join Community
      </Button>
      <Button
        variant="ghost"
        onClick={() => {
          trackEventName(gsEventName.donate_1);
          window.open('https://paypal.me/djprorok', '_blank');
        }}
      >
        Donate
      </Button>
      <Button
        variant="ghost"
        onClick={() => {
          trackEventName(gsEventName.findACoach_1);
          window.open(
            'https://calendly.com/davidprorok/clarity-session-for-innovators',
            '_blank'
          );
        }}
      >
        Find a Coach
      </Button>
      <Button
        variant="ghost"
        onClick={() => {
          trackEventName(gsEventName.privacyPolicy_1);
          navigate('/privacy');
        }}
      >
        Privacy Policy
      </Button>
    </div>
  );
}

export default Footer;
