import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  background: #cce7ff;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
    sans-serif;
    -webkit-font-smoothing: antialiased;
    font-size: 1em;

  --text-color-main: #00192f;
  --text-color-light: #00192f9c;
}

* {
  box-sizing: border-box;
}
`;

export default GlobalStyle;
