import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyled = createGlobalStyle`
${reset}

* {
  box-sizing: border-box;
}

body {
  background-color: #000;
  color: #fff;
}

img {
  width: 100%;
  display: block;
}

a {
  text-decoration: none;
  display: block;
}

`;