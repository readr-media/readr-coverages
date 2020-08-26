import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { applyPolyfills, defineCustomElements } from '@readr-media/web-components/loader'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

applyPolyfills().then(() => {
  console.log('sdasdas')
  defineCustomElements();
});
