import React, { useEffect } from 'react';

import PortfolioSection from './PortfolioSection';
import defaults from '../../framer/inView';
import { motion, useViewportScroll, useMotionValue, useAnimation } from 'framer-motion';
import Styles from '../../styles/portfolio/portfolio.module.css';
import { useInView } from 'react-intersection-observer';

const Portfolio = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start(defaults.end);
    } else {
      animation.start(defaults.start);
    }
  }, [inView]);

  return (
    <div className={Styles.container}>
      <div className={Styles.headerContainer}>
        <motion.h2 ref={ref} className={Styles.header} animate={animation}>
          Projects
        </motion.h2>
      </div>
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
  );
};

export default Portfolio;
