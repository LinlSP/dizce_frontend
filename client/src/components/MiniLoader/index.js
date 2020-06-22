import React from "react";
import { Container, LoaderIcon, LoaderText, LoaderWrapper } from "./styles";
import logoSrc from "../../assets/logo.svg";

export const MiniLoader = ({ color }) => {
  return (
    <Container>
      <LoaderIcon src={logoSrc} />
    </Container>
  );
};
