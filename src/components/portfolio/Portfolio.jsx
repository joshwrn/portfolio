import React from 'react';

import InstagramThumbnail from '../../assets/images/instagram-thumbnail.jpg';
import FashionThumbnail from '../../assets/images/fashion-thumbnail.jpeg';
import StreaksThumbnail from '../../assets/images/streaks-thumb.jpg';

import arrowImg from '../../assets/images/Arrow 1.png';

import PortfolioSection from './PortfolioSection';
import Header from '../reusable/Header';

import styled from 'styled-components';

const Portfolio = ({ portfolioRef, isMobile }) => {
  return (
    <Container>
      <Inner>
        <Header title="Projects" headerRef={portfolioRef} />
        <Divider />
        <Feed>
          <PortfolioSection
            header="Instagram"
            sub="Instagram Clone"
            desc="Fullstack clone of Instagram's features and a complete redesign of the UI. Originally built with firebase, it was rebuilt using React for the frontend, GraphQL for the backend, MongoDB for the database, and AWS S3 to store images."
            src={InstagramThumbnail}
            codeLink="https://github.com/joshwrn/instagram-clone"
            demoLink="https://joshwrn.github.io/instagram-clone/#/"
            isMobile={isMobile}
            tech="React.js, GraphQL, MongoDB, AWS"
            date="2021"
          />
          <PortfolioSection
            header="Fashion Store"
            sub="React Clothing Store"
            desc="A front end clothing store built with React, React Router, and CSS. The store allows users to browse, add, and remove items from their cart."
            src={FashionThumbnail}
            demoLink="https://joshwrn.github.io/shopping-cart/"
            codeLink="https://github.com/joshwrn/shopping-cart"
            isMobile={isMobile}
            tech="React.js, React Router, CSS"
            date="2021"
          />
          <PortfolioSection
            header="Streaks App"
            sub="Task Tracker"
            desc="Built using React, TypeScript, Three.js, Framer Motion, and styled-components. This app tasks you with caring for a virtual pet that you keep alive by completing daily tasks. It's still a work in progress."
            src={StreaksThumbnail}
            demoLink="https://joshwrn.github.io/streak-web-app/"
            codeLink="https://github.com/joshwrn/streak-web-app"
            isMobile={isMobile}
            tech="React, TypeScript, Three.js"
            date="2022"
          />
        </Feed>
        <ButtonContainer
          rel="noreferrer"
          target="_blank"
          href="https://github.com/joshwrn?tab=repositories"
        >
          <Button>View More</Button>
          <Arrow src={arrowImg} alt="arrow" />
        </ButtonContainer>
        <Divider />
      </Inner>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 100vh;
  position: relative;
  z-index: 7;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 150px 0 0 0;
  @media only screen and (max-width: 1050px) {
    margin-top: 0vh;
  }
`;

const Inner = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth};
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  border-bottom: 1px solid ${({ theme }) => theme.portfolio.line};
  margin: 60px 0 60px 0;
`;

const Feed = styled.div`
  display: flex;
  flex-direction: column;
  gap: 55px;
  align-items: center;
`;

const Arrow = styled.img`
  width: fit-content;
  height: fit-content;
  opacity: 0.75;
  transition: transform 0.75s ease-in-out;
`;

const ButtonContainer = styled.a`
  padding-top: 60px;
  display: flex;
  align-items: center;
  width: 100%;
  gap: 50px;
  &:hover {
    p {
      text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.664);
      &::after {
        width: 100%;
      }
    }
    img {
      transform: translateX(20px);
    }
  }
`;

const Button = styled.p`
  position: relative;
  width: fit-content;
  color: ${({ theme }) => theme.main.fonts.primary};
  font-size: 3.6rem;
  font-family: 'cyrMed';
  cursor: pointer;
  transition: text-shadow 0.5s;
  &::after {
    position: absolute;
    content: ' ';
    top: 0;
    left: 0;
    width: 0;
    height: 3px;
    background-color: rgb(255, 255, 255, 0.64);
    transform: translateY(50px);
    transition: width 0.75s 0.25s;
  }
`;

export default Portfolio;
