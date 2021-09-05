import React, { useEffect } from 'react';
import Styles from '../../styles/skills/skills.module.css';

//+ Aniamtion
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import defaults from '../../framer/inView';

//+ icons
import { DiReact, DiCss3Full, DiMongodb } from 'react-icons/di';
import { IoLogoJavascript, IoLogoNodejs, IoGitBranchOutline } from 'react-icons/io5';
import {
  Adobeaftereffects,
  Adobephotoshop,
  Adobepremierepro,
  Figma,
  Express,
} from '@icons-pack/react-simple-icons';

const Skills = () => {
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
    <div ref={ref} className={Styles.container}>
      <motion.div className={Styles.headerContainer}>
        <motion.h2 animate={animateHeader} className={Styles.header}>
          Skills
        </motion.h2>
      </motion.div>
      <motion.div animate={animateText} className={Styles.sectionContainer}>
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
  );
};

export default Skills;
