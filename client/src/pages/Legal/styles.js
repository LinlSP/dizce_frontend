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
  background: rgba(198, 235, 239, 1);
  height: ${95 * screenHeight}px;
`;

const Container = styled.div`
  min-height: 95vh;
  padding: ${3 * vh}px 0;
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
