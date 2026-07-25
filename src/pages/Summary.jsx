import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useCouple } from '../contexts/CoupleContext';
import { questions, TOTAL_QUESTIONS } from '../data/questions';

export default function Summary() {
  const { t, lang } = useLanguage();
  const { me, partner, clearSession } = useCouple();
  const navigate = useNavigate();
  const [tab, setTab] = useState('all');

  const results = useMemo(() => {
    return questions.map((q) => {
      const mine = me?.answers?.[q.id];
      const theirs = partner?.answers?.[q.id];
      const answered = Boolean(mine && theirs);
      const match = answered && mine.key === theirs.key;
      return { question: q, mine, theirs, answered, match };
    });
  }, [me, partner]);

  const answeredResults = results.filter((r) => r.answered);
  const matches = answeredResults.filter((r) => r.match);
  const diffs = answeredResults.filter((r) => !r.answered ? false : !r.match);
  const percent = answeredResults.length
    ? Math.round((matches.length / answeredResults.length) * 100)
    : 0;

  const visible = tab === 'matches' ? matches : tab === 'diffs' ? diffs : results;

  function handleStartOver() {
    clearSession();
    navigate('/');
  }

  return (
    <div className="page page-wide" style={{ justifyContent: 'flex-start', paddingTop: 'var(--space-4)' }}>
      <div style={{ width: '100%' }}>
        <p className="eyebrow">{t('summary.title')}</p>
        <h1 className="title" style={{ fontSize: 'var(--text-xl)' }}>
          {t('summary.subtitle', { p1: me?.name || '—', p2: partner?.name || '—' })}
        </h1>

        <div className="stats-row">
          <div className="stat">
            <span className="stat-value">{matches.length}</span>
            <span className="stat-label">{t('summary.matchLabel')}</span>
          </div>
          <div className="stat">
            <span className="stat-value">{diffs.length}</span>
            <span className="stat-label">{t('summary.diffLabel')}</span>
          </div>
          <div className="stat">
            <span className="stat-value">{percent}%</span>
            <span className="stat-label">
              {answeredResults.length} {t('summary.of')} {TOTAL_QUESTIONS} {t('summary.questions')}
            </span>
          </div>
        </div>

        <div className="tabs">
          <button className={`tab${tab === 'all' ? ' active' : ''}`} onClick={() => setTab('all')} type="button">
            {t('summary.tabAll')} ({results.length})
          </button>
          <button
            className={`tab${tab === 'matches' ? ' active' : ''}`}
            onClick={() => setTab('matches')}
            type="button"
          >
            {t('summary.tabMatches')} ({matches.length})
          </button>
          <button className={`tab${tab === 'diffs' ? ' active' : ''}`} onClick={() => setTab('diffs')} type="button">
            {t('summary.tabDiffs')} ({diffs.length})
          </button>
        </div>

        <div>
          {visible.length === 0 && <p className="empty-state">—</p>}
          {visible.map(({ question, mine, theirs, answered, match }) => (
            <div className="result-item" key={question.id}>
              <span className="result-mark">{answered ? (match ? '✓' : '✕') : '…'}</span>
              <div>
                <p className="result-question">
                  {t('summary.questionLabel', { n: question.id })}. {question.text[lang]}
                </p>
                {answered ? (
                  <div className="result-answers">
                    <span>
                      <strong>{me?.name}:</strong> {mine.label?.[lang] || mine.key}
                      {mine.text ? ` (${mine.text})` : ''}
                    </span>
                    <span>
                      <strong>{partner?.name}:</strong> {theirs.label?.[lang] || theirs.key}
                      {theirs.text ? ` (${theirs.text})` : ''}
                    </span>
                  </div>
                ) : (
                  <p className="result-answers">{t('summary.waitingOther')}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="center-text mt-4">
          <button className="btn btn-ghost" onClick={handleStartOver} type="button">
            {t('summary.startOver')}
          </button>
        </div>
      </div>
    </div>
  );
}
