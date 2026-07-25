import { createContext, useContext, useEffect, useMemo, useState, useCallback } from 'react';
import { subscribeToCouple } from '../lib/coupleStore';

const CoupleContext = createContext(null);
const STORAGE_KEY = 'dos_session';

function loadSession() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function CoupleProvider({ children }) {
  const [session, setSessionState] = useState(loadSession);
  const [couple, setCouple] = useState(null);
  const [loading, setLoading] = useState(true);

  const setSession = useCallback((next) => {
    setSessionState(next);
    if (next) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  const clearSession = useCallback(() => setSession(null), [setSession]);

  useEffect(() => {
    if (!session?.code) {
      setCouple(null);
      setLoading(false);
      return;
    }
    setLoading(true);
    const unsubscribe = subscribeToCouple(session.code, (data) => {
      setCouple(data);
      setLoading(false);
    });
    return unsubscribe;
  }, [session?.code]);

  const me = session?.role ? couple?.[session.role] : null;
  const partnerRole = session?.role === 'partner1' ? 'partner2' : 'partner1';
  const partner = couple?.[partnerRole] || null;

  const value = useMemo(
    () => ({
      session, // { code, role, name }
      setSession,
      clearSession,
      couple, // documento completo de Firestore
      me,
      partner,
      partnerRole,
      loading,
    }),
    [session, setSession, clearSession, couple, me, partner, partnerRole, loading]
  );

  return <CoupleContext.Provider value={value}>{children}</CoupleContext.Provider>;
}

export function useCouple() {
  const ctx = useContext(CoupleContext);
  if (!ctx) throw new Error('useCouple must be used within CoupleProvider');
  return ctx;
}
