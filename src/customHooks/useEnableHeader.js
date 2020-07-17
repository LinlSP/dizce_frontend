import { useEffect, useContext } from 'react'
import { Context } from '../Context'

export const useEnableHeader = () => {
  const { setHeaderAvailable } = useContext(Context)

  useEffect(() => {
    setHeaderAvailable(true)
    // return () => {
    //     cleanup
    // };
  }, [])
}
