import React, { ReactElement } from 'react';

import { SeparatorProps } from './type';
import { StyledSeparator } from './style';

export const Separator = (props: SeparatorProps): ReactElement => {
  const { withBorder } = props;

  return (
    <StyledSeparator withBorder={withBorder} />
  );
};
