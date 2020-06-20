import React from "react";
/// /////////////////////////////////////////////////////////////////////////////////Resources and Components
import { useEnableHeader } from "../../customHooks/useEnableHeader";
import { useInjectText } from "../../customHooks/useInjectText";
import { vh, screenHeight } from "../../styles/global/Height";
export { vh, screenHeight };

/// /////////////////////////////////////////////////////////////////////////////////Self
export const Free = () => {
  const selfName = "free";
  /// ////////////////onMount hooks
  const textData = useInjectText(selfName);
  useEnableHeader();
  /// ////////////////Page
  if (textData === "") return <></>;

  const {
    contentOrigin,
    availableLanguages,
    availableLanguagesForPetition,
    filters,
  } = textData;

  return <div style={{ background: "rgba(198, 235, 239, 1)" }}></div>;
};
