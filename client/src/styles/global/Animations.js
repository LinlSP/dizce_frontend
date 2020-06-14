import { css, keyframes } from "styled-components";

const BounceKF = keyframes`
0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
`;

const TheFadeIn = keyframes`
  0%{
    opacity:0;
  }100%{
    opacity: 1;
  }
`;
const TheSlideLeft = keyframes`
    0% {
      transform: translateX(-100vw);
    }
    100% {
      transform: translateX(0);
    }
`;
const TheSlideRight = keyframes`
    0% {
      transform: translateX(100vw);
    }
    100% {
      transform: translateX(0);
    }
`;

export const Bounce = ({ time = "1s", type = "ease" } = {}) =>
  css`
    animation: ${time} ${BounceKF} ${type};
  `;
export const FadeIn = ({ time = "1s", type = "ease" } = {}) =>
  css`
    animation: ${time} ${TheFadeIn} ${type};
  `;
export const SlideLeft = ({ time = "1s", type = "ease" } = {}) =>
  css`
    animation: ${time} ${TheSlideLeft} ${type};
  `;
export const SlideRight = ({ time = "1s", type = "ease" } = {}) =>
  css`
    animation: ${time} ${TheSlideRight} ${type};
  `;
