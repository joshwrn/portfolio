import React, { useEffect } from 'react';
import heroVideo from '../../assets/images/sparks.mp4';
import Styles from '../../styles/hero/hero.module.css';
import { useInView } from 'react-intersection-observer';

const Hero = ({ setTop }) => {
  const [topRef, topView] = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (topView) {
      setTop(true);
    } else {
      setTop(false);
    }
  }, [topView]);

  return (
    <div className={Styles.hero}>
      <div ref={topRef} className={Styles.navRef}></div>
      <div className={Styles.headerContainer}>
        <div className={Styles.headerSubContainer}>
          <h2 className={Styles.header}>Josh Warren.</h2>
          <h2 className={Styles.header}>Full Stack Web Developer.</h2>
        </div>
      </div>
      <div className={Styles.gradient}></div>
      <div
        className={Styles.video}
        dangerouslySetInnerHTML={{
          __html: `
        <video
          loop
          muted
          autoplay
          playsinline
          preload="metadata"
        >
        <source className=${Styles.video} src="${heroVideo}" type="video/mp4" />
        </video>`,
        }}
      ></div>
    </div>
  );
};

export default Hero;
