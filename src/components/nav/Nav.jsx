import React from 'react';
import Styles from '../../styles/nav/nav.module.css';
import { motion } from 'framer-motion';

const Nav = () => {
  const date = () => {
    return new Date().getFullYear();
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: '-54px' }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, type: 'spring', stiffness: 100 }}
    >
      <p className={Styles.name}>JOSH WARREN</p>
      <p className={Styles.portfolio}>PORTFOLIO {date()}</p>
    </motion.nav>
  );
};

export default Nav;
