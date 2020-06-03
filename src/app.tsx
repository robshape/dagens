import { hot } from 'react-hot-loader/root';
import React, { StrictMode } from 'react';

import { AppScene } from './scenes/AppScene';

export const App = hot(() => (
  <StrictMode>
    <AppScene />
  </StrictMode>
));
