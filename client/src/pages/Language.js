import React, { useContext, useState } from 'react'
/// //////////////////Styles
import { Logo, TotalContainer, Content, Title, World, Languages, Lng , GoButton} from '../styles/pages/Slanguage'

/// //////////////////Resources and Components
import Logosrc from '../assets/logo2.svg'
import Gobtn from '../assets/gobtn.svg'

import { Context } from '../Context'
/// //////////////////Self

// var fs = require('fs')
// const data = fs.readFileSync(`${espanol.json}`)
// const datajson = JSON.parse(data)
export const Language = () => {
  const { setStorageLanguage } = useContext(Context)
  const [title, setTitle] = useState('')
  const [lngnow, setLngnow] = useState('earth')
  const [thedisplay, setThedisplay] = useState('none')
  const [slideValue, setSlideValue] = useState(false)



  const titles = ['Idioma', 'Language', 'Sprache']
  const languages = ['Español', 'English', 'Deutsch']
  const lngToSave = ['spanish', 'english', 'german']


  const mapsrc = `https://res.cloudinary.com/d1zc3/image/upload/v1589292483/All/Landing/${lngnow}.png`

  // const toAuthor = () =>{
  //   switch(lngnow){
  //     case 'spanish':
  //       window.location.href='https://commons.wikimedia.org/w/index.php?curid=69323596';
  //       break;
  //     case 'english':
  //       window.location.href='https://commons.wikimedia.org/w/index.php?curid=3146597';
  //       break;
  //     case 'german':
  //       window.location.href='https://commons.wikimedia.org/w/index.php?curid=41430056';
  //       break;
  //     default:
  //       return
  //   }
  // }
  
  return (
    <TotalContainer>
        <div className='container' style={{display:"flex", alignItems:"center", height:"100vh"}}>
          <Content>
            <Logo>
              <img src={Logosrc} alt='' height='100%' />
              <GoButton id="goButton" onClick={()=>{setStorageLanguage(lngnow)}} src={Gobtn} alt="" seen={thedisplay}/>
            </Logo>
            <Title slide={slideValue}>
              {title}
            </Title>
            <World slide={slideValue} sorc={mapsrc}/>
            <Languages>
              {
              languages.map((e, i) => <Lng key={i} onMouseOver={()=>{setSlideValue(false)}} onClick={()=>{setTitle(titles[i]); setLngnow(lngToSave[i]); setThedisplay('inline');setSlideValue(true)}}>
              {e}
              </Lng>)
              }
            </Languages>
          </Content>
        </div>

    </TotalContainer>
  )
}
