import React, { useEffect } from 'react';

import { motion, useAnimation } from 'framer-motion';

import { useInView } from 'react-intersection-observer';

import styled from 'styled-components';

const Header = ({ title, headerRef }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
  });

  const letterControls = useAnimation();

  useEffect(() => {
    if (inView) {
      letterControls.start('show');
    } else {
      letterControls.start('hidden');
    }
  }, [inView]);

  const letter = {
    hidden: {
      filter: 'blur(100px)',
      opacity: 0,
      y: 100,
    },
    show: {
      filter: 'blur(0px)',
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 24,
        mass: 2,
      },
    },
  };

  return (
    <HeaderContainer ref={ref}>
      <HeaderTitle variants={letter} initial="hidden" animate={letterControls}>
        <RefContainer ref={headerRef} />
        <HeaderLetter>{title}</HeaderLetter>
      </HeaderTitle>
    </HeaderContainer>
  );
};

const RefContainer = styled.div`
  height: 0;
  scroll-margin-top: 190px;
  z-index: 1;
`;

const HeaderContainer = styled(motion.div)`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`;

const HeaderTitle = styled(motion.div)`
  display: flex;
  scroll-margin-top: 100px;
`;

const HeaderLetter = styled(motion.div)`
  font-size: 7rem;
  font-family: ${({ theme }) => theme.main.fontFamily.bold};
`;

export default Header;
