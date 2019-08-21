import React, { ReactElement } from 'react';

import { HeaderProps } from './type';
import { StyledHeader } from './style';

export const Header = (props: HeaderProps): ReactElement => {
  const { children } = props;

  return (
    <StyledHeader>
      {children}
    </StyledHeader>
  );
};
