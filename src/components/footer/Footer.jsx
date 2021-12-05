import React from 'react';

//+ icons
import { AiOutlineInstagram } from 'react-icons/ai';
import { FiTwitter } from 'react-icons/fi';
import { ImCodepen } from 'react-icons/im';
import { VscGithub } from 'react-icons/vsc';

import styled from 'styled-components';

const Footer = () => {
  return (
    <Container>
      <a href="mailto:joshnwarren@gmail.com">
        <Email>joshnwarren@gmail.com</Email>
      </a>
      <Socials>
        <SocialIcon
          rel="noreferrer"
          target="_blank"
          href="https://github.com/joshwrn"
        >
          <VscGithub size={27} />
        </SocialIcon>
        <SocialIcon
          rel="noreferrer"
          target="_blank"
          href="https://codepen.io/joshwrn"
        >
          <ImCodepen size={27} />
        </SocialIcon>
        <SocialIcon
          rel="noreferrer"
          target="_blank"
          href="https://twitter.com/joshwrn"
        >
          <FiTwitter size={27} />
        </SocialIcon>
        <SocialIcon
          rel="noreferrer"
          target="_blank"
          href="https://instagram.com/joshnwarren"
        >
          <AiOutlineInstagram size={27} />
        </SocialIcon>
      </Socials>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10vw 0 200px 0;
  width: 100%;
  @media only screen and (max-width: 850px) {
    justify-content: flex-start;
    height: 300px;
  }
`;

const Email = styled.h2`
  font-size: 4rem;
  color: var(--font-color-one);
  transition: color 0.5s;
  &:hover {
    color: ${({ theme }) => theme.main.hover};
  }
  @media only screen and (max-width: 850px) {
    font-size: 3rem;
  }
`;

const Socials = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 20px;
`;

const SocialIcon = styled.a`
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.main.hover};
  }
`;

export default Footer;
