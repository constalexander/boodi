import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import SingletonsProvider from '@boodi/providers/singletons.provider';
import ThemeProvider from '@boodi/providers/theme.provider';
import NotFound404 from './pages/not-found-404/not-found-404';
import WhatsOnYourMind from './pages/whats-on-your-mind/whats-on-your-mind';
import Sandbox from './pages/sandbox/sandbox';
import ReleaseYourWorries from './pages/release-your-worries/release-your-worries';
import Home from './pages/home/home';
import PrivacyPolicy from './pages/privacy-policy/privacy-policy';
import TermsOfUse from './pages/terms-of-use/terms-of-use';
import { observer } from 'mobx-react';

const App = observer(() => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <SingletonsProvider>
        <Router>
          <Routes>
            <Route path="/" element={<WhatsOnYourMind />} />
            <Route path="/about" element={<Home />} />
            <Route path="/chat" element={<WhatsOnYourMind />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route
              path="/release-your-worries"
              element={<ReleaseYourWorries />}
            />
            <Route path="/sandbox" element={<Sandbox />} />
            <Route path="/terms" element={<TermsOfUse />} />
            <Route path="/whats-on-your-mind" element={<WhatsOnYourMind />} />
            <Route path="*" element={<NotFound404 />} />
          </Routes>
        </Router>
      </SingletonsProvider>
    </ThemeProvider>
  );
});

export default App;
