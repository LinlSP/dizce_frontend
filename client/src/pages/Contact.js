import React,{useState, useEffect, useContext} from 'react'
import { Context } from '../Context'
/// //////////////////Styles

/// //////////////////Resources and Components

/// //////////////////Self
///setting the height
const vh = window.innerHeight*0.01
///
export const Contact = () => {
  const {Header} = useContext(Context)
  return(<>
    <Header/>
    <div style={{height:'100vh'}}>
      Contact
    </div>
  </>)
}