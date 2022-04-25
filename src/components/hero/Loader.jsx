import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useProgress } from '@react-three/drei';
import styled from 'styled-components';
const defaultDataInterpolation = (p) => `Loading ${p.toFixed(2)}%`;

const Loader = ({
  containerStyles,
  innerStyles,
  barStyles,
  dataStyles,
  dataInterpolation = defaultDataInterpolation,
  initialState = (active) => active,
}) => {
  const { active, progress } = useProgress();
  const progressRef = React.useRef(0);
  const rafRef = React.useRef(0);
  const progressSpanRef = React.useRef(null);
  const [shown, setShown] = React.useState(initialState(active));

  React.useEffect(() => {
    let t;
    if (active !== shown) t = setTimeout(() => setShown(active), 300);
    return () => clearTimeout(t);
  }, [shown, active]);

  const updateProgress = React.useCallback(() => {
    if (!progressSpanRef.current) return;
    progressRef.current += (progress - progressRef.current) / 2;
    if (progressRef.current > 0.95 * progress || progress === 100)
      progressRef.current = progress;
    progressSpanRef.current.innerText = dataInterpolation(progressRef.current);
    if (progressRef.current < progress)
      rafRef.current = requestAnimationFrame(updateProgress);
  }, [dataInterpolation, progress]);

  React.useEffect(() => {
    updateProgress();
    return () => cancelAnimationFrame(rafRef.current);
  }, [updateProgress]);

  return /*#__PURE__*/ React.createElement(
    'div',
    {
      style: {
        ...styles.container,
        opacity: active ? 1 : 0,
        ...containerStyles,
      },
    },
    /*#__PURE__*/ React.createElement(
      'div',
      null,
      /*#__PURE__*/ React.createElement(
        'div',
        {
          style: { ...styles.inner, ...innerStyles },
        },
        /* Bar */
        React.createElement(
          'div',
          {
            style: {
              ...styles.barContainer,
            },
          },
          /*#__PURE__*/ React.createElement('div', {
            style: {
              ...styles.bar,
              transform: `scaleX(${progress / 100})`,
              ...barStyles,
            },
          }),
          /*#__PURE__*/ React.createElement('div', {
            style: {
              ...styles.barBlur,
              transform: `scaleX(${progress / 100})`,
              ...barStyles,
            },
          })
        ),
        /*#__PURE__*/ React.createElement('span', {
          ref: progressSpanRef,
          style: { ...styles.data, ...dataStyles },
        })
      )
    )
  );
};

const styles = {
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: '#171717',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'opacity 1s 1s ease',
    zIndex: 1000,
    pointerEvents: 'none',
  },
  inner: {
    width: 100,
    height: 3,
    background: '#272727',
    textAlign: 'center',
  },
  barContainer: {
    position: 'relative',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bar: {
    height: 3,
    width: '100%',
    background: 'white',
    transition: 'transform 1s',
    transformOrigin: 'left center',
    position: 'absolute',
  },
  barBlur: {
    height: 3,
    width: '100%',
    background: 'white',
    filter: 'blur(5px)',
    transition: 'transform 1s',
    transformOrigin: 'left center',
    position: 'absolute',
  },
  data: {
    display: 'inline-block',
    position: 'relative',
    fontVariantNumeric: 'tabular-nums',
    marginTop: '0.8em',
    color: '#f0f0f0',
    fontSize: '0.6em',
    fontFamily: `-apple-system, BlinkMacSystemFont, "Inter", "Segoe UI", "Helvetica Neue", Helvetica, Arial, Roboto, Ubuntu, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    whiteSpace: 'nowrap',
  },
};

const StyledLoader = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 100;
  top: 0;
  left: 0;
  opacity: ${({ progress }) => (progress === 100 ? 0 : 1)};
  transition: opacity 1s 1s ease-in-out;
  pointer-events: none;
  gap: 20px;
`;

const LoadingBarContainer = styled.div`
  display: flex;
  position: relative;
  width: 20vw;
  height: 3px;
  max-width: 500px;
  min-width: 100px;
`;

//prettier-ignore
const LoadingBar = styled.div`
  background-color: white;
  height: 3px;
  border-radius: 3px;
  width: 100%;
  position: absolute;
  transform: scaleX(${({progress}) => progress / 100});
`

const LoadingBarBlur = styled(LoadingBar)`
  position: absolute;
  filter: blur(5px);
`;

const LoadingText = styled.div`
  color: ${({ theme }) => theme.main.fonts.primary};
  font-family: ${({ theme }) => theme.main.fontFamily.med};
`;

export default Loader;
