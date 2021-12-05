import React from 'react';
import Styles from '../../styles/portfolio/portfolio__sections.module.css';
import ImageLoader from '../reusable/ImageLoader';

const PortfolioSection = ({ header, sub, desc, src, codeLink, demoLink }) => {
  return (
    <div className={Styles.outer}>
      <div className={Styles.sectionContainer}>
        <div className={Styles.subContainer}>
          <div className={Styles.infoContainer}>
            <h3 className={Styles.header}>{header}</h3>
            <p className={Styles.subHeader}>{sub}</p>
            <p className={Styles.description}>{desc}</p>
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
              transition="opacity 0.7s, transform 0.75s"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;
