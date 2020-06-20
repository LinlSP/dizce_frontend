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
  @media only screen and (max-width: 545px) {
    height: auto;
  }
  min-height: 95vh;
  height: ${85 * vh}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (pointer: none), (pointer: coarse) {
    min-height: ${95 * screenHeight}px;
    height: auto;
  }
`;

const MailButton = styled.div`
  margin-top: ${6 * vh}px;
  color: white;
  text-align: center;
  font-weight: 300;
  font-size: ${5 * vh}px;
  background: black;
  border-radius: 10px;
  padding: ${1 * vh}px ${2 * vh}px;
  transition: 1s all ease;
  word-wrap: break-word;

  &:hover {
    filter: invert(1);
    cursor: pointer;
    ${(props) => (props.on ? "filter: invert(0);" : "")}
  }
  ${(props) => (props.on ? `font-size : ${3 * vh}px;` : "")}
`;

const SocialMedia = styled.div`
  margin-top: ${6 * vh}px;
  margin-bottom: ${6 * vh}px;
  height: ${12 * vh}px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: white;
`;
const LinkIcon = styled.a`
  height: 100%;
  display: flex;
  transition: 1s all ease;
  filter: invert(1);
  &:hover {
    filter: invert(0.5);
    cursor: pointer;
  }
`;

const TheOr = styled.div`
  margin-top: ${6 * vh}px;
  font-size: ${6 * vh}px;
  color: black;
`;
const TheText = styled.div`
  color: black;
  font-size: ${3 * vh}px;
  text-align: center;
`;

export {
  PlaceHolder,
  Container,
  MailButton,
  SocialMedia,
  LinkIcon,
  TheOr,
  TheText,
};
