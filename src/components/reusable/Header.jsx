import React, { useEffect } from 'react';

import { motion, useAnimation } from 'framer-motion';

import { useInView } from 'react-intersection-observer';

import styled from 'styled-components';

const Header = ({ title }) => {
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

  const container = {
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

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
        // duration: 0.45,
        // ease: [0.6, 0.01, -0.05, 0.9],
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
        {title.split('').map((item, index) => (
          <HeaderLetter variants={letter} key={index}>
            {item}
          </HeaderLetter>
        ))}
      </HeaderTitle>
    </HeaderContainer>
  );
};

const HeaderContainer = styled(motion.div)`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  height: 100px;
  margin: 0px 0 25px 0;
`;

const HeaderTitle = styled(motion.div)`
  display: flex;
`;

const HeaderLetter = styled(motion.div)`
  font-size: 8rem;
`;

export default Header;
