import React, { memo } from 'react';

import { ImageProps } from './type';
import { StyledImage } from './style';

const Image = memo((props: ImageProps) => {
  const {
    alt,
    height,
    src,
    width,
  } = props;

  return <StyledImage alt={alt} height={height} src={src} width={width} />;
});

export default Image;
