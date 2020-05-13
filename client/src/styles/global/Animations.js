import {css,keyframes} from 'styled-components'

const BounceKF = keyframes`
0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
`

const TheFadeIn = keyframes`
  0%{
    opacity:0;
  }100%{
    opacity: 1;
  }
`
const TheSlide = keyframes`
    0% {
      transform: translateX(-60vw);
    }
    100% {
      transform: translateX(0);
    }
`

export const Bounce = ({time='1s', type='ease'}={}) =>
  css`
    animation: ${time} ${BounceKF} ${type};
  `
export const FadeIn = ({time='1s', type='ease'}={}) =>
  css`
    animation: ${time} ${TheFadeIn} ${type};
  `
export const Slide = ({time='1s', type='ease'}={}) =>
  css`
    animation: ${time} ${TheSlide} ${type};
  `