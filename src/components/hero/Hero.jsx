import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import heroVideo from '../../assets/images/sparks.mp4';
import Styles from '../../styles/hero/hero.module.css';
import { useInView } from 'react-intersection-observer';
import defaults from '../../framer/inView';

const Hero = ({ setTop }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
  });
  const [topRef, topView] = useInView({
    threshold: 0.1,
  });
  const animation = useAnimation();
  const headerAnim = useAnimation();

  const header = {
    initial: {
      filter: 'blur(100px)',
      opacity: 0,
    },
    animate: {
      filter: 'blur(0px)',
      opacity: 1,
      transition: {
        duration: 0.85,
        ease: [0.6, 0.01, -0.05, 0.9],
      },
    },
  };

  useEffect(() => {
    if (inView) {
      animation.start(header.animate);
      headerAnim.start(defaults.end);
    } else {
      animation.start(header.initial);
      headerAnim.start(defaults.start);
    }
  }, [inView]);

  useEffect(() => {
    if (topView) {
      setTop(true);
    } else {
      setTop(false);
    }
  }, [topView]);

  return (
    <motion.div animate={headerAnim} className={Styles.hero}>
      <div ref={topRef} className={Styles.navRef}></div>
      <motion.div animate={animation} className={Styles.headerContainer}>
        <div className={Styles.headerSubContainer}>
          <motion.h2 className={Styles.header}>Josh Warren.</motion.h2>
          <motion.h2 className={Styles.header}>
            Full Stack Web Developer.
          </motion.h2>
          {/* <div className={Styles.sectionLinks}>
            <motion.p className={Styles.sub}>Portfolio</motion.p>
            <motion.p className={Styles.sub}>Skills</motion.p>
            <motion.p className={Styles.sub}>About</motion.p>
            <motion.p className={Styles.sub}>Contact</motion.p>
          </div> */}
        </div>
      </motion.div>
      <div className={Styles.gradient}></div>
      <div
        ref={ref}
        className={Styles.video}
        dangerouslySetInnerHTML={{
          __html: `
        <video
          loop
          muted
          autoplay
          playsinline
          preload="metadata"
        >
        <source className=${Styles.video} src="${heroVideo}" type="video/mp4" />
        </video>`,
        }}
      ></div>
    </motion.div>
  );
};

export default Hero;
