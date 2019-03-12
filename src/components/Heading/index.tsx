import React, { memo } from 'react';

import { HeadingProps } from './type';
import { StyledHeading } from './style';

const Heading = memo((props: HeadingProps) => {
  const { children } = props;

  return (
    <StyledHeading>
      {children}
    </StyledHeading>
  );
});

export default Heading;
