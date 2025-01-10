import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { Suspense, lazy } from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';

import Store from './store/Store';

// Lazy load the App component for better performance
const App = lazy(() => import('./App'));

createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
    <Suspense fallback={<div>Loading...</div>}>
      <App />
    </Suspense>
  </Provider>
);
