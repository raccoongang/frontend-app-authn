import 'core-js/stable';
import 'regenerator-runtime/runtime';

import React, { StrictMode } from 'react';

import {
  APP_CONFIG_INITIALIZED, APP_INIT_ERROR, APP_READY, getConfig, initialize, mergeConfig, subscribe,
} from '@edx/frontend-platform';
import { loadExternalScripts } from '@edx/frontend-platform/initialize';
import { ErrorPage } from '@edx/frontend-platform/react';
import { createRoot } from 'react-dom/client';

import configuration from './config';
import messages from './i18n';
import MainApp from './MainApp';
import { BrandingFontLoader } from './services';

subscribe(APP_READY, () => {
  const root = createRoot(document.getElementById('root'));

  root.render(
    <StrictMode>
      <MainApp />
    </StrictMode>,
  );
});

subscribe(APP_INIT_ERROR, (error) => {
  const root = createRoot(document.getElementById('root'));

  root.render(
    <StrictMode>
      <ErrorPage message={error.message} />
    </StrictMode>,
  );
});

subscribe(APP_CONFIG_INITIALIZED, () => {
  loadExternalScripts([BrandingFontLoader], {
    config: getConfig(),
  });
});

initialize({
  handlers: {
    config: () => {
      mergeConfig({
        ...configuration,
        GOOGLE_FONTS: process.env.GOOGLE_FONTS || '',
        CUSTOM_FONTS: process.env.CUSTOM_FONTS || '',
      });
    },
  },
  messages,
});
