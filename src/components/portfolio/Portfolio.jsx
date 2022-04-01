import React from 'react';

import InstagramThumbnail from '../../assets/images/instagram-thumbnail.jpg';
import FashionThumbnail from '../../assets/images/fashion-thumbnail.jpeg';
import StreaksThumbnail from '../../assets/images/streaks-thumb.jpg';

import PortfolioSection from './PortfolioSection';
import Header from '../reusable/Header';

import styled from 'styled-components';

const Portfolio = ({ portfolioRef, isMobile }) => {
  return (
    <Container>
      <Inner>
        <Header title="Projects" headerRef={portfolioRef} />
        <Feed>
          <PortfolioSection
            header="Instagram"
            sub="Instagram Clone"
            desc="Fullstack clone of Instagram's features and a complete redesign of the UI. Originally built with firebase, it was rebuilt using React for the frontend, GraphQL for the backend, MongoDB for the database, and AWS S3 to store images."
            src={InstagramThumbnail}
            codeLink="https://github.com/joshwrn/instagram-clone"
            demoLink="https://joshwrn.github.io/instagram-clone/#/"
            isMobile={isMobile}
          />
          <PortfolioSection
            header="Fashion Store"
            sub="React Clothing Store"
            desc="A front end clothing store built with React, React Router, and CSS. The Store allows users to browse, add, and remove items from their cart."
            src={FashionThumbnail}
            demoLink="https://joshwrn.github.io/shopping-cart/"
            codeLink="https://github.com/joshwrn/shopping-cart"
            isMobile={isMobile}
          />
          <PortfolioSection
            header="Streaks App"
            sub="Task Tracker"
            desc="Built using React, TypeScript, Three.js, Framer Motion, and styled-components. This app tasks you with caring for a virtual pet that you keep alive by completing daily tasks."
            src={StreaksThumbnail}
            demoLink="https://joshwrn.github.io/streak-web-app/"
            codeLink="https://github.com/joshwrn/streak-web-app"
            isMobile={isMobile}
          />
        </Feed>
        <ButtonContainer>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/joshwrn?tab=repositories"
          >
            <Button>View More</Button>
          </a>
        </ButtonContainer>
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
  padding: 150px 100px 0 100px;
  @media only screen and (max-width: 1050px) {
    padding: 20px;
    margin-top: 0vh;
    margin-bottom: 20px;
  }
`;

const Inner = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth};
`;

const Feed = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  align-items: center;
`;

const ButtonContainer = styled.div`
  padding-top: 30px;
  display: flex;
  width: 100%;
  justify-content: center;
`;

const Button = styled.button`
  width: fit-content;
  padding: 15px 35px;
  border-radius: 13px;
  background-color: transparent;
  color: ${({ theme }) => theme.main.fonts.primary};
  border: ${({ theme }) => theme.portfolio.buttons.border};
  transition: color 0.25s;
  font-size: 1.3rem;
  cursor: pointer;
  transition: box-shadow 0.5s;
  &:hover {
    box-shadow: 0px 0px 22px rgba(148, 138, 138, 0.411);
  }
`;

export default Portfolio;
