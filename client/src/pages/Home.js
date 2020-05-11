import React,{useContext} from 'react'
import {Context} from '../Context'

export const Home = () =>{
  const {removeStorageLanguage} = useContext(Context)
  return(
    <div>
      <h1>Home</h1>
      <button onClick={()=>{removeStorageLanguage()}}>remove</button>

    </div>

  )
}