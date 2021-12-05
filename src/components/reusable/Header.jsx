import React, { useEffect } from 'react';

import { motion, useAnimation } from 'framer-motion';

import { useInView } from 'react-intersection-observer';
import { header } from '../../framer/inView';

import styled from 'styled-components';

const Header = ({ title }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
  });
  const animateHeader = useAnimation();

  useEffect(() => {
    if (inView) {
      animateHeader.start(header.animate);
    } else {
      animateHeader.start(header.initial);
    }
  }, [inView]);

  return (
    <HeaderContainer ref={ref}>
      <HeaderTitle animate={animateHeader}>{title}</HeaderTitle>
    </HeaderContainer>
  );
};

const HeaderContainer = styled(motion.div)`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  overflow: hidden;
  height: 100px;
  margin: 0px 0 25px 0;
  @media only screen and (max-width: 850px) {
    justify-content: center;
  }
`;

const HeaderTitle = styled(motion.h2)`
  font-size: 8rem;
`;

export default Header;
