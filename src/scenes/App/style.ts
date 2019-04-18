import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  a {
    color: inherit;
    text-decoration: inherit;
  }

  body,
  html,
  #index {
    height: 100%;
  }
`;

export const StyledApp = styled.div`
  align-items: center;
  background-color: #f6f7f8;
  display: flex;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 16px;
  height: 100%;
  justify-content: center;
  padding: 16px;
`;
