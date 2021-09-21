const defaults = {
  end: {
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
  start: {
    opacity: 0,
    transition: {
      duration: 0.4,
    },
  },
};

export const header = {
  initial: {
    y: 400,
    filter: 'blur(100px)',
  },
  animate: {
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.95,
      ease: [0.6, 0.01, -0.05, 0.9],
    },
  },
};

export default defaults;
