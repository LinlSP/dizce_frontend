import styled from "styled-components";
import { Link } from "@reach/router";
import { vh } from "../index";

const Container = styled.div`
  padding-bottom: ${10 * vh}px;
`;

const ConfigDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${10 * vh}px;
`;

const BackButton = styled(Link)`
  height: ${8 * vh}px;
  width: ${4.5 * vh}px;
  margin-right: ${1.5 * vh}px;
  transition: 1s all ease;
  display: flex;
  &:hover {
    cursor: pointer;
    filter: invert(0.3);
  }
`;

const LanguageContainer = styled.div`
  width: 80%;
  word-break: break-word;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
const SelectLabel = styled.div`
  color: black;
  font-size: ${2.5 * vh}px;
  font-weight: 350;
`;
const LanguageSelect = styled.select`
  color: black;
  font-size: ${2.5 * vh}px;
  font-weight: bold;
`;
const Language = styled.option`
  color: black;
  font-size: ${3 * vh}px;
  font-weight: bold;
`;
const Filters = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;

const Filter = styled.button`
  padding: ${1 * vh}px ${2 * vh}px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${2 * vh}px;
  background-color: black;
  border-radius: ${3 * vh}px;
  color: white;
  transition: 0.5s all ease;
  margin: ${1 * vh}px ${0.5 * vh}px;
  &:hover {
    cursor: pointer;
  }
  ${(props) => {
    const { color, on, disabled } = props;
    return `
    ${disabled ? "opacity:.6;" : ""}
    ${on ? "transform:scale(1.1);" : ""}
    border:${0.5 * vh}px solid ${color};
  `;
  }}
`;

const FilterImg = styled.img`
  height: 100%;
  margin-right: ${1 * vh}px;
`;

export {
  Container,
  ConfigDiv,
  SelectLabel,
  BackButton,
  LanguageContainer,
  LanguageSelect,
  Language,
  Filters,
  FilterImg,
  Filter,
};
