import React, { useEffect } from 'react';
import Styles from '../../styles/skills/skills.module.css';

//+ Aniamtion
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import defaults from '../../framer/inView';
import Header from '../reusable/Header';

//+ icons
import { DiReact, DiCss3Full, DiMongodb } from 'react-icons/di';
import {
  IoLogoJavascript,
  IoLogoNodejs,
  IoGitBranchOutline,
} from 'react-icons/io5';
import {
  Adobeaftereffects,
  Adobephotoshop,
  Adobepremierepro,
  Figma,
  Express,
} from '@icons-pack/react-simple-icons';

const Skills = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.inner}>
        <Header title="Skills" />
        <motion.div className={Styles.sectionContainer}>
          <div className={Styles.rowContainer}>
            <h2 className={Styles.rowHeader}>Coding</h2>
            <div className={Styles.iconRow}>
              <motion.div className={Styles.iconContainer}>
                <DiReact className={Styles.icon} />
                <p className={Styles.skillText}>React</p>
              </motion.div>
              <div className={Styles.iconContainer}>
                <IoLogoJavascript className={Styles.icon} />
                <p className={Styles.skillText}>Javascript</p>
              </div>
              <div className={Styles.iconContainer}>
                <DiCss3Full className={Styles.icon} />
                <p className={Styles.skillText}>CSS</p>
              </div>
              <div className={Styles.iconContainer}>
                <DiMongodb className={Styles.icon} />
                <p className={Styles.skillText}>MongoDB</p>
              </div>
              <div className={Styles.iconContainer}>
                <Express size={40} className={Styles.icon} />
                <p className={Styles.skillText}>Express</p>
              </div>
              <div className={Styles.iconContainer}>
                <IoLogoNodejs className={Styles.icon} />
                <p className={Styles.skillText}>NodeJS</p>
              </div>
              <div className={Styles.iconContainer}>
                <IoGitBranchOutline className={Styles.icon} />
                <p className={Styles.skillText}>Git</p>
              </div>
            </div>
          </div>
          <div className={Styles.rowContainer}>
            <h2 className={Styles.rowHeader}>Design</h2>
            <div className={Styles.iconRow}>
              <div className={Styles.iconContainer}>
                <Adobeaftereffects size={40} className={Styles.icon} />
                <p className={Styles.skillText}>After Effects</p>
              </div>
              <div className={Styles.iconContainer}>
                <Adobepremierepro size={40} className={Styles.icon} />
                <p className={Styles.skillText}>Premiere</p>
              </div>
              <div className={Styles.iconContainer}>
                <Adobephotoshop size={40} className={Styles.icon} />
                <p className={Styles.skillText}>Photoshop</p>
              </div>
              <div className={Styles.iconContainer}>
                <Figma size={40} className={Styles.icon} />
                <p className={Styles.skillText}>Figma</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
