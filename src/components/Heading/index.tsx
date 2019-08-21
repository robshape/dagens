import React, { ReactElement } from 'react';

import { HeadingProps } from './type';
import { StyledHeading } from './style';

export const Heading = (props: HeadingProps): ReactElement => {
  const { children } = props;

  return (
    <StyledHeading>
      {children}
    </StyledHeading>
  );
};
