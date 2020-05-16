import React, { createContext, useState } from 'react'
export const Context = createContext()

const Provider = ({ children }) => {
  const [isLanguage, setIsLanguage] = useState(window.localStorage.getItem('language'))
  const [loader, setLoader] = useState(false)

  const values = {
    isLanguage,
    loader,
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
