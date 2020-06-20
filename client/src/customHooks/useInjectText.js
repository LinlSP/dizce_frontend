import { useState, useEffect, useContext } from 'react'
import { Context } from '../Context'

export const useInjectText = (componentName) => {
  const { isLanguage, setError } = useContext(Context)
  const [textData, setTextData] = useState('')

  useEffect(() => {
    import(`../languages/${isLanguage}/${componentName}.json`)
      .then(({ default: myData }) => {
        setTextData(myData)
      })
      .catch((error) => {
        console.log(error)
        setError(true)
      })

    // return () => {
    //   setTextData("");
    // };
  }, [])

  return textData
}
