import React from 'react';

import { StyledHeader } from './styles';

type Props = {
  children: React.ReactNode;
};

export const Header = ({ children }: Props): JSX.Element => <StyledHeader>{children}</StyledHeader>;
