import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { t as translate } from '../i18n/translations';

const LanguageContext = createContext(null);
const STORAGE_KEY = 'dos_lang';

function detectDefaultLang() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === 'es' || saved === 'en') return saved;
  const nav = navigator.language || 'es';
  return nav.toLowerCase().startsWith('en') ? 'en' : 'es';
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(detectDefaultLang);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo(
    () => ({
      lang,
      setLang,
      toggleLang: () => setLang((l) => (l === 'es' ? 'en' : 'es')),
      t: (path, vars) => translate(lang, path, vars),
    }),
    [lang]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
