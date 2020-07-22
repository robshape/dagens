import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import {
  StyledErrorScene,
  StyledErrorSceneIcon,
  StyledErrorSceneMessage,
  StyledErrorSceneText,
} from './styles';

type Props = {
  message: string;
};

export const ErrorScene = ({ message }: Props): JSX.Element => (
  <StyledErrorScene>
    <StyledErrorSceneIcon>
      <FontAwesomeIcon icon={['far', 'sad-tear']} />
    </StyledErrorSceneIcon>

    <StyledErrorSceneText>Något blev fel. Kan du prova att ladda om sidan?</StyledErrorSceneText>

    <StyledErrorSceneMessage>{`(${message})`}</StyledErrorSceneMessage>
  </StyledErrorScene>
);
