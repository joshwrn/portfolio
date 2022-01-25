import { createGlobalStyle } from 'styled-components';
import haas from '../assets/fonts/haas/NeueHaasDisplayMedium.woff';
import haasRoman from '../assets/fonts/haas/NeueHaasDisplayRoman.woff';

import cyrBold from '../assets/fonts/HelveticaNeueCyr-Bold.otf';
import cyrMedium from '../assets/fonts/HelveticaNeueCyr-Medium.otf';
import cyrRoman from '../assets/fonts/HelveticaNeueCyr-Roman.otf';

const GlobalStyles = createGlobalStyle`
  @font-face {
  font-family: 'haas';
  src: url(${haas}) format('woff');
}

@font-face {
  font-family: 'haas-roman';
  src: url(${haasRoman}) format('woff');
}

@font-face {
  font-family: 'cyrBold';
  src: url(${cyrBold}) format('woff');
}

@font-face {
  font-family: 'cyrMed';
  src: url(${cyrMedium}) format('woff');
}

@font-face {
  font-family: 'cyrRoman';
  src: url(${cyrRoman}) format('woff');
}

html {
  background-color: ${({ theme }) => theme.main.background};
  width: 100vw;
  overflow-x: hidden;
  scroll-behavior: smooth;
}

body {
  position: relative;
  overflow-x: hidden;
  width: 100vw;
  background-color: ${({ theme }) => theme.main.background};
  z-index: -3;
  transition: background-color 0.5s ease-in-out;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font: 62.5% cyrRoman,  Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}

p,
a,
div {
  font-size: 1.6rem;
  color: ${({ theme }) => theme.main.fonts.secondary};
}

h1,
h2,
h3,
h4,
h5 {
  font-size: 2rem;
  color: ${({ theme }) => theme.main.fonts.primary};
  font-family: cyrRoman, helvetica, arial, sans-serif;
}

a {
  text-decoration: none;
}


input {
  padding: 0 16px;
  background: rgba(32, 32, 32, 0.25);
  border: 1px solid rgba(124, 124, 124, 0.281);
  border-radius: 10px;
  height: 30px;
  width: 200px;
}

input,
select,
textarea {
  text-align: left;
  font-family: helvetica;
  font-size: 1.5rem;
}
textarea::placeholder {
  font-size: 1.5rem;
}

input::placeholder {
  color: rgb(126, 126, 126) !important;
  font-family: helvetica;
}

textarea:focus,
input:focus {
  outline: none;
}

::selection {
  background: #161616;
  text-shadow: 1px 1px 10px white;
}
::-moz-selection {
  background: #161616;
  text-shadow: 1px 1px 10px white;
}


`;

export default GlobalStyles;
