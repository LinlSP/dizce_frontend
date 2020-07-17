import styled from "styled-components";
import { vh, screenHeight } from "../../styles/global/Height";
import { FadeIn } from "../../styles/global/Animations";
export { vh };

export const TotalContainer = styled.div`
  position: fixed;
  overflow-y: scroll;
  z-index: 4;
  height: 100vh;

  width: 100vw;
  background: rgba(0, 0, 0, 0.4);
  ${FadeIn({ time: ".5s" })}
`;

export const ModalContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Modal = styled.div`
  position: relative;
  width: 95%;
  /* height: ${(props) =>
    props.height ? props.height : `${70 * screenHeight}px`}; */
  height: 80vh;
  background: transparent;
  border-radius: ${1 * vh}px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) => props.extra}
`;
export const CloseX = styled.div`
  font-size: ${5 * vh}px;
  margin-right: ${2 * vh}px;
  font-weight: bold;
  background: transparent;
  position: absolute;
  top: 0;
  right: 0;
  color: white;
  &:hover {
    cursor: pointer;
  }
`;
