import './polyfills';

import React from 'react';
import { render } from 'react-dom';

import { App } from './scenes/App';

const node = document.getElementById('index');
render(<App />, node);

if (process.env.NODE_ENV === 'development'
&& module.hot) {
  module.hot.accept();
}
