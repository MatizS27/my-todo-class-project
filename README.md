# React + TypeScript + Vite + Jest

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

## Sentry (captura de errores)

Para habilitar la captura de errores con Sentry, añade la variable de entorno `VITE_SENTRY_DSN` con tu DSN de Sentry antes de iniciar la aplicación. Ejemplo (Linux/macOS):

```bash
export VITE_SENTRY_DSN="https://<public>@o0.ingest.sentry.io/0"
npm run dev
```

La inicialización se realiza automáticamente en el arranque y se captura `window.onerror` y `unhandledrejection`. Además la app está envuelta en un `ErrorBoundary` de Sentry.

## Google Analytics 4

Para habilitar el seguimiento de analíticas, añade la variable de entorno `VITE_GA_MEASUREMENT_ID` con tu ID de medición de GA4 (formato `G-XXXXXXXXXX`).

```bash
export VITE_GA_MEASUREMENT_ID="G-XXXXXXXXXX"
npm run dev
```

La aplicación rastreará automáticamente las "vistas de página" virtuales cuando el usuario inicie o cierre sesión (`/public` vs `/private`).
You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
