import React, { memo, ReactElement } from 'react';

import { SubheadingProps } from './type';
import { StyledSubheading } from './style';

export const Subheading = memo((props: SubheadingProps): ReactElement => {
  const { children } = props;

  return (
    <StyledSubheading title={children}>
      {children}
    </StyledSubheading>
  );
});
