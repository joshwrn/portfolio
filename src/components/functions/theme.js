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
};

const light = () => {
  root.style.setProperty('--bg-color', 'white');
  root.style.setProperty('--font-color-one', 'rgb(95, 95, 95)');
  root.style.setProperty('--font-color-two', 'rgb(126, 126, 126)');
  root.style.setProperty('--bg-portfolio', 'white');
  root.style.setProperty('--border-portfolio', '1px solid rgba(221, 221, 221, 0)');
  root.style.setProperty('--btn-bg-portfolio-live', 'rgb(27, 27, 27)');
  root.style.setProperty('--btn-border-portfolio', '1px solid rgb(233, 233, 233)');
  root.style.setProperty('--btn-color-portfolio-live', 'rgb(240, 240, 240)');
  root.style.setProperty('--color-hover', 'black');
};

export { light, dark };
