import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import { Header } from '../Header';
import { Image } from '../Image';
import { Separator } from '../Separator';
import { Recipe } from '../../types';
import {
  StyledCard,
  StyledCardBody,
  StyledCardDetails,
  StyledCardFooter,
  StyledCardText,
} from './style';

type Props = {
  recipe: Recipe;
  title: string;
};

export const Card = ({ recipe, title }: Props): JSX.Element => {
  const averageRating = recipe
    .RatingAverage
    .toFixed(1);
  const preparationTime = recipe.PreparationTotalTime
    || '~15 min';

  return (
    <a href={recipe.Url}>
      <StyledCard>
        <Header>
          <h2>
            {title}
          </h2>
        </Header>

        <StyledCardBody>
          <Image alt={recipe.Name} height={450} src={recipe.ImageUrl} width={600} />

          <Separator />

          <h3>
            {recipe.Name}
          </h3>

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
};
