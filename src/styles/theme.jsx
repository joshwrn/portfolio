const extraFonts = 'Helvetica, Arial, sans-serif';

export const darkTheme = {
  maxWidth: '1440px',
  type: 'dark',
  main: {
    background: 'black',
    hover: 'white',
    fonts: {
      primary: 'rgb(212, 212, 212)',
      secondary: 'rgb(192, 192, 192)',
    },
    fontFamily: {
      light: `cyrLight, ${extraFonts}`,
      primary: `cyrRoman, ${extraFonts}`,
      med: `cyrMed, ${extraFonts}`,
      bold: `cyrBold, ${extraFonts}`,
    },
  },
  nav: {
    background: 'rgba(0, 0, 0, 0.5)',
    fonts: {
      primary: 'rgb(182, 182, 182)',
      hover: 'rgb(212, 212, 212)',
    },
  },
  portfolio: {
    background: 'rgb(10, 10, 10)',
    border: '1px solid rgb(26, 26, 26)',
    line: '#414141',
    fontColor: {
      primary: 'rgb(255, 255, 255)',
      secondary: 'rgba(255, 255, 255, 0.64)',
    },
    buttons: {
      live: {
        background: 'rgb(221, 221, 221)',
        color: 'rgb(77, 77, 77)',
      },
      border: '1px solid rgb(39, 39, 39)',
    },
  },
  about: {
    filter: 'initial',
  },
};
