import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Styles from '../../styles/reusable/header.module.css';
import { useInView } from 'react-intersection-observer';
import { header } from '../../framer/inView';

const Header = ({ title }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
  });
  const animateHeader = useAnimation();

  useEffect(() => {
    if (inView) {
      animateHeader.start(header.animate);
    } else {
      animateHeader.start(header.initial);
    }
  }, [inView]);

  return (
    <motion.div ref={ref} className={Styles.headerContainer}>
      <motion.h2 className={Styles.header} animate={animateHeader}>
        {title}
      </motion.h2>
    </motion.div>
  );
};

export default Header;
