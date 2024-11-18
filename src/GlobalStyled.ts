import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";


interface ColorStyleType {
  pointColor: string;
}

export const colorStyle:ColorStyleType = {
  pointColor: "#ff9f0a",
}

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