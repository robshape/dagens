import React, { Fragment, memo, ReactElement } from 'react';

import { GlobalStyle, StyledApp } from './style';
import Loader from '../../components/Loader';
import TodayView from '../../containers/TodayView';
import useFetchRecipe from './hooks';

const App = memo(() => {
  const { data, isRequesting } = useFetchRecipe();

  let child: ReactElement | null = null;
  if (isRequesting) {
    child = <Loader />;
  } else if (data) {
    child = <TodayView recipe={data} />;
  }

  return (
    <Fragment>
      <GlobalStyle />

      <StyledApp>
        {child}
      </StyledApp>
    </Fragment>
  );
});

export default App;
