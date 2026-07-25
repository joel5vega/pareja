import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useCouple } from '../contexts/CoupleContext';
import { questions, TOTAL_QUESTIONS } from '../data/questions';
import { markCompleted, saveAnswer } from '../lib/coupleStore';

export default function Quiz() {
  const { t, lang } = useLanguage();
  const { session, me } = useCouple();
  const navigate = useNavigate();

  const [index, setIndex] = useState(0);
  const [otherText, setOtherText] = useState('');
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  const question = questions[index];
  const savedAnswer = me?.answers?.[question.id];

  useEffect(() => {
    setOtherText(savedAnswer?.text || '');
  }, [index]); // eslint-disable-line react-hooks/exhaustive-deps

  // Reanuda en la primera pregunta sin responder.
  useEffect(() => {
    if (!me?.answers) return;
    const firstUnanswered = questions.findIndex((q) => me.answers[q.id] === undefined);
    if (firstUnanswered > 0) setIndex(firstUnanswered);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const progress = useMemo(() => Math.round(((index + 1) / TOTAL_QUESTIONS) * 100), [index]);
  const isLast = index === TOTAL_QUESTIONS - 1;
  const selectedOption = question.options.find((opt) => opt.key === savedAnswer?.key);
  const isOtherSelected = Boolean(selectedOption) && /^other$|^otro$|^otra$/i.test(selectedOption.en.trim());

  async function selectOption(opt) {
    if (!session) return;
    setError('');
    setSaving(true);
    try {
      const answer = { key: opt.key, label: { en: opt.en, es: opt.es } };
      await saveAnswer(session.code, session.role, question.id, answer);
    } catch {
      setError(t('quiz.savingError'));
    } finally {
      setSaving(false);
    }
  }

  async function saveOtherText(value) {
    if (!session || !savedAnswer) return;
    try {
      await saveAnswer(session.code, session.role, question.id, { ...savedAnswer, text: value });
    } catch {
      // silencioso: no bloquea la navegación
    }
  }

  function goNext() {
    if (isLast) {
      finish();
    } else {
      setIndex((i) => Math.min(i + 1, TOTAL_QUESTIONS - 1));
    }
  }

  function goBack() {
    setIndex((i) => Math.max(i - 1, 0));
  }

  async function finish() {
    if (!session) return;
    setSaving(true);
    try {
      await markCompleted(session.code, session.role);
      navigate('/app');
    } catch {
      setError(t('quiz.savingError'));
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="page page-narrow" style={{ justifyContent: 'flex-start', paddingTop: 'var(--space-4)' }}>
      <div style={{ width: '100%' }}>
        <div className="progress-track">
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>
        <p className="question-count">
          {t('quiz.questionOf', { current: index + 1, total: TOTAL_QUESTIONS })}
        </p>
        <h1 className="question-text">{question.text[lang]}</h1>

        {error && <p className="error-text">{error}</p>}

        <div className="options-list">
          {question.options.map((opt) => (
            <button
              key={opt.key}
              type="button"
              className={`option${savedAnswer?.key === opt.key ? ' selected' : ''}`}
              onClick={() => selectOption(opt)}
              disabled={saving}
            >
              <span className="option-key">{opt.key}</span>
              <span>{opt[lang]}</span>
            </button>
          ))}
        </div>

        {isOtherSelected && (
          <div className="field">
            <input
              className="input"
              placeholder={t('quiz.otherPlaceholder')}
              value={otherText}
              onChange={(e) => setOtherText(e.target.value)}
              onBlur={(e) => saveOtherText(e.target.value)}
            />
          </div>
        )}

        <div className="quiz-nav">
          <button className="btn btn-outline" type="button" onClick={goBack} disabled={index === 0}>
            {t('quiz.back')}
          </button>
          <button className="btn" type="button" onClick={goNext} disabled={!savedAnswer || saving}>
            {isLast ? t('quiz.finish') : t('quiz.next')}
          </button>
        </div>
        <p className="quiz-footer subtitle" style={{ fontSize: 'var(--text-xs)' }}>
          {t('quiz.exitConfirm')}
        </p>
      </div>
    </div>
  );
}
