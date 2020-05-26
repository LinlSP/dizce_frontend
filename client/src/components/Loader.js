import React from 'react'
// import { createPortal } from 'react-dom'
// import { Context } from '../Context'

/// //////////////////Resources & Components
import logoSrc from '../assets/logo.svg'
/// //////////////////Styles
import { Container, LoaderIcon, LoaderText } from '../styles/components/StyleLoader'

/// //////////////////Self

export const Loader = () => {
  // const { loader } = useContext(Context)

  /// //////////////////
  // if (!loader) return null
  return(
    <Container>
      <LoaderIcon src={logoSrc} />
      <LoaderText>
        Dizce
      </LoaderText>
    </Container>
  )
  // return createPortal(<>
  // </>, document.getElementById('Loader'))
}
