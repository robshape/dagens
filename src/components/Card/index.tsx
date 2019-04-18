import React, { memo, ReactElement } from 'react';

import { CardProps } from './type';
import { Header } from '../Header';
import { Heading } from '../Heading';
import { Image } from '../Image';
import { Separator } from '../Separator';
import { StyledCard, StyledCardContent } from './style';
import { Subheading } from '../Subheading';

export const Card = memo((props: CardProps): ReactElement => {
  const { recipe, title } = props;

  return (
    <StyledCard>
      <Header>
        <Heading>
          {title}
        </Heading>
      </Header>

      <StyledCardContent>
        <Image alt={recipe.Name} height={450} src={recipe.ImageUrl} width={600} />

        <Separator />

        <Subheading>
          {recipe.Name}
        </Subheading>
      </StyledCardContent>
    </StyledCard>
  );
});
