import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';

import App from './scenes';

const node = document.getElementById('index');
render(<App />, node);

if (process.env.NODE_ENV === 'development') {
  module.hot.accept();
}
