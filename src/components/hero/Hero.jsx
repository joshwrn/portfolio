import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import heroVideo from '../../assets/images/sparks.mp4';

import styled from 'styled-components';

const Hero = ({ setTop }) => {
  const [topRef, topView] = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (topView) {
      setTop('true');
    } else {
      setTop('false');
    }
  }, [topView]);

  return (
    <HeroContainer>
      <NavRef ref={topRef} />

      <HeaderContainer>
        <HeroHeader>Josh Warren.</HeroHeader>
        <HeroHeader>Full Stack Web Developer.</HeroHeader>
      </HeaderContainer>
      <Gradient />
      <HeroVideo
        dangerouslySetInnerHTML={{
          __html: `
        <video
          loop
          muted
          autoplay
          playsinline
          preload="metadata"
        >
        <source src="${heroVideo}" type="video/mp4" />
        </video>`,
        }}
      ></HeroVideo>
    </HeroContainer>
  );
};

const NavRef = styled.div`
  width: 100%;
  height: 100px;
  position: absolute;
  top: 0;
`;

const HeroContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: center;
  opacity: 1;
  background-color: 'black';
`;

const SceneContainer = styled.div`
  position: absolute;
  z-index: -2;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  pointer-events: none;
  position: relative;
  z-index: 1;
`;

const HeroHeader = styled.h2`
  font-size: 10rem;
  position: relative;
  padding: 0;
  margin: 0;
  display: inline;
  line-height: 10rem;
  color: rgb(212, 212, 212);
  pointer-events: none;
  user-select: none;
  @media only screen and (max-width: 850px) {
    font-size: 6rem;
    padding: 0 40px;
    line-height: 6rem;
  }
`;

const Gradient = styled.div`
  min-width: 100%;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(0deg, black 1%, rgba(0, 0, 0, 0));
  position: absolute;
  z-index: -1;
  pointer-events: none;
`;

const HeroVideo = styled.div`
  position: absolute;
  z-index: -2;
  width: 100vw;
  height: 100vh;
  filter: brightness(0.85);
  object-fit: cover;
  opacity: 1;
  overflow: hidden;
`;

export default Hero;
