import styled from "styled-components";
import { vh, screenHeight } from "../index";

export const Container = styled.div`
  height: ${30 * vh}px;
  display: flex;
  align-items: flex-end;
  width: 90%;
  box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
  border: 5px solid rgba(223, 225, 229, 0);
  overflow: hidden;
  transition: height 1s ease;
  ${(props) => (props.loaded ? `height: ${props.newHeight}` : "")}
`;

export const SubContainer = styled.div`
  justify-content: space-evenly;
  display: flex;
  flex-wrap: wrap;
  padding: ${4 * vh}px 0;
  width: 100%;
`;

export const Item = styled.div`
  height: ${20 * vh}px;
  width: ${30 * vh}px;
  border: ${1 * vh}px solid black;
  border-radius: ${0.5 * vh}px;
  margin: ${2 * vh}px ${1 * vh}px;
`;
