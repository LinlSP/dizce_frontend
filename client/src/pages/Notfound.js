import React,{useContext} from 'react'
import {Context} from '../Context'
/// //////////////////Styles
import {Text} from '../styles/pages/StyleNotFound'
import {ContentContainerGlobal} from '../styles/global/Globalstyles'

/// //////////////////Resources and Components

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
    <ContentContainerGlobal bgcolor={'blue'} height={'100vh'} flex>
      <Text>
        {message}
      </Text>
    </ContentContainerGlobal>
  </>)
}