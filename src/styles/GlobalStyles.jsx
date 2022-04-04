import { createGlobalStyle } from 'styled-components';

import cyrBold from '../assets/fonts/HelveticaNeueCyr-Bold.otf';
import cyrMedium from '../assets/fonts/HelveticaNeueCyr-Medium.otf';
import cyrRoman from '../assets/fonts/HelveticaNeueCyr-Roman.otf';

import helveticaNeueLight from '../assets/fonts/HelveticaNeue-Light.ttf';

const GlobalStyles = createGlobalStyle`

@font-face {
  font-family: 'neueLight';
  src: url(${helveticaNeueLight}) format('truetype');
}

@font-face {
  font-family: 'cyrBold';
  src: url(${cyrBold}) format('opentype');
}

@font-face {
  font-family: 'cyrMed';
  src: url(${cyrMedium}) format('opentype');
}

@font-face {
  font-family: 'cyrRoman';
  src: url(${cyrRoman}) format('opentype');
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
  font-family: ${({ theme }) =>
    theme.main.fontFamily.primary}, helvetica, arial, sans-serif;
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

// TEXT SELECTION
::selection {
  background: #2e2e2e;
}

::-moz-selection {
  background: #161616;
}

// SCROLLBAR
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: none;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgba(124, 124, 124, 0.281);
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

`;

export default GlobalStyles;
