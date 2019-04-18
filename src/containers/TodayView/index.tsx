import React, { memo } from 'react';

import { Card } from '../../components/Card';
import { today } from '../../common/util';
import { TodayViewProps } from './type';

export const TodayView = memo((props: TodayViewProps) => {
  const { recipe } = props;

  const dayOfTheWeek = today();
  return <Card recipe={recipe} title={dayOfTheWeek} />;
});
