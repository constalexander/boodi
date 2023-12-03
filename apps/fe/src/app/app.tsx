import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ThemeProvider } from '@boodi/providers/theme.provider';
import { URLProvider } from '@boodi/providers/url.provider';
import Xoxo from './pages/xoxo/xoxo';
import NotFound404 from './pages/not-found-404/not-found-404';
import WhatsOnYourMind from './pages/whats-on-your-mind/whats-on-your-mind';
import Sandbox from './pages/sandbox/sandbox';
import ReleaseYourWorries from './pages/release-your-worries/release-your-worries';
import Home from './pages/home/home';
import CookiePolicy from './pages/cookie-policy/cookie-policy';
import PrivacyPolicy from './pages/privacy-policy/privacy-policy';
import TermsOfUse from './pages/terms-of-use/terms-of-use';

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <URLProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route
              path="/release-your-worries"
              element={<ReleaseYourWorries />}
            />
            <Route path="/sandbox" element={<Sandbox />} />
            <Route path="/terms-of-use" element={<TermsOfUse />} />
            <Route path="/whats-on-your-mind" element={<WhatsOnYourMind />} />
            <Route path="/xoxo" element={<Xoxo />} />
            <Route path="*" element={<NotFound404 />} />
          </Routes>
        </Router>
      </URLProvider>
    </ThemeProvider>
  );
}

export default App;
