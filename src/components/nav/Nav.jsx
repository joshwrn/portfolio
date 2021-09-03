import React from 'react';
import Styles from '../../styles/nav/nav.module.css';
import { motion } from 'framer-motion';

const Nav = () => {
  const date = () => {
    return new Date().getFullYear();
  };

  return (
    <motion.nav>
      <p className={Styles.name}>JOSH WARREN</p>
      <p className={Styles.portfolio}>PORTFOLIO {date()}</p>
    </motion.nav>
  );
};

export default Nav;
