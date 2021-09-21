import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import defaults from '../../framer/inView';
import { useInView } from 'react-intersection-observer';

import img from '../../assets/images/lpt.png';
import Header from '../reusable/Header';
import Styles from '../../styles/about/about.module.css';

const About = () => {
  return (
    <motion.div className={Styles.container}>
      <Header title="About" />
      <div className={Styles.sectionContainer}>
        <p className={Styles.summary}>
          Hi, my name is Josh. I'm a 26 year old full stack developer, looking
          for a position as a junior dev. My past experience has mostly just
          been freelance work but I'm looking to be part of an actual team. I've
          spent most of my time during the pandemic studying web design and
          teaching myself different programming languages. When I'm not coding I
          like to mess around in Photoshop and occasionally I make beats for{' '}
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
        <div className={Styles.imageContainer}>
          <img className={Styles.image} src={img} alt="" />
        </div>
      </div>
    </motion.div>
  );
};

export default About;
