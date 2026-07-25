import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCouple } from '../contexts/CoupleContext';
import { useLanguage } from '../contexts/LanguageContext';
import Quiz from './Quiz';
import Waiting from './Waiting';
import Summary from './Summary';

export default function Flow() {
  const { session, couple, me, partner, loading } = useCouple();
  const { t } = useLanguage();
  const navigate = useNavigate();

  useEffect(() => {
    if (!session?.code) navigate('/');
  }, [session, navigate]);

  if (!session?.code) return null;

  if (loading) {
    return (
      <div className="page page-narrow">
        <p className="subtitle">…</p>
      </div>
    );
  }

  if (!couple) {
    return (
      <div className="page page-narrow">
        <p className="error-text">{t('home.errorCodeNotFound')}</p>
        <button className="btn" type="button" onClick={() => navigate('/')}>
          {t('home.back')}
        </button>
      </div>
    );
  }

  if (!me?.completed) return <Quiz />;
  if (!partner?.completed) return <Waiting />;
  return <Summary />;
}
