import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
  position: fixed;
  z-index: +1;
  background-color: black;
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const animationOrigin = ' transform-origin: bottom left;'

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
`

export const LoaderIcon = styled.img`
  position: relative;

  left: 1vw;

  height: 8vw;
    animation: ${Rotating} 2s infinite;
`
export const LoaderText = styled.div`
  position: relative;
  top: 8vw;
  font-size: 5vw;
  letter-spacing: 4vw;
  color: white;
`
