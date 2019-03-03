import React, { Fragment } from 'react';

import { GlobalStyle, StyledApp } from './styles';

const App = (): JSX.Element => (
  <Fragment>
    <GlobalStyle />

    <StyledApp>
      Dagens.
    </StyledApp>
  </Fragment>
);

export default App;
