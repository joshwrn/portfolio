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
      <h2 className={Styles.email}>joshnwarren@gmail.com</h2>
      <div className={Styles.bg}></div>
      <div className={Styles.gradient}></div>
      <div className={Styles.socials}>
        <IoLogoGithub className={Styles.socialIcon} />
        <IoLogoCodepen className={Styles.socialIcon} />
        <AiFillTwitterCircle className={Styles.socialIcon} />
      </div>
    </motion.div>
  );
};

export default Footer;
