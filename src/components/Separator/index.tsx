import React from 'react';

import { Props } from './type';
import { StyledSeparator } from './style';

export const Separator = ({ withBorder = false }: Props): JSX.Element => (
  <StyledSeparator withBorder={withBorder} />
);
