import React from 'react';

import ImageLoader from '../reusable/ImageLoader';

import { FiArrowUpRight } from 'react-icons/fi';

import styled from 'styled-components';

const PortfolioSection = ({
  header,
  sub,
  desc,
  src,
  tech,
  date,
  codeLink,
  demoLink,
}) => {
  return (
    <Outer>
      <SectionContainer>
        <SubContainer>
          <HeaderContainer>
            <PortfolioHeader>{header}</PortfolioHeader>
            <SubHeader>{sub}</SubHeader>
          </HeaderContainer>

          <MainContainer>
            <ImageLink rel="noreferrer" target="_blank" href={demoLink}>
              <ImageLoader
                src={src}
                justifySelf="flex-end"
                transition="opacity 0.7s, transform 0.75s"
                borderRadius="13px"
              />
            </ImageLink>

            <InfoSection>
              <DescriptionContainer>
                <DescriptionHeader>Summary</DescriptionHeader>
                <Description>{desc}</Description>
              </DescriptionContainer>

              <TopSection>
                <InfoContainer>
                  <InfoHeader>Technologies</InfoHeader>
                  <Info>{tech}</Info>
                </InfoContainer>
                <DateContainer>
                  <InfoHeader>Date</InfoHeader>
                  <Date>{date}</Date>
                </DateContainer>
              </TopSection>

              <LinksContainer>
                <a rel="noreferrer" target="_blank" href={demoLink}>
                  <Button>
                    <ButtonText>Live Preview</ButtonText>
                    <ArrowIcon size={27} />
                  </Button>
                </a>
                <a rel="noreferrer" target="_blank" href={codeLink}>
                  <Button>
                    <ButtonText>View Code</ButtonText>
                    <ArrowIcon size={27} />
                  </Button>
                </a>
              </LinksContainer>
            </InfoSection>
          </MainContainer>
          <Line />
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
  justify-content: flex-start;
  width: 100%;
  height: fit-content;
  box-sizing: border-box;

  @media only screen and (max-width: 1050px) {
    padding: 0px;
    background-color: transparent;
    border: none;
    border-radius: 0px;
    height: fit-content;
  }
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 70px;
  justify-content: center;
  align-items: flex-start;
  @media only screen and (max-width: 1050px) {
    display: flex;
    flex-direction: column;
    margin: 0;
    gap: 40px;
  }
`;

const TopSection = styled.div`
  display: flex;
  width: 100%;
  gap: 60px;
`;

// Header

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const PortfolioHeader = styled.h3`
  font-size: 5rem;
  font-family: ${({ theme }) => theme.main.fontFamily.bold};
  color: ${({ theme }) => theme.portfolio.fontColor.primary};
  @media only screen and (max-width: 1050px) {
    font-size: 4rem;
  }
`;

const SubHeader = styled.p`
  font-size: 2.4rem;
  font-family: ${({ theme }) => theme.main.fontFamily.med};
  color: ${({ theme }) => theme.portfolio.fontColor.secondary};
`;

// main

const MainContainer = styled.div`
  display: flex;
  gap: 40px;
  @media only screen and (max-width: 1050px) {
    flex-direction: column;
  }
`;

// Right Section

const InfoSection = styled.div`
  display: flex;
  flex: 5;
  flex-direction: column;
  gap: 60px;
`;

// Info

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 2px;
`;

const InfoHeader = styled.p`
  font-size: 2.4rem;
  color: ${({ theme }) => theme.portfolio.fontColor.primary};
`;

const Info = styled(InfoHeader)`
  font-family: ${({ theme }) => theme.main.fontFamily.light};
  font-size: 2.4rem;
  color: ${({ theme }) => theme.portfolio.fontColor.secondary};
`;

// Date

const DateContainer = styled(InfoContainer)`
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 10px;
`;

const Date = styled(Info)``;

// Summary

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 2px;
`;

const DescriptionHeader = styled.p`
  font-size: 3.2rem;
  font-family: ${({ theme }) => theme.main.fontFamily.med};
  color: ${({ theme }) => theme.portfolio.fontColor.primary};
`;

const Description = styled(Info)`
  line-height: 150%;
`;

//@ Buttons

const LinksContainer = styled.div`
  display: flex;
  gap: 60px;
`;

const ButtonText = styled.p`
  color: ${({ theme }) => theme.portfolio.fontColor.primary};
  font-size: 2rem;
  font-family: ${({ theme }) => theme.main.fontFamily.med};
  text-transform: uppercase;
  transition: text-shadow 0.5s;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: rgb(255, 255, 255, 0.64);
    transform: scaleX(0) translateY(31px);
    transform-origin: right;
    transition: transform 0.5s;
  }
`;

const ArrowIcon = styled(FiArrowUpRight)`
  transform: translateY(2px);
  transition: transform 0.75s;
`;

const Button = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  gap: 15px;
  justify-content: space-between;
  align-items: flex-end;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    ${ButtonText} {
      text-shadow: 0px 0px 10px rgb(170, 170, 170);
      ::after {
        transform: scaleX(1) translateY(31px);
        transform-origin: left;
      }
    }
  }
`;

//@ Image

const ImageLink = styled.a`
  display: flex;
  flex: 6;
  width: 100%;
  justify-self: flex-end;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  border-bottom: 1px solid ${({ theme }) => theme.portfolio.line};
`;

export default PortfolioSection;
