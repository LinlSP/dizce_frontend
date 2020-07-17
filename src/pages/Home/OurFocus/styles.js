import styled from "styled-components";
import { vh } from "../index";

const FocusTitle = styled.div`
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${4 * vh}px;
`;
const FocusIcons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding-top: ${10 * vh}px;
  padding-bottom: ${10 * vh}px;
`;
const FIcon = styled.img`
  height: ${8 * vh}px;
  opacity: 0.4;
  transition: 1s all ease;

  ${(props) => {
    if (parseInt(props.id) === props.focusOn) {
      return `
  opacity:1;
  height: ${10 * vh}px;

  `;
    }
  }}
  &:hover {
    cursor: pointer;
  }
`;
const FocusDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-top: ${1 * vh}px solid black;
  border-bottom: ${1 * vh}px solid black;
`;
const DTitle = styled.div`
  font-size: ${6 * vh}px;
  font-weight: bold;
  margin-bottom: ${8 * vh}px;
  margin-top: ${4 * vh}px;
`;
const DSubtitle = styled.div`
  font-size: ${2.5 * vh}px;
  margin-bottom: ${4 * vh}px;
`;
const DPoints = styled.ul`
  font-size: ${2 * vh}px;
  margin-bottom: ${8 * vh}px;
`;
export {
  FocusTitle,
  FocusIcons,
  FIcon,
  FocusDescription,
  DTitle,
  DSubtitle,
  DPoints,
};
