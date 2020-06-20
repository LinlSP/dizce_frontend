import styled from "styled-components";
import { vh, screenHeight } from "../../styles/global/Height";

const PlaceHolder = styled.div`
  background: rgba(198, 235, 239, 1);
  height: 95vh;
  @media (pointer: none), (pointer: coarse) {
    height: ${95 * screenHeight}px;
  }
`;

const Container = styled.div`
  min-height: 95vh;
  padding: ${3 * vh}px ${1 * vh}px;
  @media (pointer: none), (pointer: coarse) {
    min-height: ${95 * screenHeight}px;
  }
`;

const Term = styled.div`
  margin: ${3 * vh}px 0;
  color: black;
  font-size: ${2 * vh}px;
  text-align: justify;
`;
const Title = styled.div`
  font-weight: bold;
  color: black;
  font-size: ${4 * vh}px;
`;
const SeparatingLine = styled.hr`
  background: black;
  width: 100%;
  height: ${1 * vh}px;
`;
export { PlaceHolder, Container, Term, Title, SeparatingLine };
