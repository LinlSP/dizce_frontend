import React, { useContext } from 'react'
import { Router } from '@reach/router'

/// //////////////////Archives
import { Language } from './pages/Language'
import { Home } from './pages/Home'
import { Context } from './Context'
import {Footer} from './components/Footer'

/// //////////////////Styled components
import { Globalstyles } from './styles/global/Globalstyles'

const languages = ['spanish', 'english', 'german']
/// /////////////////App
export const App = () => {
  const { isLanguage } = useContext(Context)
  console.log(isLanguage)
  if (languages.includes(isLanguage)) {
    return (
      <>
        <Globalstyles />
        <Router>
          <Home path='/' />
        </Router>
        <Footer/>
      </>
    )
  } else {
    return (
      <>
        <Globalstyles />
        <Router>
          <Language path='/' />
          {/* add the redirects with the rest of the routes */}
        </Router>
        <Footer/>
      </>
    )
  }
}
