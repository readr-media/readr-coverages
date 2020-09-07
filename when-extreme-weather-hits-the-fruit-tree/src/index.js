import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import ReactGA from 'react-ga';

import { applyPolyfills, defineCustomElements } from '@readr-media/web-components/loader'

ReactGA.initialize('UA-83609754-1', {
  titleCase: false
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

applyPolyfills().then(() => {
  defineCustomElements();
});
