import React from 'react';

import InstagramThumbnail from '../../assets/images/instagram-thumbnail.jpg';
import FashionThumbnail from '../../assets/images/fashion-thumbnail.jpeg';
import StreaksThumbnail from '../../assets/images/streaks-thumb.jpg';

import PortfolioSection from './PortfolioSection';
import Header from '../reusable/Header';

import styled, { keyframes } from 'styled-components';

const Portfolio = ({ portfolioRef }) => {
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
          />
          <PortfolioSection
            header="Fashion Store"
            sub="React Clothing Store"
            desc="This project was built in react. You have the ability to add items to your cart and complete a fake checkout."
            src={FashionThumbnail}
            demoLink="https://joshwrn.github.io/shopping-cart/"
            codeLink="https://github.com/joshwrn/shopping-cart"
          />
          <PortfolioSection
            header="Streaks App"
            sub="Task Tracker"
            desc="I created this project to practice Typescript. You have a virtual pet you keep alive by completing daily tasks. It's currently unfinished."
            src={StreaksThumbnail}
            demoLink="https://joshwrn.github.io/streak-web-app/"
            codeLink="https://github.com/joshwrn/streak-web-app"
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
  @media only screen and (max-width: 850px) {
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
  max-width: 1600px;
  gap: 60px;
  align-items: center;
`;

const gradientMove = keyframes`
  0% {
    background-position: 0% 0%;
  }
  50% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 0% 100%;
  }
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
  transition: box-shadow 0.25s;
  &:hover {
    /* background: -webkit-linear-gradient(45deg, #d85566 0, #7451af, #283b8d); */
    /* color: white; */
    background-size: 100% 400%;
    animation: ${gradientMove} 2s ease infinite alternate;
    box-shadow: 0px 0px 20px rgba(138, 138, 138, 0.5);
  }
`;

export default Portfolio;
