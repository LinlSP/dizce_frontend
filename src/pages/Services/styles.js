import styled from "styled-components";
import { Link } from "@reach/router";
import { vh, screenHeight } from "../../styles/global/Height";

const PlaceHolder = styled.div`
  height: 95vh;
  ${(props) => `
        background: url(${props.bg}) no-repeat center;
        background-size: cover;
    `}
  @media (pointer: none), (pointer: coarse) {
    height: ${95 * screenHeight}px;
  }
`;

const Container = styled.div`
  min-height: 95vh;
  height: ${85 * vh}px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  @media only screen and (min-width: 993px) {
    flex-direction: row;
  }

  @media only screen and (min-width: 1701px) {
    flex-direction: column;
  }
  @media (pointer: none), (pointer: coarse) {
    min-height: ${95 * screenHeight}px;
    height: auto;
  }
`;
const OptionBox = styled(Link)`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${28.5 * vh}px;
  background: ${(props) => `url(${props.bg}) no-repeat center`};
  background-size: cover;
  border: 3px solid rgba(0, 0, 0, 1);
  transition: 0.5s all ease;
  padding: ${1 * vh}px;
  border-radius: 5px;
  margin: ${2 * vh}px 0;
  &:hover {
    border-color: rgba(255, 255, 255, 1);
    transform: scale(1.05);
    cursor: pointer;
    text-decoration: none;
    overflow: hidden;
  }
  @media only screen and (min-width: 993px) {
    width: 30%;
    height: 70%;
  }
  @media only screen and (min-width: 1701px) {
    width: 100%;
    height: 30%;
  }
  ${(props) =>
    props.available
      ? ""
      : `
        opacity:.5;
        &:hover{
            cursor: context-menu;
        }
    `}
`;
const Title = styled.div`
  font-size: ${4 * vh}px;
  margin-bottom: ${1 * vh}px;
  font-weight: bold;
  padding: 0 2%;
  border-radius: 5px;
  ${(props) => `
        color: ${props.color};
        background: ${props.bgcolor}; 
    `}
`;
const SubTitle = styled.div`
  font-weight: 400;
  font-size: ${2 * vh}px;
  text-align: center;
  padding: 0 2%;
  border-radius: 5px;

  ${(props) => `
        color: ${props.color};
        background: ${props.bgcolor}; 
    `}
`;

export { Container, PlaceHolder, OptionBox, Title, SubTitle };
