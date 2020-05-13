import React, { createContext, useState } from 'react'
export const Context = createContext()

const Provider = ({ children }) => {
  const [isLanguage, setIsLanguage] = useState(() => {
    return window.localStorage.getItem('language')
  })

  const value = {
    isLanguage,
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
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}

export default {
  Provider,
  Consumer: Context.Consumer
}
