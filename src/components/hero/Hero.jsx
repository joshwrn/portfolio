import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import heroVideo from '../../assets/images/sparks.mp4';
import Styles from '../../styles/hero/hero.module.css';
import { useInView } from 'react-intersection-observer';
import defaults from '../../framer/inView';

const Hero = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
  });
  const animation = useAnimation();
  const headerAnim = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start(defaults.end);
      headerAnim.start(defaults.end);
    } else {
      animation.start(defaults.start);
      headerAnim.start(defaults.start);
    }
  }, [inView]);

  const src =
    'https://images.unsplash.com/photo-1509114397022-ed747cca3f65?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80';

  return (
    <div ref={ref} className={Styles.hero}>
      {/* <div className={Styles.imageContainer}>
        <motion.img className={Styles.image} animate={animation} src={src} alt="" />
      </div> */}
      <motion.div animate={headerAnim} className={Styles.headerContainer}>
        <motion.h2 className={Styles.header}>Josh Warren. Full Stack React Developer.</motion.h2>
        <motion.p className={Styles.sub}></motion.p>
      </motion.div>
      <div className={Styles.gradient}></div>
      <motion.video animate={animation} playsinline muted autoPlay loop className={Styles.video}>
        <source src={heroVideo} type="video/mp4" />
      </motion.video>
    </div>
  );
};

export default Hero;
