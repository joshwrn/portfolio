import React from 'react';

import img from '../../assets/images/macbook-1.jpg';
import Header from '../reusable/Header';
import styled from 'styled-components';

const About = () => {
  return (
    <Container>
      <Inner>
        <Header title="About" />
        <SectionContainer>
          <Text>
            Hi, my name is Josh. I'm a 26 year old full stack developer, looking
            for a position as a junior dev. My past experience has mostly just
            been freelance work but I'm looking to be part of an actual team.
            I've spent most of my time during the pandemic studying web design
            and teaching myself different programming languages. When I'm not
            coding I like to mess around in Photoshop and occasionally I make
            beats for{' '}
            <AboutLink
              rel="noreferrer"
              target="_blank"
              href="https://www.youtube.com/channel/UCL3GruHNnB7F008lzpnF-pQ"
            >
              youtube
            </AboutLink>
            , where I have over 10,000 subscribers.
          </Text>
          <ImageContainer>
            <Image src={img} alt="" />
          </ImageContainer>
        </SectionContainer>
      </Inner>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 100px;
  opacity: 1;
  @media only screen and (max-width: 850px) {
    padding: 20px;
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
  padding-bottom: 100px;
  @media only screen and (max-width: 1050px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 100px;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  transform: translateY(-11vw);
  z-index: -5;
  position: relative;
  @media only screen and (max-width: 1050px) {
    justify-content: center;
  }
`;

const Image = styled.img`
  width: 100%;
  position: absolute;
  transform: scale(1.5);
  filter: ${({ theme }) => theme.about.filter};
`;

const Text = styled.p`
  font-family: haas-roman;
  font-size: 1.9rem;
  line-height: 30px;
`;

const AboutLink = styled(Text).attrs({
  as: 'a',
})`
  text-decoration: underline;
`;

export default About;
