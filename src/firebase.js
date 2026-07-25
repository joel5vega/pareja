import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// La configuración se lee de variables de entorno (ver .env.example).
// Crea un archivo ".env" en la raíz del proyecto con tus propias claves
// antes de correr "npm run dev" o "npm run build".
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const missingKeys = Object.entries(firebaseConfig).filter(([, v]) => !v);
if (missingKeys.length) {
  // eslint-disable-next-line no-console
  console.warn(
    '[Firebase] Faltan variables de entorno. Copia .env.example a .env y completa tus credenciales.',
    missingKeys.map(([k]) => k)
  );
}

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
