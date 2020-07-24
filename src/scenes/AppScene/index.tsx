import React from 'react';

import { ErrorScene } from '../ErrorScene';
import { GlobalStyle, StyledAppScene } from './styles';
import { Loader } from '../../components/Loader';
import { TodayView } from '../../containers/TodayView';
import { useConfigureFontAwesome } from './hooks/useConfigureFontAwesome';
import { useFetchRecipe } from './hooks/useFetchRecipe';

export const AppScene = (): JSX.Element => {
  useConfigureFontAwesome();
  const { data, error, isFetching } = useFetchRecipe();

  let child = <Loader />;
  if (data && !isFetching) {
    child = <TodayView recipe={data} />;
  } else if (error) {
    child = <ErrorScene message={error} />;
  }

  return (
    <>
      <GlobalStyle />
      <StyledAppScene>{child}</StyledAppScene>
    </>
  );
};
