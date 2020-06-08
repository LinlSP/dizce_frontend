import React, { useContext, useState, useEffect } from 'react'
import { Context } from '../Context'

////////////////////////////////////////////////////////////////////////////////////Styles
import { LogoSection, TotalContainer, Content, Title, World, Languages, Lang, GoButton } from '../styles/pages/StyleSelectLanguage'

////////////////////////////////////////////////////////////////////////////////////Resources and Components
import logoSrc from '../assets/logo2.png'
import Gobtn from '../assets/gobtn.svg'

////////////////////////////////////////////////////////////////////////////////////Self
///setting the height
const vh = window.innerHeight*0.01
///

export const SelectLanguage = () => {
  const {languages, setStorageLanguage, setLoader, langToSave } = useContext(Context)

  const [userSettings, setUserSettings] = useState({
    title: '',
    langNow: 'earth',
    theDisplay: 'none',
    isSlideOn: false
  })

  const { title, langNow, theDisplay, isSlideOn } = userSettings

  const titles = ['Idioma', 'Language', 'Sprache']

  const mapsrc = `https://res.cloudinary.com/d1zc3/image/upload/v1589292483/All/Landing/${langNow}.png`

  const updateUserSettings = (index) => {
    setUserSettings({
      title: titles[index],
      langNow: langToSave[index],
      theDisplay: 'inline',
      isSlideOn: !isSlideOn
    })
  }

  const setSettings = () =>{
    setStorageLanguage(langNow);
    setLoader(true);
  }

  //////////////////PAGE

  return (
    <TotalContainer>
      <div className='container' style={{ display: 'flex', alignItems: 'center'}}>
        <Content>
          <LogoSection>
            <img src={logoSrc} alt='' height='100%' />
            <GoButton id='goButton' onClick={() => { setSettings() }} src={Gobtn} alt='' seen={theDisplay} />
          </LogoSection>
          <Title slide={isSlideOn}>
            {title}
          </Title>
          <World slide={isSlideOn} sorc={mapsrc} />
          <Languages>
            {
              languages.map((language, index) => (
                <Lang key={index} onClick={() => { updateUserSettings(index) }}>
                  {language}
                </Lang>
              ))
            }
          </Languages>
        </Content>
      </div>

    </TotalContainer>
  )
}
