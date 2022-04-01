import React from 'react';
import styled from 'styled-components';

//+ Aniamtion
import Header from '../reusable/Header';

//+ icons
import { IconContext } from 'react-icons';
import { SiGraphql, SiTypescript } from 'react-icons/si';
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

const Skills = ({ skillsRef }) => {
  return (
    <Container>
      <Inner>
        <Header title="Skills" headerRef={skillsRef} />
        <IconContext.Provider value={{ style: iconStyle }}>
          <SectionContainer>
            <RowContainer>
              <RowHeader>Coding</RowHeader>
              <IconRow>
                <IconContainer>
                  <DiReact />
                  <SkillText>React</SkillText>
                </IconContainer>

                <IconContainer>
                  <IoLogoJavascript />
                  <SkillText>JavaScript</SkillText>
                </IconContainer>

                <IconContainer>
                  <SiGraphql />
                  <SkillText>GraphQL</SkillText>
                </IconContainer>

                <IconContainer>
                  <IoGitBranchOutline />
                  <SkillText>Git</SkillText>
                </IconContainer>

                <IconContainer>
                  <DiMongodb />
                  <SkillText>MongoDB</SkillText>
                </IconContainer>

                <IconContainer>
                  <SiTypescript />
                  <SkillText>TypeScript</SkillText>
                </IconContainer>

                <IconContainer>
                  <Express size={40} />
                  <SkillText>Express</SkillText>
                </IconContainer>

                <IconContainer>
                  <IoLogoNodejs />
                  <SkillText>Node</SkillText>
                </IconContainer>

                <IconContainer>
                  <DiCss3Full />
                  <SkillText>CSS</SkillText>
                </IconContainer>
              </IconRow>
            </RowContainer>
            <RowContainer>
              <RowHeader>Design</RowHeader>
              <IconRow>
                <IconContainer>
                  <Adobeaftereffects size={40} />
                  <SkillText>After Effects</SkillText>
                </IconContainer>

                <IconContainer>
                  <Adobepremierepro size={40} />
                  <SkillText>Premiere</SkillText>
                </IconContainer>

                <IconContainer>
                  <Adobephotoshop size={40} />
                  <SkillText>Photoshop</SkillText>
                </IconContainer>

                <IconContainer>
                  <Figma size={40} />
                  <SkillText>Figma</SkillText>
                </IconContainer>
              </IconRow>
            </RowContainer>
          </SectionContainer>
        </IconContext.Provider>
      </Inner>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  padding: 0 100px;
  @media only screen and (max-width: 1050px) {
    padding: 20px;
    height: fit-content;
  }
`;

const Inner = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
`;

const SectionContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  align-items: flex-start;
  gap: 100px;
  padding-bottom: 100px;
  @media only screen and (max-width: 1050px) {
    flex-direction: column;
  }
`;

const RowContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;

const IconRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  width: 100%;
`;

const RowHeader = styled.h2`
  font-size: 3rem;
  width: 100%;
`;

const iconStyle = {
  color: 'rgb(212, 212, 212)',
  fontSize: '3.7rem',
};

const SkillText = styled.p`
  font-size: 2.1rem;
  color: gray;
  font-family: ${({ theme }) => theme.main.fontFamily.primary};
`;

const IconContainer = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  cursor: default;
  &:hover ${SkillText} {
    color: ${({ theme }) => theme.main.hover};
  }
`;

export default Skills;