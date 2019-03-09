import React, { memo } from 'react';

import { TodayViewProps } from './types';

const TodayView = memo((props: TodayViewProps) => {
  const { recipe } = props;

  return (
    <div>
      {recipe.Name}
    </div>
  );
});

export default TodayView;
