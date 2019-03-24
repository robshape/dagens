import React, { memo } from 'react';

import { Card } from '../../components/Card';
import { Heading } from '../../components/Heading';
import { today } from '../../common/util';
import { TodayViewProps } from './type';

export const TodayView = memo((props: TodayViewProps) => {
  const { recipe } = props;

  const dayOfTheWeek = today();

  return (
    <div>
      <Heading>
        {dayOfTheWeek}
      </Heading>

      <Card recipe={recipe} />
    </div>
  );
});
