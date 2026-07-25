import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  onSnapshot,
  serverTimestamp,
} from 'firebase/firestore';
import { db } from '../firebase';

const CODE_ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // sin caracteres ambiguos (0,O,1,I)

export function generateCode(length = 6) {
  let code = '';
  for (let i = 0; i < length; i++) {
    code += CODE_ALPHABET[Math.floor(Math.random() * CODE_ALPHABET.length)];
  }
  return code;
}

function coupleRef(code) {
  return doc(db, 'couples', code.toUpperCase());
}

const emptySlot = () => ({ name: '', answers: {}, completed: false });

/** Crea un nuevo código de pareja con el nombre de quien lo crea como partner1. */
export async function createCouple(code, name) {
  const ref = coupleRef(code);
  const snap = await getDoc(ref);
  if (snap.exists()) {
    throw new Error('CODE_TAKEN');
  }
  await setDoc(ref, {
    createdAt: serverTimestamp(),
    partner1: { ...emptySlot(), name },
    partner2: emptySlot(),
  });
  return { role: 'partner1' };
}

/**
 * Se une a un código existente. Si el nombre coincide con un slot ya usado,
 * retoma esa sesión (permite continuar desde otro dispositivo/navegador).
 * Si no, ocupa el primer slot libre.
 */
export async function joinCouple(code, name) {
  const ref = coupleRef(code);
  const snap = await getDoc(ref);
  if (!snap.exists()) {
    throw new Error('CODE_NOT_FOUND');
  }
  const data = snap.data();
  const normalized = name.trim().toLowerCase();

  if (data.partner1?.name && data.partner1.name.trim().toLowerCase() === normalized) {
    return { role: 'partner1' };
  }
  if (data.partner2?.name && data.partner2.name.trim().toLowerCase() === normalized) {
    return { role: 'partner2' };
  }
  if (!data.partner1?.name) {
    await updateDoc(ref, { 'partner1.name': name });
    return { role: 'partner1' };
  }
  if (!data.partner2?.name) {
    await updateDoc(ref, { 'partner2.name': name });
    return { role: 'partner2' };
  }
  throw new Error('CODE_FULL');
}

export async function getCouple(code) {
  const snap = await getDoc(coupleRef(code));
  return snap.exists() ? snap.data() : null;
}

export function subscribeToCouple(code, callback) {
  return onSnapshot(coupleRef(code), (snap) => {
    callback(snap.exists() ? snap.data() : null);
  });
}

/** Guarda/actualiza la respuesta de una pregunta puntual (autosave). */
export async function saveAnswer(code, role, questionId, answer) {
  const ref = coupleRef(code);
  await updateDoc(ref, {
    [`${role}.answers.${questionId}`]: answer,
  });
}

export async function markCompleted(code, role) {
  const ref = coupleRef(code);
  await updateDoc(ref, {
    [`${role}.completed`]: true,
    [`${role}.completedAt`]: serverTimestamp(),
  });
}
