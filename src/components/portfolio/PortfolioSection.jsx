import React from 'react';

import ImageLoader from '../reusable/ImageLoader';

import styled, { keyframes } from 'styled-components';

const PortfolioSection = ({ header, sub, desc, src, codeLink, demoLink }) => {
  return (
    <Outer>
      <SectionContainer>
        <SubContainer>
          <InfoContainer>
            <PortfolioHeader>{header}</PortfolioHeader>
            <SubHeader>{sub}</SubHeader>
            <Description>{desc}</Description>
            <LinksContainer>
              <a rel="noreferrer" target="_blank" href={demoLink}>
                <LiveButton>Live Demo</LiveButton>
              </a>
              <a rel="noreferrer" target="_blank" href={codeLink}>
                <Button>View Code</Button>
              </a>
            </LinksContainer>
          </InfoContainer>
          <ImageLink rel="noreferrer" target="_blank" href={demoLink}>
            <ImageLoader
              src={src}
              maxWidth="600px"
              justifySelf="flex-end"
              borderRadius="12px"
              transition="opacity 0.7s, transform 0.75s"
            />
          </ImageLink>
        </SubContainer>
      </SectionContainer>
    </Outer>
  );
};

const Outer = styled.div`
  width: 100%;
`;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 450px;
  padding: 10px 75px;
  box-sizing: border-box;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.portfolio.background};
  border: ${({ theme }) => theme.portfolio.border};
  opacity: 1;
  @media only screen and (max-width: 1050px) {
    padding: 80px 30px;
    height: fit-content;
    align-items: center;
  }
  @media only screen and (max-width: 850px) {
    padding: 0px;
    padding-bottom: 55px;
    background-color: transparent;
    border: none;
    border-radius: 0px;
    border-bottom: 1px solid rgb(59, 59, 59);
  }
`;

const SubContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  column-gap: 50px;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 1050px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 80px;
    margin: 0;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const PortfolioHeader = styled.h3`
  font-size: 5rem;
  font-family: 'cyrMed';
  @media only screen and (max-width: 1050px) {
    font-size: 4rem;
  }
`;

const SubHeader = styled.p`
  font-size: 1.4rem;
  font-weight: bold;
  text-transform: uppercase;
  margin-top: 10px;
`;

const Description = styled.p`
  margin-top: 25px;
  line-height: 2.8rem;
  font-size: 1.6rem;
  font-family: ${({ theme }) => theme.main.fontFamily.primary};
`;

//@ Buttons

const LinksContainer = styled.div`
  display: flex;
  margin: 25px 0;
  gap: 20px;
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

const Button = styled.button`
  width: fit-content;
  padding: 10px 30px;
  border-radius: 13px;
  background-color: transparent;
  color: ${({ theme }) => theme.main.fonts.primary};
  border: ${({ theme }) => theme.portfolio.buttons.border};
  transition: color 0.25s;
  font-size: 1.3rem;
  cursor: pointer;
  transition: box-shadow 0.25s;
  &:hover {
    /* background: -webkit-linear-gradient(45deg, #d85566 0, #7451af, #283b8d);
    color: white; */
    box-shadow: 0px 0px 15px rgba(138, 138, 138, 0.5);
    background-size: 100% 400%;
    animation: ${gradientMove} 2s ease infinite alternate;
  }
`;

const LiveButton = styled(Button)`
  background-color: ${({ theme }) => theme.portfolio.buttons.live.background};
  color: ${({ theme }) => theme.portfolio.buttons.live.color};
`;

//@ Image

const ImageLink = styled.a`
  display: flex;
  width: 100%;
  max-width: 600px;
  justify-self: flex-end;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  cursor: pointer;
  div {
    overflow: hidden;
    img {
      &:hover {
        transform: scale(1.05);
      }
    }
  }
`;

export default PortfolioSection;
