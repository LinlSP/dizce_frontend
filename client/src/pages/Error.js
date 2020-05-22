import React,{useContext, useEffect} from 'react'
import {Context} from '../Context'

/// //////////////////Styles
import {ContentContainerGlobal} from '../styles/global/Globalstyles'
import {Text,Icon} from '../styles/pages/StyleError'

/// //////////////////Resources and Components
import errorSrc from '../assets/error.svg'

/// //////////////////Self
const vh = window.innerHeight*0.01

export const Error = () =>{
  const {isLanguage, removeStorageLanguage} = useContext(Context)
  var message;
  switch(isLanguage){
    case 'spanish':
      message = 'Sucedió un error :(';
      break;
    case 'german':
      message = 'Etwas ist schiefgelaufen :(';
      break;
    default:
      message = 'Something went wrong :(';
  }

  useEffect(()=>{
    setTimeout(() => {
      removeStorageLanguage()
      location.reload()
    }, 3000);
  },[])
  return(<>
    <ContentContainerGlobal height={`${100*vh}`} extra='min-height:100vh;' flex flexCol justify='center' align='center' bgcolor='black'>
      <Icon src={errorSrc}/>
      <Text>
        {message}
      </Text>
    </ContentContainerGlobal>
  </>)
}