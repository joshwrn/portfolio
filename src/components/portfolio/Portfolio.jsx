import React from 'react';

import InstagramThumbnail from '../../assets/images/instagram-thumbnail.jpg';
import FashionThumbnail from '../../assets/images/fashion-thumbnail.jpeg';
import StreaksThumbnail from '../../assets/images/streaks-thumb.jpg';

import PortfolioSection from './PortfolioSection';
import Header from '../reusable/Header';

import styled from 'styled-components';

const Portfolio = ({ portfolioRef }) => {
  return (
    <Container>
      <Inner>
        <Header title="Projects" headerRef={portfolioRef} />
        <Feed>
          <PortfolioSection
            header="Instagram"
            sub="Instagram Clone"
            desc="I built this project using react. Besides using create-react-app and firestore, I
        built everything from scratch. In total it took me around 20 days to complete."
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
    margin-top: 40vh;
    margin-bottom: 100px;
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
`;

export default Portfolio;
