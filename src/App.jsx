import { HashRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { CoupleProvider } from './contexts/CoupleContext';
import TopBar from './components/TopBar';
import Home from './pages/Home';
import Flow from './pages/Flow';

export default function App() {
  return (
    <LanguageProvider>
      <CoupleProvider>
        <HashRouter>
          <div className="app-shell">
            <TopBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/app" element={<Flow />} />
            </Routes>
          </div>
        </HashRouter>
      </CoupleProvider>
    </LanguageProvider>
  );
}
