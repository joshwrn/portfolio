const root = document.documentElement;

const dark = () => {
  root.style.setProperty('--bg-color', 'black');
  root.style.setProperty('--font-color-one', 'rgb(212, 212, 212)');
  root.style.setProperty('--font-color-two', 'rgb(192, 192, 192)');
  root.style.setProperty('--bg-portfolio', 'rgb(10, 10, 10)');
  root.style.setProperty('--border-portfolio', '1px solid rgb(26, 26, 26)');
  root.style.setProperty('--btn-bg-portfolio-live', 'rgb(221, 221, 221)');
  root.style.setProperty('--btn-border-portfolio', '1px solid rgb(39, 39, 39)');
  root.style.setProperty('--btn-color-portfolio-live', 'rgb(77, 77, 77)');
  root.style.setProperty('--color-hover', 'white');
  root.style.setProperty(
    '--overlay-gradient',
    'linear-gradient(0deg, rgb(0, 0, 0), rgba(0, 0, 0, 0))'
  );
  root.style.setProperty('--nav-bg', 'rgba(0, 0, 0, 0.5)');
  root.style.setProperty('--about-filter', 'initial');
};

const light = () => {
  root.style.setProperty('--bg-color', 'white');
  root.style.setProperty('--font-color-one', 'rgb(95, 95, 95)');
  root.style.setProperty('--font-color-two', 'rgb(126, 126, 126)');
  root.style.setProperty('--bg-portfolio', 'white');
  root.style.setProperty(
    '--border-portfolio',
    '1px solid rgba(221, 221, 221, 0)'
  );
  root.style.setProperty('--btn-bg-portfolio-live', 'rgb(27, 27, 27)');
  root.style.setProperty(
    '--btn-border-portfolio',
    '1px solid rgb(233, 233, 233)'
  );
  root.style.setProperty('--btn-color-portfolio-live', 'rgb(240, 240, 240)');
  root.style.setProperty('--color-hover', 'black');
  root.style.setProperty('--overlay-gradient', 'none');
  root.style.setProperty('--nav-bg', 'rgba(255, 255, 255, 0.7)');
  root.style.setProperty('--about-filter', 'invert(1) hue-rotate(150deg)');
};

export { light, dark };