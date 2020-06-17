import React from "react";
/// /////////////////////////////////////////////////////////////////////////////////Styles
import { Text, BrokenLogo } from "./styles";
import { ContentContainerGlobal } from "../../styles/global/Globalstyles";

/// /////////////////////////////////////////////////////////////////////////////////Resources and Components
import brokenLogo from "../../assets/brokenLogo.svg";
import { useDisableHeader } from "../../customHooks/useDisableHeader";
import { useReturnToMenu } from "../../customHooks/useReturnToMenu";
import { useInjectText } from "../../customHooks/useInjectText";

/// /////////////////////////////////////////////////////////////////////////////////Self

export const NotFound = () => {
  const selfName = "notfound";
  ///////////////////onMount hooks
  useReturnToMenu();
  useDisableHeader();
  const textData = useInjectText(selfName);

  /// ///////////////PAGE
  const { message } = textData;

  return (
    <>
      <ContentContainerGlobal
        bgcolor="rgba(93,193,185,1)"
        flex
        justify="center"
        align="center"
        extra="min-height: 100vh;"
      >
        <Text>
          <BrokenLogo src={brokenLogo} height="100%" alt="" />
          {message}
        </Text>
      </ContentContainerGlobal>
    </>
  );
};
