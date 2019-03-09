import React, { Fragment, memo, ReactElement } from 'react';

import { GlobalStyle, StyledApp } from './style';
import Loader from '../../components/Loader';
import { randomNumber } from '../../common/number';
import TodayView from '../../containers/TodayView';
import useFetchRecipes from './hooks';

const App = memo(() => {
  const { data, isRequesting } = useFetchRecipes();

  let child: ReactElement | null = null;
  if (isRequesting) {
    child = <Loader />;
  } else if (data.length) {
    const index = randomNumber(data.length);
    const recipe = data[index];
    child = <TodayView recipe={recipe} />;
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
