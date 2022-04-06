import React from 'react';

import { useMotionValue, motion } from 'framer-motion';
import useMeasure from 'react-use-measure';
import Header from '../reusable/Header';
import styled from 'styled-components';

import Divider from '../reusable/Divider';
import LaptopContainer from '../../three/laptop/LaptopContainer';

const About = ({ aboutRef, isMobile }) => {
  const [mouseRef, bounds] = useMeasure({ scroll: true });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  return (
    <Container
      ref={mouseRef}
      onPointerMove={(e) => {
        mouseX.set(e.clientX - bounds.x - bounds.width / 2);
        mouseY.set(e.clientY - bounds.y - bounds.height / 2);
      }}
    >
      <Inner>
        <Header title="About" headerRef={aboutRef} />
        <SectionContainer>
          <RightContainer>
            <Description>
              Hi, I'm josh, a passionate self-motivated web developer with 3
              years of experience building websites. I'm proficient with React,
              Express.js, and MongoDB. I've used my creativity and
              problem-solving skills to design and implement websites for
              clients.
            </Description>
            <Skills>
              <Skill>
                <SkillTitle>Front End</SkillTitle>
                <SkillItem>React</SkillItem>
                <SkillItem>Javascript</SkillItem>
                <SkillItem>Typescript</SkillItem>
                <SkillItem>Redux</SkillItem>
                <SkillItem>Three.js</SkillItem>
              </Skill>
              <Skill>
                <SkillTitle>Design Tools</SkillTitle>
                <SkillItem>Figma</SkillItem>
                <SkillItem>Photoshop</SkillItem>
                <SkillItem>Premiere</SkillItem>
                <SkillItem>After Effects</SkillItem>
              </Skill>
              <Skill>
                <SkillTitle>Back End</SkillTitle>
                <SkillItem>Node.js</SkillItem>
                <SkillItem>GraphQL</SkillItem>
                <SkillItem>Express.js</SkillItem>
                <SkillItem>MongoDB</SkillItem>
              </Skill>
            </Skills>
          </RightContainer>
          {isMobile === 'false' && (
            <ImageContainer>
              <LaptopContainer mouseX={mouseX} mouseY={mouseY} />
            </ImageContainer>
          )}
        </SectionContainer>
        <Divider />
      </Inner>
    </Container>
  );
};

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 100px 0 0 0;
  position: relative;
  @media only screen and (max-width: 1050px) {
    padding: 80px 0 0 0;
  }
`;

const Inner = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
`;

const SectionContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 50px;
  margin-bottom: 150px;
  @media only screen and (max-width: 1050px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 0;
    margin-bottom: 100px;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  height: 600px;
  justify-content: center;
  position: relative;
  z-index: -5;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Description = styled.p`
  font-family: ${({ theme }) => theme.main.fontFamily.light};
  font-size: 2.4rem;
  color: ${({ theme }) => theme.portfolio.fontColor.secondary};
  line-height: 150%;
`;

const Skills = styled.div`
  display: grid;
  margin-top: 60px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-row-gap: 50px;
`;

const Skill = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const SkillTitle = styled.p`
  font-family: ${({ theme }) => theme.main.fontFamily.med};
  margin-bottom: 14px;
  color: ${({ theme }) => theme.portfolio.fontColor.primary};
  font-size: 2.4rem;
`;

const SkillItem = styled.p`
  font-family: ${({ theme }) => theme.main.fontFamily.light};
  font-size: 2.4rem;
  color: ${({ theme }) => theme.portfolio.fontColor.secondary};
`;

export default About;
