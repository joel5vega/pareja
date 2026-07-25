import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitch from './LanguageSwitch';

export default function TopBar() {
  const { t } = useLanguage();
  return (
    <header className="top-bar">
      <Link to="/" className="brand">
        <span className="brand-mark">{t('appName')}</span>
        <span className="brand-tagline">{t('tagline')}</span>
      </Link>
      <LanguageSwitch />
    </header>
  );
}
