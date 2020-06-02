import React from 'react';

import { Props } from './types';
import { StyledSeparator } from './styles';

export const Separator = ({ withBorder = false }: Props): JSX.Element => (
  <StyledSeparator withBorder={withBorder} />
);
