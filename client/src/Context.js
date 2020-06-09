import React, { createContext, useState } from 'react'
export const Context = createContext()

const Provider = ({ children }) => {
//////////CONSTANTS
  const languages = ['Español', 'English', 'Deutsch']
  const langToSave = ['spanish', 'english', 'german']
  const [isLanguage, setIsLanguage] = useState(window.localStorage.getItem('language'))
  const [globalStates, setglobalStates] = useState({
    loader: false,
    error: false
  })
  const {loader, error} = globalStates
//////////COMPONENTS

//////////HANDLERS

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

  const setStorageLanguage = (language) => {
    window.localStorage.setItem('language', language)
    setIsLanguage(language)
  }

  const removeStorageLanguage = () => {
    window.localStorage.removeItem('language')
    setIsLanguage('')
  }


//////////VALUES

  const values = {
    languages,
    langToSave,
    isLanguage,
    loader,
    setLoader,
    error,
    setError,
    setStorageLanguage,
    removeStorageLanguage
  }

//////////RETURNING 

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
