import styled from "styled-components";
import { vh, screenHeight } from "../index";

export const Container = styled.div`
  height: ${30 * vh}px;
  display: flex;
  align-items: flex-end;
  width: 90%;
  box-shadow: 0 ${0.2 * vh}px ${1 * vh}px 0 rgba(32, 33, 36, 0.28);
  border: ${1 * vh}px solid rgba(223, 225, 229, 0);
  overflow: hidden;
  transition: height 0.5s ease;
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
  padding: ${1 * vh}px;
  width: ${30 * vh}px;
  border: ${0.2 * vh}px solid white;
  border-radius: ${0.5 * vh}px;
  margin: ${2 * vh}px ${1 * vh}px;
  transition: 0.5s all ease;
  background: black;

  &:hover {
    cursor: pointer;
    border: ${0.2 * vh}px solid red;
  }
`;

export const ItemLogo = styled.div`
  background: url(${(props) => props.src}) no-repeat center;
  background-size: contain;
  height: ${10 * vh}px;
  width: 100%;
  margin-bottom: ${1 * vh}px;
  &:hover {
    cursor: pointer;
  }
`;
export const ItemName = styled.div`
  font-size: ${2 * vh}px;
  margin-bottom: ${0.5 * vh}px;
  text-transform: uppercase;
  text-align: center;
  color: white;
  &:hover {
    cursor: pointer;
  }
`;
export const ItemPhrase = styled.div`
  font-size: ${1.5 * vh}px;
  margin-bottom: ${0.5 * vh}px;

  color: white;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
`;

export const PreviewItem = styled.div`
  height: 85%;
  width: 90%;
  padding: ${1 * vh}px ${0.5 * vh}px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media only screen and (min-width: 992px) {
    flex-direction: row;
    width: 100%;
  }
  @media only screen and (min-width: 1701px) {
    flex-direction: column;
    width: 90%;
  }
`;

export const PreviewItemImg = styled.div`
  width: 100%;
  height: 45%;

  background: url(${(props) => props.src}) no-repeat center;
  background-size: contain;
  @media only screen and (min-width: 992px) {
    width: 45%;
    height: 100%;
  }
  @media only screen and (min-width: 1701px) {
    width: 100%;
    height: 45%;
  }
`;
export const PreviewItemText = styled.div`
  box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
  padding: ${1 * vh}px ${2 * vh}px;
  text-align: justify;
  overflow-y: scroll;
  width: 100%;
  height: 45%;
  background: rgba(255, 255, 255, 0.7);
  border-radius: ${1 * vh}px;

  font-size: ${2 * vh}px;
  @media only screen and (min-width: 992px) {
    width: 45%;
    height: 100%;
  }
  @media only screen and (min-width: 1701px) {
    width: 100%;
    height: 45%;
  }
`;

export const PreviewButton = styled.a`
  width: 90%;
  font-size: 4vh;

  height: 10%;
  border: ${0.5 * vh}px;
  background-color: black;
  border-radius: ${1 * vh}px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: ${5 * vh}px;
  &:hover {
    cursor: pointer;
    text-decoration: none;
    color: white;
  }
  @media only screen and (min-width: 992px) {
    font-size: ${3 * vh}px;
  }
  @media (pointer: none), (pointer: coarse) {
    font-size: ${3 * screenHeight}px;
  }
`;
