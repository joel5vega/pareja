import { useLanguage } from '../contexts/LanguageContext';

export default function LanguageSwitch() {
  const { lang, setLang } = useLanguage();
  return (
    <div className="lang-switch" role="group" aria-label="Language / Idioma">
      <button className={lang === 'es' ? 'active' : ''} onClick={() => setLang('es')} type="button">
        ES
      </button>
      <button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')} type="button">
        EN
      </button>
    </div>
  );
}
