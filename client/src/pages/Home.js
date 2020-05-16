import React, { useContext, useEffect } from 'react'
import { Context } from '../Context'

/// //////////////////Styles

/// //////////////////Resources and Components

/// //////////////////Self


export const Home = () => {
  const { removeStorageLanguage, setLoader } = useContext(Context)
  /// //////////////////
  useEffect(() => {
    setLoader(false)
  }, [])
  /// //////////////////

  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => { removeStorageLanguage() }}>remove</button>

    </div>

  )
}
