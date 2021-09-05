import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import defaults from '../../framer/inView';
import { useInView } from 'react-intersection-observer';

import sticker from '../../assets/images/holo.png';

import Styles from '../../styles/about/about.module.css';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
  });
  const animateHeader = useAnimation();
  const animateText = useAnimation();

  const header = {
    initial: {
      y: 400,
    },
    animate: {
      y: 0,
      transition: {
        duration: 1,
        ease: [0.6, 0.01, -0.05, 0.9],
        when: 'afterChildren',
        delayChildren: 0.6,
        staggerChildren: 0.04,
        staggerDirection: -1,
      },
    },
  };

  useEffect(() => {
    if (inView) {
      animateHeader.start(header.animate);
      animateText.start(defaults.end);
    } else {
      animateHeader.start(header.initial);
      animateText.start(defaults.start);
    }
    console.log(inView);
  }, [inView]);

  return (
    <motion.div ref={ref} animate={animateText} className={Styles.container}>
      <motion.div className={Styles.headerContainer}>
        <motion.h2 animate={animateHeader} className={Styles.header}>
          About
        </motion.h2>
      </motion.div>
      <div className={Styles.sectionContainer}>
        <p className={Styles.summary}>
          Hi, my name is Josh. I'm a 26 year old full stack developer, looking for a position as a
          junior dev. My past experience has mostly just been freelance work but I'm looking to be
          part of an actual team. I've spent most of my time during the pandemic studying web design
          and teaching myself different programming languages. When I'm not coding I like to mess
          around in Photoshop and occasionally I make beats for{' '}
          <a
            className={Styles.link}
            rel="noreferrer"
            target="_blank"
            href="https://www.youtube.com/channel/UCL3GruHNnB7F008lzpnF-pQ"
          >
            youtube
          </a>
          , where I have over 10,000 subscribers.
        </p>
        <div className={Styles.stickerContainer}>
          <img className={Styles.sticker} src={sticker} alt="" />
        </div>
      </div>
    </motion.div>
  );
};

export default About;
