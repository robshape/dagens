import React, { ReactElement } from 'react';

import { Card } from '../../components/Card';
import { today } from './util';
import { TodayViewProps } from './type';

export const TodayView = (props: TodayViewProps): ReactElement => {
  const { recipe } = props;

  const dayOfTheWeek = today();

  return <Card recipe={recipe} title={dayOfTheWeek} />;
};
