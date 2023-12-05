declare global {
  interface Window {
    _gs: (action: string, eventName: string) => void;
  }
}

export const trackEventName = (eventName: string) => {
  window._gs('event', eventName);
};

export enum gsEventName {
  signIn_1 = 'Sign in click, from release-your-worries',
  signIn_2 = 'Sign in click, from sign in popup',
  signOut_1 = 'Sign out click',
  signUp_1 = 'Sign up click, from sign in popup',
  donate_1 = 'Donate click',
  findACoach_1 = 'Find a coach click',
  whatsOnYourMind_1 = 'Whats on your mind, nav from home page',
  whatsOnYourMind_2 = 'Whats on your mind, generate a message',
  releaseYourWorries_1 = 'Release your worries, nav from home page',
  showMeTheTruth_1 = 'Show Me The Truth, generate a message',
  gimmeThatBoodi_1 = 'Gimme That Boodi click',
  privacyPolicy_1 = 'Privacy Policy click',
  joinCommunity_1 = 'Join Community click',
  about_1 = 'About click',
}
