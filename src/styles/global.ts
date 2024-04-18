import { createGlobalStyle } from "styled-components";

export const Globalstyle = createGlobalStyle`
  *{
    margin: 0;
    padding:0;
    border: 0;
    box-sizing: border-box;
    outline: 1px solid red;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background-color: ${props => props.theme['base-background']};
    color: ${props => props.theme['base-text']};
    -webkit-font-smoothing: antialiased;
  }

  body, input-security, textarea, button {
    font: 400 1.6rem Nunito, sans-serif;
  }
`