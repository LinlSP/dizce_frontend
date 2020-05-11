import React,{useContext} from 'react'
/// //////////////////Styles
import { Logo, TotalContainer } from '../styles/pages/Slanguage'

/// //////////////////Resources and Components
import Logosrc from '../assets/logo2.svg'
import {Context} from '../Context'
// import * as store from '../hooks-functions/setStorageLanguage'
/// //////////////////Self

// var fs = require('fs')
// const data = fs.readFileSync(`${espanol.json}`)
// const datajson = JSON.parse(data)
export const Language = () => {
  const {setStorageLanguage} = useContext(Context)
  return (
    <TotalContainer>
      <div className='container'>
          <Logo src={Logosrc} />
          <button onClick={()=>{setStorageLanguage('spanish')}}>Spanish</button>
      </div>
    </TotalContainer>
  )
}
