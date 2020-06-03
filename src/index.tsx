import './polyfills';

import 'react-hot-loader';
import React from 'react';
import { render } from 'react-dom';

import { App } from './app';

const node = document.getElementById('index');
render(<App />, node);

if (process.env.NODE_ENV === 'development') module?.hot?.accept();
