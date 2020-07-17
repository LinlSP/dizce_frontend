import styled from "styled-components";
import { Link } from "@reach/router";
import { vh } from "../../styles/global/Height";

const PlaceHolder = styled.div`
  background: rgba(0, 0, 0, 1);
  height: ${10 * vh}px;
`;

const Container = styled.div`
  background: rgba(0, 0, 0, 1);
  height: ${10 * vh}px;
  overflow-y: hidden;
  ${(props) => {
    if (props.activated === "links") return;
    if (props.activated === "languages") return;
    return "overflow-x: hidden";
  }}
`;
const LinksContainer = styled.div`
  width: 100%;
  height: ${10 * vh}px;
  transition: 1s all ease;
  transform: translateY(${-10 * vh}px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${(props) => {
    if (props.activated === "links") {
      return `transform: translateY(-${20 * vh}px);`;
    }
    if (props.activated === "languages") {
      return `transform: translateY(${20 * vh}px);`;
    }
    return "";
  }}
`;
const MenuLogoLink = styled(Link)`
  height: 50%;
  opacity: 0.8;
  transition: 0.5s all ease;
  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`;
const ChangeLang = styled.img`
  filter: invert(0.8);
  transition: 0.5s all ease;
  &:hover {
    filter: invert(1);
    cursor: pointer;
  }
`;

const Menu = styled.img`
  filter: invert(0.8);
  transition: 0.5s all ease;
  &:hover {
    cursor: pointer;
    filter: invert(1);
  }
`;

const LanguagesBox = styled.div`
  background: black;
  transition: 1s all ease;
  height: ${10 * vh}px;
  width: 100%;
  transform: translateY(${-10 * vh}px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${(props) => (props.on ? "transform: translateY(0);" : "")}
`;
const LangInBox = styled.div`
  white-space: nowrap;
  color: rgba(255, 255, 255, 0.8);
  display: flex;
  font-size: ${2.5 * vh}px;
  font-weight: 350;
  transition: 0.5s all ease;
  padding: ${1 * vh}px ${2 * vh}px;

  &:hover {
    color: white;
    text-decoration: none;
    cursor: pointer;
  }
  ${(props) => {
    if (props.thelanguage === props.currentlang) {
      return "color:white; font-weight: bold;";
    }
  }}
`;

const PagesMenuBox = styled.div`
  background: black;
  transition: 1s all ease;
  transform: translateY(${-10 * vh}px);

  height: ${10 * vh}px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${(props) => (props.on ? `transform: translateY(-${20 * vh}px);` : "")}
`;

const TitleInMenuBox = styled(Link)`
  white-space: nowrap;
  color: rgba(255, 255, 255, 0.8);
  display: flex;
  font-size: ${2.5 * vh}px;
  font-weight: 350;
  transition: 0.5s all ease;
  padding: ${1 * vh}px ${2 * vh}px;

  &:hover {
    color: white;
    text-decoration: none;
    cursor: pointer;
  }
  ${(props) => {
    if (props.theindex === props.page) {
      return "color:white; font-weight: bold;";
    }
  }}
`;

const BackBtnLinks = styled.img`
  height: 50%;
  transform: rotate(-90deg);
  &:hover {
    cursor: pointer;
  }
`;
const BackBtnLanguages = styled.img`
  height: 50%;
  transform: rotate(90deg);
  &:hover {
    cursor: pointer;
  }
`;

export {
  Container,
  LinksContainer,
  MenuLogoLink,
  ChangeLang,
  Menu,
  PagesMenuBox,
  TitleInMenuBox,
  BackBtnLinks,
  BackBtnLanguages,
  LanguagesBox,
  LangInBox,
  PlaceHolder,
};
