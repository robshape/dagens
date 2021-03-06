import styled, { keyframes } from 'styled-components';

export const KeyframesSpin = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

export const StyledLoader = styled.div`
  animation: ${KeyframesSpin} 500ms linear infinite;
  border: 1rem solid #f6f7f8;
  border-radius: 50%;
  border-top-color: #000;
  height: 4rem;
  width: 4rem;
`;
