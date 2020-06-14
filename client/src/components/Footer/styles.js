import styled from "styled-components";
import { Link } from "@reach/router";
/// setting the height
const windowWidth = window.innerWidth;

var defaultVh = 684;
if (windowWidth > 350 && windowWidth < 1701) {
  defaultVh = 784;
} else if (windowWidth > 1700) {
  defaultVh = window.innerHeight;
}

var vh = defaultVh * 0.01;
///

export const SocialMedia = styled.div`
  width: 30%;
  height: 25%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
`;
export const Copyright = styled.div`
  display: flex;
  width: 30%;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: ${2 * vh}px;
  text-align: center;
  font-weight: normal;
`;
export const ResourcesText = styled.div`
  display: flex;
  width: 30%;
  justify-content: flex-end;
  align-items: center;
  text-align: center;
`;
export const RLink = styled(Link)`
  font-weight: normal;
  color: white;
  font-size: ${2 * vh}px;
`;

export const LinkIcon = styled(Link)`
  height: 100%;
  display: flex;
`;
