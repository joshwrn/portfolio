import React, { useState } from 'react';
import styled from 'styled-components';

const ImageLoader = ({
  src,
  position = 'relative',
  width = '100%',
  maxWidth = 'initial',
  justifySelf = 'initial',
  height = '100%',
  transition = `opacity 0.7s`,
  cursor = 'pointer',
  borderRadius = '0',
  shadow = 'none',
  zIndex = '1',
}) => {
  const [loading, setLoading] = useState('true');

  const handleLoad = () => {
    setLoading('false');
  };

  return (
    <LoadingDiv zIndex={zIndex} loading={loading} borderRadius={borderRadius}>
      <StyledImage
        src={src}
        onLoad={handleLoad}
        alt="img"
        position={position}
        width={width}
        height={height}
        cursor={cursor}
        transition={transition}
        borderRadius={borderRadius}
        shadow={shadow}
        maxWidth={maxWidth}
        justifySelf={justifySelf}
        loading={loading}
      />
      <Blur
        src={src}
        alt="blur"
        borderRadius={borderRadius}
        loading={loading}
      />
    </LoadingDiv>
  );
};

const StyledImage = styled.img`
  position: ${({ position }) => position};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  object-fit: cover;
  object-position: center;
  cursor: ${({ cursor }) => cursor};
  opacity: ${({ loading }) => (loading === 'true' ? '0' : '1')};
  transition: ${({ transition }) => transition};
  border-radius: ${({ borderRadius }) => borderRadius};
  box-shadow: ${({ shadow }) => shadow};
  max-width: ${({ maxWidth }) => maxWidth};
  justify-self: ${({ justifySelf }) => justifySelf};
`;

const Blur = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: ${({ borderRadius }) => borderRadius};
  opacity: ${({ loading }) => (loading === 'true' ? '0' : '0.8')};
  transition: opacity 0.5s 0.5s, filter 0.5s;
  filter: blur(45px);
  z-index: -1;
  -webkit-backface-visibility: hidden;
  -webkit-transform: translateZ(0) scale(1, 1);
  backface-visibility: hidden;
  transform: translateZ(0) scale(1, 1);
  @media only screen and (max-width: 1050px) {
    filter: blur(25px);
  }
`;

const LoadingDiv = styled.div`
  position: relative;
  border-radius: ${({ borderRadius }) => borderRadius};
  z-index: ${({ zIndex }) => zIndex};
  background: linear-gradient(to right, #000000, #353535);
  background-size: 200%;
  animation: ${({ loading }) =>
    loading === 'true' ? '2s linear infinite gradientMove' : 'none'};
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    ${Blur} {
      filter: blur(25px);
    }
  }
`;

export default ImageLoader;
