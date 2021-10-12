import React from 'react';

import PortfolioSection from './PortfolioSection';
import Styles from '../../styles/portfolio/portfolio.module.css';
import Header from '../reusable/Header';

const Portfolio = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.inner}>
        <Header title="Projects" />
        <div className={Styles.feed}>
          <PortfolioSection
            header="Instagram"
            sub="Instagram Clone"
            desc="I built this project using react. Besides using create-react-app and firestore, I
        built everything from scratch. In total it took me around 20 days to complete."
            src="https://user-images.githubusercontent.com/81135679/127759580-7e0aa20d-d922-4e10-bc5f-9a7ab371cef0.png"
            codeLink="https://github.com/joshwrn/instagram-clone"
            demoLink="https://joshwrn.github.io/instagram-clone/#/"
          />
          <PortfolioSection
            header="Fashion Store"
            sub="React Clothing Store"
            desc="This project was built in react. You have the ability to add items to your cart and complete a fake checkout."
            src="https://user-images.githubusercontent.com/81135679/120249450-d0f68380-c22f-11eb-8c58-209df5794d92.jpg"
            demoLink="https://joshwrn.github.io/shopping-cart/"
            codeLink="https://github.com/joshwrn/shopping-cart"
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
