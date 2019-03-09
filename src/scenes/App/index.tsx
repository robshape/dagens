import React, { Fragment, ReactElement } from 'react';

import { GlobalStyle, StyledApp } from './styles';
import useFetchRecipes from './hooks';

const App = (): ReactElement | null => {
  const { data } = useFetchRecipes();

  if (!data[0]) {
    return null;
  }

  return (
    <Fragment>
      <GlobalStyle />

      <StyledApp>
        {data[0].Name}
      </StyledApp>
    </Fragment>
  );
};

export default App;
