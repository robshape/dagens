import React, { memo } from 'react';

import { HeadingProps } from './type';
import { StyledHeading } from './style';

export const Heading = memo((props: HeadingProps) => {
  const { children } = props;

  return (
    <StyledHeading>
      {children}
    </StyledHeading>
  );
});
