import styled from "styled-components";
import { Link } from "@reach/router";
import { vh } from "../../styles/global/Height";

export const PlaceHolder = styled.div`
  background: black;
  height: ${11 * vh}px;
`;
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

export const LinkIcon = styled.a`
  height: 100%;
  display: flex;
`;
