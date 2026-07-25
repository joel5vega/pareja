import { useLanguage } from '../contexts/LanguageContext';
import { useCouple } from '../contexts/CoupleContext';

export default function Waiting() {
  const { t } = useLanguage();
  const { session, partner } = useCouple();

  return (
    <div className="page page-narrow">
      <p className="eyebrow">{t('waiting.yourCode')}: {session?.code}</p>
      <h1 className="title" style={{ fontSize: 'var(--text-xl)' }}>
        {t('waiting.title')}
      </h1>
      <div className="waiting-dots">
        <span className="pulse-dot" />
        <span className="pulse-dot" />
        <span className="pulse-dot" />
      </div>
      <p className="subtitle">
        {partner?.name
          ? t('waiting.subtitle', { partner: partner.name })
          : t('waiting.subtitleGeneric')}
      </p>
      <p className="subtitle" style={{ fontSize: 'var(--text-xs)' }}>
        {t('waiting.hint')}
      </p>
    </div>
  );
}
