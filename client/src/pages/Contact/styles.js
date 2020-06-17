import styled from "styled-components";

/// setting the height
const windowWidth = window.innerWidth;

var defaultVh = 684;
if (windowWidth > 350 && windowWidth < 1701) {
  defaultVh = 784;
} else if (windowWidth > 1700) {
  defaultVh = window.innerHeight;
}

var vh = defaultVh * 0.01;

const screenHeight = window.innerHeight * 0.01;
///
const PlaceHolder = styled.div`
  height: ${95 * screenHeight}px;
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
  opacity: 0.8;
  transition: 1s all ease;
  &:hover {
    opacity: 1;
    cursor: pointer;
  }
  ${(props) => {
    props.on ? `font-size : ${4 * vh} px;` : ``;
  }}
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
  opacity: 0.8;
  transition: 1s all ease;
  filter: invert(1);
  &:hover {
    opacity: 1;
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
  font-size: ${4 * vh}px;
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
