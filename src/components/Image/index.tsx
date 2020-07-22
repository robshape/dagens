import React from 'react';

import { StyledImage } from './styles';

type Props = {
  alt: string;
  height: number;
  src: string;
  width: number;
};

export const Image = ({ alt, height, src, width }: Props): JSX.Element => (
  <StyledImage alt={alt} height={height} src={src} width={width} />
);
