import React, { ReactElement } from 'react';

import { SubheadingProps } from './type';
import { StyledSubheading } from './style';

export const Subheading = (props: SubheadingProps): ReactElement => {
  const { children } = props;

  return (
    <StyledSubheading>
      {children}
    </StyledSubheading>
  );
};
