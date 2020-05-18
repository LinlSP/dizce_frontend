import React,{useContext} from 'react'
import {Context} from '../Context'
/// //////////////////Styles
import {Text, BrokenLogo} from '../styles/pages/StyleNotFound'
import {ContentContainerGlobal} from '../styles/global/Globalstyles'

/// //////////////////Resources and Components
import brokenLogo from '../assets/brokenLogo.svg'

/// //////////////////Self
export const NotFound = () =>{
  const {isLanguage} = useContext(Context)
  var message;
  switch(isLanguage){
      case 'spanish':
        message = 'Página no encontrada';
        break;
      case 'german':
        message = 'Die Seite wurde nicht gefunden';
        break;
      default:
        message = 'Page not found';
    }

  return(<>
    <ContentContainerGlobal bgcolor={'rgba(93,193,185,1)'} height={'100vh'} flex justify={'center'} align={'center'}>
      <Text>
        <BrokenLogo src={brokenLogo} height='100%' alt=""/>
        {message}
      </Text>
    </ContentContainerGlobal>
  </>)
}