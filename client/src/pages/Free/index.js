import React, { useState } from "react";
import styled from "styled-components";
/// /////////////////////////////////////////////////////////////////////////////////Resources and Components
import { useEnableHeader } from "../../customHooks/useEnableHeader";
import { useInjectText } from "../../customHooks/useInjectText";

import { vh, screenHeight } from "../../styles/global/Height";
export { vh, screenHeight };

import { Preferences } from "./Preferences";
import { Results } from "./Results";
/////////////////////////////////////////////////////////////////////////////////////Styles
const TotalContainer = styled.div`
  background: rgba(198, 235, 239, 1);
  min-height: 95vh;
  @media (pointer: none), (pointer: coarse) {
    min-height: ${95 * screenHeight}px;
  }
`;

/// /////////////////////////////////////////////////////////////////////////////////Self
export const Free = () => {
  const [loadingResult, setLoadingResult] = useState(false);
  const selfName = "free";

  /// ////////////////onMount hooks
  useEnableHeader();
  const textData = useInjectText(selfName);
  /// ////////////////Page
  if (textData === "") return <TotalContainer />;

  return (
    <TotalContainer>
      <Preferences
        {...textData}
        loading={loadingResult}
        setLoading={setLoadingResult}
      />
      <Results loading={loadingResult} setLoading={setLoadingResult} />
    </TotalContainer>
  );
};
