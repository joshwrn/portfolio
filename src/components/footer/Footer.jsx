import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import defaults from '../../framer/inView';
import { useInView } from 'react-intersection-observer';

//+ icons
import { IoLogoGithub, IoLogoCodepen, IoLogoTwitter } from 'react-icons/io5';
import { AiFillTwitterCircle, AiOutlineInstagram } from 'react-icons/ai';
import { FiTwitter, FiCodepen } from 'react-icons/fi';
import { ImCodepen } from 'react-icons/im';
import { VscGithub } from 'react-icons/vsc';

import Styles from '../../styles/footer/footer.module.css';

const Footer = () => {
  return (
    <motion.div className={Styles.container}>
      <a href="mailto:joshnwarren@gmail.com">
        <h2 className={Styles.email}>joshnwarren@gmail.com</h2>
      </a>
      <div className={Styles.bg}></div>
      <div className={Styles.gradient}></div>
      <div className={Styles.socials}>
        <a rel="noreferrer" target="_blank" href="https://github.com/joshwrn">
          <VscGithub className={Styles.socialIcon} />
        </a>
        <a rel="noreferrer" target="_blank" href="https://codepen.io/joshwrn">
          <ImCodepen className={Styles.socialIcon} />
        </a>
        <a rel="noreferrer" target="_blank" href="https://twitter.com/joshwrn">
          <FiTwitter className={Styles.socialIcon} />
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://instagram.com/joshnwarren"
        >
          <AiOutlineInstagram className={Styles.socialIcon} />
        </a>
      </div>
    </motion.div>
  );
};

export default Footer;
