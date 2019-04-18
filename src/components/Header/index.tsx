import React, { memo } from 'react';

import { HeaderProps } from './type';
import { StyledHeader } from './style';

export const Header = memo((props: HeaderProps) => {
  const { children } = props;

  return (
    <StyledHeader>
      {children}
    </StyledHeader>
  );
});
