import styled from "styled-components";
import { vh } from "../../styles/global/Height";

export const Text = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  color: white;
  font-size: ${5 * vh}px;
  font-family: "Lato", sans-serif;
`;

export const Icon = styled.img`
  height: ${15 * vh}px;
`;
