import { useEffect, useContext } from 'react'
import { Context } from '../Context'

export const useDisableHeader = () => {
  const { headerAvailable, setHeaderAvailable } = useContext(Context)

  useEffect(() => {
    if (headerAvailable) setHeaderAvailable(false)
    // return () => {
    //     cleanup
    // };
  }, [])
}
