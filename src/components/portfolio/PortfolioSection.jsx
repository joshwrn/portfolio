import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Styles from '../../styles/portfolio/portfolio__sections.module.css';
import ImageLoader from '../reusable/ImageLoader';
import { useInView } from 'react-intersection-observer';
import defaults from '../../framer/inView';

const PortfolioSection = ({ header, sub, desc, src, codeLink, demoLink }) => {
  return (
    <div className={Styles.outer}>
      <motion.div className={Styles.sectionContainer}>
        <div className={Styles.subContainer}>
          <div className={Styles.infoContainer}>
            <motion.h3 className={Styles.header}>{header}</motion.h3>
            <motion.p className={Styles.subHeader}>{sub}</motion.p>
            <motion.p className={Styles.description}>{desc}</motion.p>
            <div className={Styles.linksContainer}>
              <a rel="noreferrer" target="_blank" href={demoLink}>
                <button className={`${Styles.button} ${Styles.live}`}>
                  Live Demo
                </button>
              </a>
              <a rel="noreferrer" target="_blank" href={codeLink}>
                <button className={`${Styles.button} ${Styles.view}`}>
                  View Code
                </button>
              </a>
            </div>
          </div>
          <a
            rel="noreferrer"
            target="_blank"
            className={Styles.link}
            href={demoLink}
          >
            <ImageLoader
              src={src}
              maxWidth="600px"
              justifySelf="flex-end"
              borderRadius="12px"
            />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default PortfolioSection;
