import React,{useContext} from 'react'
import {Context} from '../Context'

/// //////////////////Styles
import {ContentContainerGlobal} from '../styles/global/Globalstyles'
import {Text,Icon} from '../styles/pages/StyleError'

/// //////////////////Resources and Components
import errorSrc from '../assets/error.svg'

/// //////////////////Self
export const Error = () =>{
  const {isLanguage} = useContext(Context)
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

  return(<>
    <ContentContainerGlobal height='100vh' flex flexCol justify='center' align='center' bgcolor='black'>
      <Icon src={errorSrc}/>
      <Text>
        {message}
      </Text>
    </ContentContainerGlobal>
  </>)
}