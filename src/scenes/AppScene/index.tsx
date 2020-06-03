import React from 'react';

import { GlobalStyle, StyledApp } from './styles';
import { Loader } from '../../components/Loader';
import { TodayView } from '../../containers/TodayView';
import { useConfigureFontAwesome } from './hooks/useConfigureFontAwesome';
import { useFetchRecipe } from './hooks/useFetchRecipe';

export const AppScene = (): JSX.Element => {
  useConfigureFontAwesome();
  const { data, isFetching } = useFetchRecipe();

  let child = <Loader />;
  if (data && !isFetching) {
    child = <TodayView recipe={data} />;
  }

  return (
    <>
      <GlobalStyle />

      <StyledApp>
        {child}
      </StyledApp>
    </>
  );
};
