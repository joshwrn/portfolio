import React from 'react';

import InstagramThumbnail from '../../assets/images/instagram-thumbnail.jpg';
import FashionThumbnail from '../../assets/images/fashion-thumbnail.jpeg';

import PortfolioSection from './PortfolioSection';
import Header from '../reusable/Header';

import styled from 'styled-components';

const Portfolio = () => {
  return (
    <Container>
      <Inner>
        <Header title="Projects" />
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
        </Feed>
      </Inner>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 150px 100px 0 100px;
  @media only screen and (max-width: 850px) {
    padding: 20px;
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
