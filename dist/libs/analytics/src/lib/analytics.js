export const trackEventName = (eventName) => {
    window._gs('event', eventName);
};
export var gsEventName;
(function (gsEventName) {
    gsEventName["signIn_1"] = "Sign in click, from release-your-worries";
    gsEventName["signIn_2"] = "Sign in click, from sign in popup";
    gsEventName["signOut_1"] = "Sign out click";
    gsEventName["signUp_1"] = "Sign up click, from sign in popup";
    gsEventName["donate_1"] = "Donate click";
    gsEventName["findACoach_1"] = "Find a coach click";
    gsEventName["whatsOnYourMind_1"] = "Whats on your mind, nav from home page";
    gsEventName["whatsOnYourMind_2"] = "Whats on your mind, generate a message";
    gsEventName["releaseYourWorries_1"] = "Release your worries, nav from home page";
    gsEventName["showMeTheTruth_1"] = "Show Me The Truth, generate a message";
    gsEventName["gimmeThatBoodi_1"] = "Gimme That Boodi click";
    gsEventName["privacyPolicy_1"] = "Privacy Policy click";
})(gsEventName || (gsEventName = {}));
//# sourceMappingURL=analytics.js.map