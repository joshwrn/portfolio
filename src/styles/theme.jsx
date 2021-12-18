const baseTheme = {
  maxWidth: '1400px',
};

export const darkTheme = {
  ...baseTheme,
  type: 'dark',
  main: {
    background: 'black',
    hover: 'white',
    fonts: {
      primary: 'rgb(212, 212, 212)',
      secondary: 'rgb(192, 192, 192)',
    },
  },
  nav: {
    background: 'rgba(0, 0, 0, 0.5)',
  },
  portfolio: {
    background: 'rgb(10, 10, 10)',
    border: '1px solid rgb(26, 26, 26)',
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

export const lightTheme = {
  ...baseTheme,
  type: 'light',
  main: {
    background: 'white',
    hover: 'black',
    fonts: {
      primary: 'rgb(95, 95, 95)',
      secondary: 'rgb(126, 126, 126)',
    },
  },
  nav: {
    background: 'rgba(255, 255, 255, 0.7)',
  },
  portfolio: {
    background: 'white',
    border: '1px solid rgba(0, 0, 0, 0)',
    buttons: {
      live: {
        background: 'rgb(27, 27, 27)',
        color: 'rgb(240, 240, 240)',
      },
      border: '1px solid rgb(233, 233, 233)',
    },
  },
  about: {
    filter: 'invert(1) hue-rotate(150deg)',
  },
};
