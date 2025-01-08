import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';
import * as serviceWorker from './serviceWorker';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Register the service worker for PWA support
serviceWorker.register();