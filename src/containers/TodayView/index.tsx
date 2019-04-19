import React, { memo, ReactElement } from 'react';

import { Card } from '../../components/Card';
import { today } from '../../common/util';
import { TodayViewProps } from './type';

export const TodayView = memo((props: TodayViewProps): ReactElement => {
  const { recipe } = props;

  const dayOfTheWeek = today();

  return <Card recipe={recipe} title={dayOfTheWeek} />;
});
