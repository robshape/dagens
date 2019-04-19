import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { memo, ReactElement } from 'react';

import { CardProps } from './type';
import { Header } from '../Header';
import { Heading } from '../Heading';
import { Image } from '../Image';
import { Separator } from '../Separator';
import {
  StyledCard,
  StyledCardBody,
  StyledCardDetails,
  StyledCardFooter,
  StyledCardText,
} from './style';
import { Subheading } from '../Subheading';

export const Card = memo((props: CardProps): ReactElement => {
  const { recipe, title } = props;

  const averageRating = recipe.RatingAverage.toFixed(1);
  const preparationTime = recipe.PreparationTotalTime || '15 min';

  return (
    <a href={recipe.Url}>
      <StyledCard>
        <Header>
          <Heading>
            {title}
          </Heading>
        </Header>

        <StyledCardBody>
          <Image alt={recipe.Name} height={450} src={recipe.ImageUrl} width={600} />

          <Separator />

          <Subheading>
            {recipe.Name}
          </Subheading>

          <Separator withBorder />

          <StyledCardFooter>
            <StyledCardDetails>
              <FontAwesomeIcon icon={['far', 'clock']} />

              <StyledCardText>
                {preparationTime}
              </StyledCardText>
            </StyledCardDetails>

            <StyledCardDetails>
              <FontAwesomeIcon icon={['far', 'star']} />

              <StyledCardText>
                {averageRating}
              </StyledCardText>
            </StyledCardDetails>
          </StyledCardFooter>
        </StyledCardBody>
      </StyledCard>
    </a>
  );
});
