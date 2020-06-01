import React, { createContext, useState } from 'react'
export const Context = createContext()
import {Header as TheHeader} from './components/Header'

const Provider = ({ children }) => {
  const [isLanguage, setIsLanguage] = useState(window.localStorage.getItem('language'))
  const [globalStates, setglobalStates] = useState({
    loader: false,
    error: false
  })
  const languages = ['Español', 'English', 'Deutsch']
  const langToSave = ['spanish', 'english', 'german']
  const Header = () => (<TheHeader language={isLanguage} />)

  const {loader, error} = globalStates
  const setLoader = (state) => {
    setglobalStates({
      ...globalStates,
      loader: state
    })
  }
  const setError = (state) => {
    setglobalStates({
      ...globalStates,
      error: state
    })
  }

  const values = {
    languages,
    langToSave,
    isLanguage,
    loader,
    setLoader,
    error,
    setError,
    Header,
    setStorageLanguage: (language) => {
      window.localStorage.setItem('language', language)
      setIsLanguage(language)
    },
    removeStorageLanguage: () => {
      window.localStorage.removeItem('language')
      setIsLanguage('')
    }
  }

  return (
    <Context.Provider value={values}>
      {children}
    </Context.Provider>
  )
}

export default {
  Provider,
  Consumer: Context.Consumer
}
