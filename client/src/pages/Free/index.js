import React from 'react'
/// /////////////////////////////////////////////////////////////////////////////////Styles
import {
  Container
  // PlaceHolder,
  // PreferencesZone,
  // BackButton,
  // ItemsSrc,
  // FiltersZone,
  // SeparatingLine,
  // ResultZone,
  // Item,
  // ItemImg,
  // ItemTitle,
  // ItemDescription
} from './styles'
/// /////////////////////////////////////////////////////////////////////////////////Resources and Components
import { useEnableHeader } from '../../customHooks/useEnableHeader'
// import backButton from "../../assets/backIcon.svg";

/// /////////////////////////////////////////////////////////////////////////////////Self
export const Free = () => {
  // const selfName = "free";
  /// ////////////////onMount hooks
  useEnableHeader()
  /// ////////////////Page

  return (
    <div style={{ background: 'rgba(198, 235, 239, 1)' }}>
      <Container>fere</Container>
    </div>
  )
}
