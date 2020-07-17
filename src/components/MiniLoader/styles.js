import styled, { keyframes } from "styled-components";
import { vh } from "../../styles/global/Height";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const animationOrigin = " transform-origin: bottom left;";

const Rotating = keyframes`
 0% {
   ${animationOrigin}
  }
  25% {
    ${animationOrigin}
    transform: rotate(90deg);
  }
  50% {
    transform: rotate(180deg);
    ${animationOrigin}
  }
  75% {
    transform: rotate(270deg);
    ${animationOrigin}
  }
  100% {
    transform: rotate(360deg);
    ${animationOrigin}
  }
`;

export const LoaderIcon = styled.img`
  position: relative;
  left: ${4 * vh}px;
  top: -${11 * vh}px;
  height: ${8 * vh}px;
  animation: ${Rotating} 2s infinite;
`;
