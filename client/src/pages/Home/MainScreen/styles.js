import styled from "styled-components";
import { Link } from "@reach/router";
import { vh } from "../index";

const LogoSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${8 * vh}px;
  width: 100%;
  margin-bottom: ${1 * vh}px;
  margin-top: ${1 * vh}px;
`;

const BurgerMenu = styled.img`
  filter: invert(1);
  transition: 0.5s all ease;
  &:hover {
    filter: invert(0);
    cursor: pointer;
  }
  @media only screen and (min-width: 1200px) {
    display: none;
  }
`;
const SideMenu = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  background-color: rgba(0, 0, 0, 0.9);
  position: fixed;
  z-index: +1;
  transform: translateX(100vw);
  transition: 1s ease all;
  ${(props) => (props.on ? "transform:translateX(0);" : "")}
  @media only screen and (min-width: 1200px) {
    display: none;
  }
`;
const SideMenuLink = styled(Link)`
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: ${3 * vh}px;
  text-transform: uppercase;
  padding: ${2 * vh}px;
  transition: 0.5s all ease;
  &:hover {
    color: white;
    cursor: pointer;
    font-weight: bold;
    text-decoration: none;
  }
`;

const SideMenuButton = styled.img`
  height: 100%;
  transform: rotate(180deg);
  &:hover {
    cursor: pointer;
  }
`;

const UpperMenu = styled.div`
  @media only screen and (max-width: 1199px) {
    display: none;
  }
  display: flex;
  width: 50%;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;
const UpperLink = styled(Link)`
  color: white;
  transition: 0.5s all ease;
  font-size: ${2 * vh}px;

  &:hover {
    color: black;
    text-decoration: none;
  }
`;

const MainTitle = styled.div`
  margin-top: ${15 * vh}px;
  margin-bottom: ${15 * vh}px;
  display: flex;
  color: white;
  justify-content: center;
  font-size: ${6 * vh}px;
  font-weight: bold;
  flex-direction: column;
`;

const FirstLine = styled.div`
  color: white;
  display: flex;
  font-size: ${6 * vh}px;
  font-weight: bold;
`;

const LittleMainTitle = styled.div`
  color: white;
  margin-left: ${2 * vh}px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: white;
  font-size: ${3 * vh}px;
  font-weight: lighter;
`;
const MainButton = styled(Link)`
  background-color: black;
  color: white;
  border: black;
  border-radius: ${4 * vh}px;
  font-size: ${4 * vh}px;
  padding: 0 ${3 * vh}px;
  margin-bottom: ${15 * vh}px;
  font-weight: 300;
  transition: 0.5s all ease;
  &:hover {
    background-color: white;
    color: black;
    text-decoration: none;
  }
`;
const WorldIcon = styled.div`
  height: ${6 * vh}px;
  display: flex;
  width: 100%;
  justify-content: flex-start;
  margin-bottom: ${30 * vh}px;
`;
const WorldIconImage = styled.img`
  transition: 0.5s all ease;
  filter: invert(1);
  &:hover {
    cursor: pointer;
    filter: invert(0);
  }
`;

const SelectLangBox = styled.div`
  transform-origin: left top;
  position: absolute;
  transform: scale(0);
  transition: 0.5s all ease;
  margin-left: ${6 * vh}px;
  margin-top: ${3 * vh}px;
  opacity: 0;
  ${(props) => (props.on ? "transform:scale(1); opacity: 1;" : "")}
  overflow-y: scroll;
  height: ${17.5 * vh}px;
`;
const LangInBox = styled.div`
  padding: ${1 * vh}px ${2 * vh}px;
  font-size: ${2.6 * vh}px;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 1s all ease;
  &:hover {
    background-color: rgba(0, 0, 0, 1);
    cursor: pointer;
  }
`;

export {
  LogoSection,
  MainTitle,
  LittleMainTitle,
  WorldIcon,
  WorldIconImage,
  MainButton,
  BurgerMenu,
  FirstLine,
  UpperMenu,
  UpperLink,
  SideMenu,
  SideMenuLink,
  SideMenuButton,
  SelectLangBox,
  LangInBox,
};
