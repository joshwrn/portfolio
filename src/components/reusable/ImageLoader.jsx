import React, { useState } from 'react';

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
  const [loading, setLoading] = useState(true);

  const handleLoad = () => {
    setLoading(false);
  };

  const loadingDiv = {
    width,
    height,
    position,
    zIndex,
    background: 'linear-gradient(to right, #000000, #353535)',
    backgroundSize: '200%',
    animation: '2s linear infinite gradientMove',
    borderRadius,
    boxShadow: shadow,
    maxWidth,
    justifySelf,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const hideDiv = {
    width,
    height,
    position,
    zIndex,
    background: 'linear-gradient(to right, #000000, #353535)',
    backgroundSize: '200%',
    animation: 'none',
    display: 'flex',
    borderRadius,
    boxShadow: shadow,
    maxWidth,
    justifySelf,
    justifyContent: 'center',
    alignItems: 'center',
  };

  const image = {
    position,
    width,
    height,
    objectFit: 'cover',
    objectPosition: 'center',
    cursor,
    opacity: '1',
    transition,
    borderRadius,
    boxShadow: shadow,
    maxWidth,
    justifySelf,
  };

  const hideImg = {
    position,
    width,
    height,
    opacity: '0',
    borderRadius,
    maxWidth,
    justifySelf,
  };

  return (
    <>
      <div style={!loading ? hideDiv : loadingDiv}>
        <img
          style={!loading ? image : hideImg}
          onLoad={handleLoad}
          src={src}
          alt=""
        />
      </div>
    </>
  );
};

export default ImageLoader;