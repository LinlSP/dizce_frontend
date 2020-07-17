import React from "react";
import styled from "styled-components";
import { useInjectText } from "../../../customHooks/useInjectText";
import { vh } from "../styles";
import errorSrc from "../../../assets/error.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Icon = styled.img`
  height: ${8 * vh}px;
  margin-bottom: ${2 * vh}px;
  filter: invert(1);
`;
const Text = styled.div`
  font-size: ${3 * vh};
  color: black;
`;

export const Error = () => {
  const selfName = "error";
  const textData = useInjectText(selfName);

  if (textData === "") return <></>;
  const { message } = textData;

  return (
    <Container>
      <Icon src={errorSrc} />
      <Text>{message}</Text>
    </Container>
  );
};
