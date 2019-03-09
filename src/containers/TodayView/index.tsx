import React, { memo } from 'react';

import { TodayViewProps } from './type';

const TodayView = memo((props: TodayViewProps) => {
  const { recipe } = props;

  return (
    <div>
      {recipe.Name}
    </div>
  );
});

export default TodayView;
