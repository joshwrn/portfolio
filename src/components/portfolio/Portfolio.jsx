import React, { useEffect } from 'react';

import PortfolioSection from './PortfolioSection';
import defaults from '../../framer/inView';
import { motion, useViewportScroll, useMotionValue, useAnimation } from 'framer-motion';
import Styles from '../../styles/portfolio/portfolio.module.css';
import { useInView } from 'react-intersection-observer';

const Portfolio = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
  });
  const animateLetter = useAnimation();

  const project = {
    initial: {
      y: 0,
    },
    animate: {
      y: 0,
      transition: {
        when: 'beforeChildren',
        delayChildren: 0.6,
        staggerChildren: 0.04,
        staggerDirection: 1,
      },
    },
  };

  const letter = {
    initial: {
      y: 400,
    },
    animate: {
      y: 0,
      transition: {
        duration: 1,
        ease: [0.6, 0.01, -0.05, 0.9],
      },
    },
  };

  useEffect(() => {
    if (inView) {
      animateLetter.start(letter.animate);
    } else {
      animateLetter.start(letter.initial);
    }
  }, [inView]);

  return (
    <div className={Styles.container}>
      <motion.div ref={ref} className={Styles.headerContainer}>
        <motion.p animate={animateLetter}>Projects</motion.p>
      </motion.div>
      <div className={Styles.feed}>
        <PortfolioSection
          header="Instagram"
          sub="Instagram Clone"
          desc="I built this project using react. Besides using create-react-app and firestore, I
        built everything from scratch. In total it took me around 20 days to complete."
          src="https://user-images.githubusercontent.com/81135679/127759580-7e0aa20d-d922-4e10-bc5f-9a7ab371cef0.png"
        />
        <PortfolioSection
          header="Fashion Store"
          sub="React Clothing Store"
          desc="This project was built in react. You have the ability to add items to your cart and complete a fake checkout."
          src="https://user-images.githubusercontent.com/81135679/120249450-d0f68380-c22f-11eb-8c58-209df5794d92.jpg"
        />
      </div>
    </div>
  );
};

export default Portfolio;
