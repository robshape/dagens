import React, { memo, ReactElement } from 'react';

import { SeparatorProps } from './type';
import { StyledSeparator } from './style';

export const Separator = memo((props: SeparatorProps): ReactElement => {
  const { withBorder } = props;

  return (
    <StyledSeparator withBorder={withBorder} />
  );
});
