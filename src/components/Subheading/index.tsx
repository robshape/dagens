import React, { memo } from 'react';

import { SubheadingProps } from './type';
import { StyledSubheading } from './style';

export const Subheading = memo((props: SubheadingProps) => {
  const { children } = props;

  return (
    <StyledSubheading title={children}>
      {children}
    </StyledSubheading>
  );
});
