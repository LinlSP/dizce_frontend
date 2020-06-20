import React from 'react'

/// /////////////////////////////////////////////////////////////////////////////////Styles
import {
  ContentContainerGlobal,
  BigContainerGlobal
} from '../../styles/global/Globalstyles'
/// /////////////////////////////////////////////////////////////////////////////////Resources and Components
import { Loader } from '../../components/Loader'

import { useInjectText } from '../../customHooks/useInjectText'
import { useDisableHeader } from '../../customHooks/useDisableHeader'

import { MainScreen } from './MainScreen'
import { Slider } from './Slider'
import { OurFocus } from './OurFocus'
import { Furthermore } from './Furthermore'

/// /////////////////////////////////////////////////////////////////////////////////Self

export const Home = () => {
  const selfName = 'home'
  const imagesSrcUrl =
    'https://res.cloudinary.com/d1zc3/image/upload/v1590540428/All/Home'
  const defaultbgcolor = 'rgba(93,193,185,1)'
  const secondarybgcolor = 'rgba(239,239,239,1)'

  /// ////////////////onMount hooks
  useDisableHeader()
  const textData = useInjectText(selfName)

  /// ///////////////PAGE

  if (textData === '') return <Loader />

  const {
    maintitle,
    sidepanel,
    questions,
    titles,
    focus,
    furthermore
  } = textData
  return (
    <>
      {/* ///////////////////////////////////////////////////////////////////////////// */}
      <MainScreen
        {...maintitle}
        sidepanel={sidepanel}
        defaultbgcolor={defaultbgcolor}
        ContentContainerGlobal={ContentContainerGlobal}
        BigContainerGlobal={BigContainerGlobal}
      />
      {/* ///////////////////////////////////////////////////////////////////////////// */}
      <Slider
        imagesSrcUrl={imagesSrcUrl}
        questions={questions}
        defaultbgcolor={defaultbgcolor}
        secondarybgcolor={secondarybgcolor}
        ContentContainerGlobal={ContentContainerGlobal}
        BigContainerGlobal={BigContainerGlobal}
      />
      {/* ///////////////////////////////////////////////////////////////////////////// */}
      <OurFocus
        focus={focus}
        secondarybgcolor={secondarybgcolor}
        ContentContainerGlobal={ContentContainerGlobal}
        BigContainerGlobal={BigContainerGlobal}
        titles={titles}
      />
      {/* ///////////////////////////////////////////////////////////////////////////// */}
      <Furthermore
        titles={titles}
        furthermore={furthermore}
        imagesSrcUrl={imagesSrcUrl}
        ContentContainerGlobal={ContentContainerGlobal}
        BigContainerGlobal={BigContainerGlobal}
      />
    </>
  )
}
