import React from 'react'

/// /////////////////////////////////////////////////////////////////////////////////Styles
import { ContentContainerGlobal } from '../../styles/global/Globalstyles'
import { Text, Icon } from './styles'

/// /////////////////////////////////////////////////////////////////////////////////Resources and Components
import errorSrc from '../../assets/error.svg'
import { useDisableHeader } from '../../customHooks/useDisableHeader'
import { useReturnToMenu } from '../../customHooks/useReturnToMenu'
import { useInjectText } from '../../customHooks/useInjectText'

/// /////////////////////////////////////////////////////////////////////////////////Self

export const Error = () => {
  const selfName = 'error'
  /// ////////////////onMount hooks
  useReturnToMenu()
  useDisableHeader()
  const textData = useInjectText(selfName)

  /// ///////////////PAGE
  const { message } = textData

  return (
    <>
      <ContentContainerGlobal
        extra='min-height:100vh;'
        flex
        flexCol
        justify='center'
        align='center'
        bgcolor='black'
      >
        <Icon src={errorSrc} />
        <Text>{message}</Text>
      </ContentContainerGlobal>
    </>
  )
}
