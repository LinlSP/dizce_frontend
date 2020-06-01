import React, { useContext } from 'react'
import { Router, Redirect } from '@reach/router'

/// //////////////////Archives
import { Context } from './Context'
import { Footer } from './components/Footer'
import { SelectLanguage } from './pages/SelectLanguage'
import { Home } from './pages/Home'
import { Resources } from './pages/Resources'
import { NotFound } from './pages/NotFound'
import { About } from './pages/About'
import { Error } from './pages/Error'

/// //////////////////Styled components
import { Globalstyles } from './styles/global/Globalstyles'

/// /////////////////App


export const App = () => {
  const {error, isLanguage, langToSave } = useContext(Context)
  if (error) return <><Globalstyles /><Error/></>
  if (langToSave.includes(isLanguage)) {
    return (<>
      <Globalstyles />
      <Router>
        <Home path='/' />
        <About path='/about'/>
        <Resources path='/resources'/>
        <NotFound path='/*'/>
      </Router>
      <Footer />
    </>)
  }
  
  return (
    <>
      <Globalstyles />
      <Router>
        <SelectLanguage path='/' />
        <Resources path='/resources' />
        <Redirect from='/*' to='/' default noThrow/>
      </Router>
      <Footer />
    </>
  )
}
