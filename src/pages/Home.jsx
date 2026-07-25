import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useCouple } from '../contexts/CoupleContext';
import { createCouple, generateCode, joinCouple } from '../lib/coupleStore';

const MODES = { CHOOSE: 'choose', CREATE: 'create', JOIN: 'join', CREATED: 'created' };

export default function Home() {
  const { t, lang } = useLanguage();
  const { session, setSession, clearSession } = useCouple();
  const navigate = useNavigate();

  const [mode, setMode] = useState(MODES.CHOOSE);
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [newCode, setNewCode] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  const [copied, setCopied] = useState(false);

  if (session?.code && mode === MODES.CHOOSE) {
    return (
      <div className="page page-narrow" style={{ justifyContent: 'flex-start', paddingTop: 'var(--space-6)' }}>
        <p className="eyebrow">{t('appName')}</p>
        <h1 className="title" style={{ fontSize: 'var(--text-xl)' }}>
          {t('home.resumeTitle')}
        </h1>
        <p className="subtitle">{t('home.resumeDesc')}</p>
        <button className="btn" onClick={() => navigate('/app')} type="button">
          {t('home.resumeButton')}
        </button>
        <button
          className="btn btn-ghost mt-4"
          onClick={() => {
            clearSession();
            setMode(MODES.CHOOSE);
          }}
          type="button"
        >
          {t('home.startOverButton')}
        </button>
      </div>
    );
  }

  async function handleCreate(e) {
    e.preventDefault();
    if (!name.trim()) {
      setError(t('home.errorNameRequired'));
      return;
    }
    setError('');
    setBusy(true);
    try {
      let attempts = 0;
      let created = false;
      let codeToUse = '';
      while (!created && attempts < 5) {
        codeToUse = generateCode();
        try {
          await createCouple(codeToUse, name.trim());
          created = true;
        } catch (err) {
          if (err.message !== 'CODE_TAKEN') throw err;
          attempts += 1;
        }
      }
      if (!created) throw new Error('CODE_TAKEN');
      setSession({ code: codeToUse, role: 'partner1', name: name.trim() });
      setNewCode(codeToUse);
      setMode(MODES.CREATED);
    } catch {
      setError(t('home.errorGeneric'));
    } finally {
      setBusy(false);
    }
  }

  async function handleJoin(e) {
    e.preventDefault();
    if (!name.trim()) {
      setError(t('home.errorNameRequired'));
      return;
    }
    if (!code.trim()) {
      setError(t('home.errorCodeNotFound'));
      return;
    }
    setError('');
    setBusy(true);
    try {
      const { role } = await joinCouple(code.trim().toUpperCase(), name.trim());
      setSession({ code: code.trim().toUpperCase(), role, name: name.trim() });
      navigate('/app');
    } catch (err) {
      if (err.message === 'CODE_NOT_FOUND') setError(t('home.errorCodeNotFound'));
      else if (err.message === 'CODE_FULL') setError(t('home.errorCodeFull'));
      else setError(t('home.errorGeneric'));
    } finally {
      setBusy(false);
    }
  }

  function handleCopy() {
    navigator.clipboard?.writeText(newCode).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  if (mode === MODES.CREATED) {
    return (
      <div className="page page-narrow" style={{ justifyContent: 'flex-start', paddingTop: 'var(--space-6)' }}>
        <p className="eyebrow center-text" style={{ width: '100%' }}>
          {t('home.yourCode')}
        </p>
        <div className="code-display">{newCode}</div>
        <p className="subtitle center-text" style={{ width: '100%', textAlign: 'center' }}>
          {t('home.shareCode')}
        </p>
        <button className="btn btn-outline" onClick={handleCopy} type="button">
          {copied ? t('home.copied') : t('home.copy')}
        </button>
        <button className="btn mt-4" onClick={() => navigate('/app')} type="button">
          {t('home.continueButton')}
        </button>
      </div>
    );
  }

  if (mode === MODES.CREATE) {
    return (
      <div className="page page-narrow" style={{ justifyContent: 'flex-start', paddingTop: 'var(--space-6)' }}>
        <p className="eyebrow">{t('home.createTitle')}</p>
        <h1 className="title" style={{ fontSize: 'var(--text-xl)' }}>
          {t('home.namePlaceholder')}
        </h1>
        <form onSubmit={handleCreate}>
          {error && <p className="error-text">{error}</p>}
          <div className="field">
            <input
              className="input"
              placeholder={t('home.namePlaceholder')}
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoFocus
              maxLength={40}
            />
          </div>
          <button className="btn" type="submit" disabled={busy}>
            {t('home.createButton')}
          </button>
          <button
            className="btn btn-ghost mt-4"
            type="button"
            onClick={() => {
              setMode(MODES.CHOOSE);
              setError('');
            }}
          >
            {t('home.back')}
          </button>
        </form>
      </div>
    );
  }

  if (mode === MODES.JOIN) {
    return (
      <div className="page page-narrow" style={{ justifyContent: 'flex-start', paddingTop: 'var(--space-6)' }}>
        <p className="eyebrow">{t('home.joinTitle')}</p>
        <h1 className="title" style={{ fontSize: 'var(--text-xl)' }}>
          {t('home.joinDesc')}
        </h1>
        <form onSubmit={handleJoin}>
          {error && <p className="error-text">{error}</p>}
          <div className="field">
            <input
              className="input input-code"
              placeholder={t('home.codePlaceholder')}
              value={code}
              onChange={(e) => setCode(e.target.value.toUpperCase())}
              autoFocus
              maxLength={8}
            />
          </div>
          <div className="field">
            <input
              className="input"
              placeholder={t('home.namePlaceholder')}
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={40}
            />
          </div>
          <button className="btn" type="submit" disabled={busy}>
            {t('home.joinButton')}
          </button>
          <button
            className="btn btn-ghost mt-4"
            type="button"
            onClick={() => {
              setMode(MODES.CHOOSE);
              setError('');
            }}
          >
            {t('home.back')}
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="page page-narrow">
      <p className="eyebrow">{t('appName')}</p>
      <h1 className="title">{t('home.title')}</h1>
      <p className="subtitle">{t('home.subtitle')}</p>

      <div className="card">
        <p className="card-title">{t('home.createTitle')}</p>
        <p className="card-desc">{t('home.createDesc')}</p>
        <button className="btn" onClick={() => setMode(MODES.CREATE)} type="button">
          {t('home.createButton')}
        </button>
      </div>

      <div className="divider-or">{lang === 'es' ? 'o' : 'or'}</div>

      <div className="card" style={{ marginBottom: 0 }}>
        <p className="card-title">{t('home.joinTitle')}</p>
        <p className="card-desc">{t('home.joinDesc')}</p>
        <button className="btn btn-outline" onClick={() => setMode(MODES.JOIN)} type="button">
          {t('home.joinButton')}
        </button>
      </div>
    </div>
  );
}
