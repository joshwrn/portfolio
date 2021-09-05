import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import defaults from '../../framer/inView';
import { useInView } from 'react-intersection-observer';

//+ icons
import { IoLogoGithub, IoLogoCodepen } from 'react-icons/io5';
import { AiFillTwitterCircle } from 'react-icons/ai';

import Styles from '../../styles/footer/footer.module.css';

const Footer = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
  });
  const animateText = useAnimation();

  useEffect(() => {
    if (inView) {
      animateText.start(defaults.end);
    } else {
      animateText.start(defaults.start);
    }
    console.log(inView);
  }, [inView]);
  return (
    <motion.div animate={animateText} ref={ref} className={Styles.container}>
      <a href="mailto:joshnwarren@gmail.com">
        <h2 className={Styles.email}>joshnwarren@gmail.com</h2>
      </a>
      <div className={Styles.bg}></div>
      <div className={Styles.gradient}></div>
      <div className={Styles.socials}>
        <a rel="noreferrer" target="_blank" href="https://github.com/joshwrn">
          <IoLogoGithub className={Styles.socialIcon} />
        </a>
        <a rel="noreferrer" target="_blank" href="https://codepen.io/joshwrn">
          <IoLogoCodepen className={Styles.socialIcon} />
        </a>
        <a rel="noreferrer" target="_blank" href="https://twitter.com/joshwrn">
          <AiFillTwitterCircle className={Styles.socialIcon} />
        </a>
      </div>
    </motion.div>
  );
};

export default Footer;
