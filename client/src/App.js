import React, { useContext } from 'react'
import { Router, Redirect } from '@reach/router'

/// //////////////////Archives
import { SelectLanguage } from './pages/SelectLanguage'
import { Home } from './pages/Home'
import { Context } from './Context'
import { Footer } from './components/Footer'
import { Loader } from './components/Loader'
import { Resources } from './pages/Resources'
import { NotFound } from './pages/NotFound'
import { Error } from './pages/Error'

/// //////////////////Styled components
import { Globalstyles } from './styles/global/Globalstyles'

const languages = ['spanish', 'english', 'german']
/// /////////////////App
export const App = () => {
  const {error, isLanguage } = useContext(Context)
  if (error) return <Error/>
  if (languages.includes(isLanguage)) {
    return (<>
      <Globalstyles />
      <Loader />
      <Router>
        <Home path='/' />
        <Resources path='/resources' />
        <NotFound path='/*'/>
      </Router>
      <Footer />
    </>)
  }
  
  return (
    <>
      <Globalstyles />
      <Loader />
      <Router>
        <SelectLanguage path='/' />
        <Resources path='/resources' />
        <Redirect from='/*' to='/' default noThrow/>
      </Router>
      <Footer />
    </>
  )
}
