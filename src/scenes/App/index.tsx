import React, { Fragment, memo, ReactElement } from 'react';

import { GlobalStyle, StyledApp } from './style';
import { Loader } from '../../components/Loader';
import { TodayView } from '../../containers/TodayView';
import { useConfigureFontAwesome } from '../../hooks/useConfigureFontAwesome';
import { useFetchRecipe } from '../../hooks/useFetchRecipe';

export const App = memo((): ReactElement => {
  useConfigureFontAwesome();
  const { data, isFetching } = useFetchRecipe();

  let child: ReactElement = <Loader />;
  if (data && !isFetching) {
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
