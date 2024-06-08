import { CSSProperties, FunctionComponent } from 'react';
import styled, { keyframes } from 'styled-components';

const arrowSize = 18;
const arrowAnimationSpeed = 3;

const arrowsAnimation = keyframes`
    0% {
        border-left: ${arrowSize / 4.5}px solid rgba(255, 255, 255,0);
        border-bottom: ${arrowSize / 4.5}px solid rgba(255, 255, 255,0);
        transform: translate(0,${(arrowSize * -4) / 6}px)rotate(-45deg) ;
    }
    10%, 90% {
        border-left: ${arrowSize / 4.5}px solid rgba(255, 255, 255,0);
        border-bottom: ${arrowSize / 4.5}px solid rgba(255, 255, 255,0);
    }
    50% {
        border-left: ${arrowSize / 4.5}px solid rgba(255, 255, 255, 1);
        border-bottom: ${arrowSize / 4.5}px solid rgba(255, 255, 255, 1);
        transform: translate(0,0px)rotate(-45deg) ;
    }
    100% {
        border-left: ${arrowSize / 4.5}px solid rgba(255, 255, 255,0);
        border-bottom: ${arrowSize / 4.5}px solid rgba(255, 255, 255,0);
        transform: translate(0,${(arrowSize * 4) / 6}px)rotate(-45deg) ;
    }
`;

const Container = styled.div`
  display: block;
  pointer-events: none;
`;

const Arrows = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  width: ${arrowSize}px;
  height: ${arrowSize}px;
  transform: translate(-50%);
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-left: ${arrowSize / 4.5}px solid rgba(255, 255, 255, 1);
    border-bottom: ${arrowSize / 4.5}px solid rgba(255, 255, 255, 1);
    transform: translate(${arrowSize / 3}px, ${(arrowSize * 4) / 3}px)
      rotate(-45deg);
    animation: ${arrowsAnimation} ${arrowAnimationSpeed}s linear infinite;
  }
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-left: ${arrowSize / 4.5}px solid rgba(255, 255, 255, 1);
    border-bottom: ${arrowSize / 4.5}px solid rgba(255, 255, 255, 1);
    transform: translate(${(arrowSize * 2) / 3}px, 0px) rotate(-45deg);
    animation: ${arrowsAnimation} ${arrowAnimationSpeed}s linear infinite
      ${arrowAnimationSpeed / -2}s;
  }
`;

type Props = {
  containerStyle?: CSSProperties;
};

const ScrollPrompt: FunctionComponent<Props> = ({ containerStyle }) => (
  <Container
    style={{
      ...containerStyle,
    }}
  >
    <Arrows />
  </Container>
);

export default ScrollPrompt;
