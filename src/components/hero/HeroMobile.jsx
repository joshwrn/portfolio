import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { useMotionValue, motion } from 'framer-motion';
import useMeasure from 'react-use-measure';

import HeroScene from '../../three/hero/HeroSceneMobile';

import styled from 'styled-components';

const Hero = ({ setTop }) => {
  const [mouseRef, bounds] = useMeasure({ scroll: true });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

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
    <HeroContainer
      ref={mouseRef}
      onPointerMove={(e) => {
        mouseX.set((e.clientX - bounds.x - bounds.width / 2) * 0.5);
        mouseY.set((e.clientY - bounds.y - bounds.height / 2) * 1);
      }}
    >
      <NavRef ref={topRef} />
      <HeaderContainer>
        <Header>Josh Warren</Header>
        <SubHeader>Fullstack Web Developer</SubHeader>
      </HeaderContainer>
      <Gradient />
      <HeroScene mouseX={mouseX} mouseY={mouseY} />
    </HeroContainer>
  );
};

const HeaderContainer = styled.div`
  position: absolute;
  z-index: 2;
`;

const Header = styled.p`
  font-size: 6rem;
  font-family: ${({ theme }) => theme.main.fontFamily.header};
`;

const SubHeader = styled(Header)`
  font-size: 2rem;
`;

const NavRef = styled.div`
  width: 100%;
  height: 100px;
  position: absolute;
  top: 0;
`;

const HeroContainer = styled(motion.div)`
  min-height: 150vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 1;
  background-color: 'black';
  @media only screen and (max-width: 1050px) {
    min-height: 0;
    min-height: 20vh;
  }
`;

const Gradient = styled.div`
  min-width: 100%;
  height: 30vh;
  width: 100vw;
  background: linear-gradient(0deg, #000000 1%, rgba(0, 0, 0, 0) 20%);
  position: absolute;
  pointer-events: none;
  z-index: 1;
`;

export default Hero;
