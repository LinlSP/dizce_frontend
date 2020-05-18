import React, { createContext, useState } from 'react'
export const Context = createContext()

const Provider = ({ children }) => {
  const [isLanguage, setIsLanguage] = useState(window.localStorage.getItem('language'))
  const [globalStates, setglobalStates] = useState({
    loader: false,
    error: false
  })
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
    isLanguage,
    loader,
    error,
    setError,
    setLoader,
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
