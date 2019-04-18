import React, { memo } from 'react';

import { SeparatorProps } from './type';
import { StyledSeparator } from './style';

export const Separator = memo((props: SeparatorProps) => {
  const { withBorder } = props;

  return (
    <StyledSeparator withBorder={withBorder} />
  );
});
