declare global {
  interface Window {
    _gs: (action: string, eventName: string, extraData?: object) => void;
  }
}

export const trackEventName = (eventName: string, extraData?: object) => {
  window._gs('event', eventName, extraData);
};

export enum gsEventName {
  about_1 = 'About click',
  donate_1 = 'Donate click',
  findACoach_1 = 'Find a coach click',
  footer_moreTools = 'Footer-More Tools',
  gimmeThatBoodi_1 = 'Gimme That Boodi click',
  joinCommunity_1 = 'Join Community click',
  privacyPolicy_1 = 'Privacy Policy click',
  releaseYourWorries_1 = 'Release your worries, nav from home page',
  showMeTheTruth_1 = 'Show Me The Truth, generate a message',
  signIn_1 = 'Sign in click, from release-your-worries',
  signIn_2 = 'Sign in click, from sign in popup',
  signOut_1 = 'Sign out click',
  signUp_1 = 'Sign up click, from sign in popup',
  whatsOnYourMind_1 = 'Whats on your mind, nav from home page',
  whatsOnYourMind_2 = 'Whats on your mind, generate a message',
  wisdom = 'Wisdom, generate a message',
}
