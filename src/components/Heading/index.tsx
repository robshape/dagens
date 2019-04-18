import React, { memo, ReactElement } from 'react';

import { HeadingProps } from './type';
import { StyledHeading } from './style';

export const Heading = memo((props: HeadingProps): ReactElement => {
  const { children } = props;

  return (
    <StyledHeading>
      {children}
    </StyledHeading>
  );
});
