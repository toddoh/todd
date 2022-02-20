import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0 10vw;
  background: #fff;
  font-family: 'Readex Pro', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
    sans-serif;
    -webkit-font-smoothing: antialiased;
    font-size: 1em;
}

:root {
  --text-color-main: #000;
  --text-color-light: #7a7a7a;
}

* {
  box-sizing: border-box;
}

@media screen and (max-width: 1023px) {
  html, body {
    margin: 0 1vw;
  }
} 
`;

export default GlobalStyle;
