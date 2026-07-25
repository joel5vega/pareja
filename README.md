# Dos / Two — Inventario de compatibilidad en pareja

Web app en React + Firebase donde una pareja responde por separado el mismo inventario de 104 preguntas (basado en el *Pre-Marriage Awareness Inventory*) y luego ve un resumen de cuántas respuestas coinciden y cuántas difieren.

- Interfaz minimalista en blanco y negro, con tipografía elegante (Cormorant Garamond + Work Sans).
- Selector de idioma Español / Inglés (toda la interfaz y las 104 preguntas están traducidas).
- Sin login: la pareja se identifica con un **código de pareja** de 6 caracteres.
- Los datos se guardan en **Firebase Firestore** en tiempo real.

## Cómo funciona

1. Una persona crea un código de pareja e ingresa su nombre.
2. Comparte el código con su pareja (copiar/pegar).
3. La otra persona entra a la app, elige "Unirme con un código", ingresa el código y su nombre.
4. Cada quien responde las 104 preguntas por separado (se autoguardan en Firestore pregunta por pregunta, se puede cerrar y continuar después).
5. Cuando ambos terminan, se muestra automáticamente el resumen: cantidad de coincidencias, diferencias, porcentaje de compatibilidad y el detalle pregunta por pregunta (con pestañas Todas / Coincidencias / Diferencias).

El código sirve como la única llave de acceso a los datos de esa pareja (no hay contraseñas ni autenticación de usuarios).

## Requisitos

- Node.js 18 o superior
- Una cuenta de Google/Firebase (gratuita)

## 1. Crear el proyecto de Firebase

1. Ve a la [consola de Firebase](https://console.firebase.google.com/) y crea un nuevo proyecto (o usa uno existente).
2. Dentro del proyecto, ve a **Compilación > Firestore Database** y presiona "Crear base de datos". Elige el modo de producción (las reglas de seguridad se configuran en el paso 3) y la región que prefieras.
3. Ve a **Configuración del proyecto** (ícono de engranaje) > pestaña **General** > sección "Tus apps". Presiona el ícono `</>` para registrar una nueva app web (no hace falta Firebase Hosting).
4. Copia el objeto `firebaseConfig` que te muestra — lo vas a necesitar en el paso 4.

## 2. Aplicar las reglas de seguridad de Firestore

Este proyecto incluye un archivo [`firestore.rules`](./firestore.rules) con reglas sugeridas: cualquiera con el código de pareja puede leer/escribir esa pareja puntual, pero nadie puede listar todos los códigos existentes ni acceder a los datos de otra pareja.

1. En la consola de Firebase, ve a **Firestore Database > Reglas**.
2. Reemplaza el contenido por el de `firestore.rules` de este proyecto.
3. Presiona "Publicar".

## 3. Instalar dependencias

```bash
npm install
```

## 4. Configurar las variables de entorno

1. Copia el archivo de ejemplo:

   ```bash
   cp .env.example .env
   ```

2. Abre `.env` y completa cada valor con los datos del `firebaseConfig` que copiaste en el paso 1:

   ```
   VITE_FIREBASE_API_KEY=...
   VITE_FIREBASE_AUTH_DOMAIN=...
   VITE_FIREBASE_PROJECT_ID=...
   VITE_FIREBASE_STORAGE_BUCKET=...
   VITE_FIREBASE_MESSAGING_SENDER_ID=...
   VITE_FIREBASE_APP_ID=...
   ```

   Estas claves son públicas por diseño (se usan del lado del cliente); la seguridad real la dan las reglas de Firestore del paso 2, no el secreto de estas claves. El archivo `.env` está en `.gitignore` y nunca debe subirse a un repositorio público.

## 5. Correr en desarrollo

```bash
npm run dev
```

Abre la URL que muestra la terminal (por defecto [http://localhost:5173](http://localhost:5173)).

## 6. Generar la build de producción

```bash
npm run build
```

Esto genera la carpeta `dist/` con los archivos estáticos listos para publicar en cualquier hosting (Firebase Hosting, Netlify, Vercel, GitHub Pages, etc.). La app usa `HashRouter`, así que los archivos de `dist/` funcionan en cualquier hosting estático sin configuración especial de rutas del lado del servidor.

Para previsualizar la build localmente:

```bash
npm run preview
```

## Estructura del proyecto

```
src/
  data/questions.js         Las 104 preguntas del inventario, en inglés y español
  i18n/translations.js      Textos de la interfaz en ambos idiomas
  contexts/
    LanguageContext.jsx     Estado del idioma (persistido en localStorage)
    CoupleContext.jsx       Sesión de la pareja + suscripción en tiempo real a Firestore
  lib/
    firebase.js             Inicialización del SDK de Firebase
    coupleStore.js          Funciones para crear/unirse/guardar respuestas en Firestore
  pages/
    Home.jsx                Pantalla inicial: crear o unirse a un código
    Quiz.jsx                Cuestionario, una pregunta a la vez
    Waiting.jsx             Pantalla de espera mientras el otro miembro termina
    Summary.jsx             Resumen de coincidencias y diferencias
    Flow.jsx                Decide qué pantalla mostrar según el estado de la pareja
firestore.rules             Reglas de seguridad sugeridas para Firestore
```

## Modelo de datos en Firestore

Colección `couples`, un documento por código de pareja:

```
couples/{CODIGO}
  createdAt: timestamp
  partner1: { name, completed, completedAt, answers: { [preguntaId]: { key, label: {en, es}, text? } } }
  partner2: { name, completed, completedAt, answers: { [preguntaId]: { key, label: {en, es}, text? } } }
```

`key` es la letra de la opción elegida (a, b, c...) y es lo que se compara entre ambos miembros para calcular coincidencias y diferencias. El campo `text` solo se usa en las preguntas donde se eligió la opción "otro/otra" y se guarda el texto libre.

## Notas

- Las preguntas 105 (una matriz de responsabilidades esposo/esposa/compartido) y el "Plan de sesión de preparación matrimonial" del PDF original no se incluyeron en la app, ya que no encajan en el formato de pregunta con alternativas de opción múltiple.
- Si necesitas cambiar, agregar o quitar preguntas, edita directamente `src/data/questions.js`; la app usa la cantidad de elementos del arreglo (`TOTAL_QUESTIONS`) para calcular el progreso y el resumen automáticamente.
