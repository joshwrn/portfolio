import React from 'react';

import { motion } from 'framer-motion';

import { IoMailOutline } from 'react-icons/io5';
import styled from 'styled-components';

const Nav = ({ top }) => {
  const date = () => {
    return new Date().getFullYear();
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <StyledNav
      initial={{ opacity: 0, y: '-54px' }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, type: 'spring', stiffness: 100 }}
      top={top}
    >
      <NavInner>
        <NavStart>
          <NavText>PORTFOLIO {date()}</NavText>
        </NavStart>
        <NavCenter>
          <NavText>JOSH WARREN</NavText>
        </NavCenter>
        <NavEnd onMouseDown={scrollToBottom}>
          <ContactText>CONTACT</ContactText>
          <MailIcon />
        </NavEnd>
      </NavInner>
      <Blur top={top}></Blur>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px 100px;
  width: 100vw;
  height: 35px;
  top: 0;
  left: 0;
  box-sizing: border-box;
  position: fixed;
  font-weight: bold;
  z-index: 99;
  transition: background-color 1s, border-bottom 1s;
  background-color: ${({ theme, top }) =>
    top === 'true' ? 'transparent' : theme.nav.background};
  border-bottom: ${({ theme, top }) =>
    top === 'true' ? 'transparent' : theme.portfolio.border};
  opacity: 0;
`;

const NavInner = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavSection = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const NavStart = styled(NavSection)`
  justify-content: flex-start;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const NavEnd = styled(NavSection)`
  justify-content: flex-end;
  gap: 8px;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const NavCenter = styled(NavSection)`
  justify-content: center;
`;

const NavText = styled.p`
  color: ${({ theme }) => theme.main.fonts.primary};
`;

const ContactText = styled(NavText)`
  cursor: pointer;
`;

const MailIcon = styled(IoMailOutline)`
  color: #fff;
  font-size: 1.7rem;
  transform: translateY(-1px);
  cursor: pointer;
`;

const Blur = styled.div`
  opacity: ${({ top }) => (top === 'true' ? '0' : '1')};
  backdrop-filter: blur(100px);
  transition: opacity 1s;
  width: 100vw;
  height: 35px;
  padding: 25px 50px;
  top: 0;
  left: 0;
  box-sizing: border-box;
  position: absolute;
  z-index: -5;
`;

export default Nav;
