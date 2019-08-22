import React, { ReactElement } from 'react';

import { Card } from '../../components/Card';
import { TodayViewProps } from './type';

const today = (): string => {
  const date = new Date();

  const day = new Intl
    .DateTimeFormat('sv-SE', {
      weekday: 'long',
    })
    .format(date);

  return day
    .charAt(0)
    .toUpperCase()
    + day
      .slice(1);
};

export const TodayView = (props: TodayViewProps): ReactElement => {
  const { recipe } = props;

  const dayOfTheWeek = today();

  return <Card recipe={recipe} title={dayOfTheWeek} />;
};
