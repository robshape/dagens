import React from 'react';

import { Card } from '../../components/Card';
import { Recipe } from '../../types';
import { today } from './util';

type Props = {
  recipe: Recipe;
};

export const TodayView = ({ recipe }: Props): JSX.Element => {
  const dayOfTheWeek = today();

  return <Card recipe={recipe} title={dayOfTheWeek} />;
};
