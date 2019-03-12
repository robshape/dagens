import React, { memo } from 'react';

import { CardProps } from './type';
import Image from '../Image';
import { StyledCard } from './style';

const Card = memo((props: CardProps) => {
  const { recipe } = props;

  return (
    <StyledCard>
      <Image alt={recipe.Name} height={450} src={recipe.ImageUrl} width={600} />
    </StyledCard>
  );
});

export default Card;
