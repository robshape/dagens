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

  h2 {
    font-size: 2.625rem;
    font-weight: 100;
    line-height: 3rem;
  }

  h3 {
    font-size: 1.625rem;
    font-weight: 400;
    line-height: 3rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  html {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 16px;
    line-height: 24px;
  }

  p {
    font-size: 1rem;
    line-height: 1.5rem;
  }
`;

export const StyledApp = styled.div`
  align-items: center;
  background-color: #f6f7f8;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  padding: 1rem;
`;
