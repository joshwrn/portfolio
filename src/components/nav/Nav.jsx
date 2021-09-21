import React, { useState } from 'react';
import Styles from '../../styles/nav/nav.module.css';
import { motion } from 'framer-motion';
import { light, dark } from '../functions/theme';
import { CgDarkMode } from 'react-icons/cg';

const Nav = ({ top }) => {
  const [theme, setTheme] = useState('dark');
  const date = () => {
    return new Date().getFullYear();
  };

  const handleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
      light();
    } else {
      setTheme('dark');
      dark();
    }
  };

  return (
    <motion.nav
      className={top ? Styles.top : Styles.color}
      initial={{ opacity: 0, y: '-54px' }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, type: 'spring', stiffness: 100 }}
    >
      <div className={Styles.navStart}>
        <p className={Styles.portfolio}>PORTFOLIO {date()}</p>
      </div>
      <div className={Styles.navContainer}>
        <p className={Styles.name}>JOSH WARREN</p>
      </div>
      <div className={Styles.navEnd}>
        <div onClick={handleTheme} className={Styles.toggleContainer}>
          <CgDarkMode
            className={Styles.icon}
            style={
              theme === 'dark'
                ? null
                : { transform: 'translateX(29px) rotate(180deg)' }
            }
          />
        </div>
      </div>
      <div
        className={Styles.blur}
        style={top ? { opacity: 0 } : { opacity: 1 }}
      ></div>
    </motion.nav>
  );
};

export default Nav;
