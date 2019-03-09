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
  border: 12px solid #fff;
  border-radius: 50%;
  border-top-color: #09091e;
  height: 32px;
  width: 32px;
`;
