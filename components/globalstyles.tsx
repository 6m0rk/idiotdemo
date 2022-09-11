import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

// sets some default styles and normalizes the css

const GlobalStyle = createGlobalStyle`
  ${normalize()}
  html,
  body {
    background: #2d3436;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
