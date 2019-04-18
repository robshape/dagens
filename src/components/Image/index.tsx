import React, { memo, ReactElement } from 'react';

import { ImageProps } from './type';
import { StyledImage } from './style';

export const Image = memo((props: ImageProps): ReactElement => {
  const {
    alt,
    height,
    src,
    width,
  } = props;

  return <StyledImage alt={alt} height={height} src={src} width={width} />;
});
