import React, { useContext, useEffect , useState} from 'react'
import { Context } from '../Context'

/// //////////////////Styles
import {ContentContainerGlobal, BigContainerGlobal} from '../styles/global/Globalstyles'
import {LogoSection, MainTitle,LittleMainTitle,WorldIcon,MainButton, SideMenu,BurgerMenu} from '../styles/pages/StyleHome'
/// //////////////////Resources and Components
import homebg from '../assets/homebg.svg'
import logo2 from '../assets/logo2.svg'
import burgerMenu from '../assets/burgerMenu.svg'
import languageWorld from '../assets/languageWorld.svg'
/// //////////////////Self


export const Home = () => {
  const {isLanguage, removeStorageLanguage, setLoader, setError } = useContext(Context)
  const [textData, setTextData] = useState('')
  const pageName = 'home'
  
  /// //////////////////
  useEffect(() => {
    import(`../languages/${isLanguage}/${pageName}.json`)
      .then(({default: myData}) => {  console.log(myData); setTextData(myData)})
      // .then(res => {setLoader(false)})
    .catch(error=>{
      setError(true)
    });
  
  }, [])

  /// //////////////////

  return (<>
  <BigContainerGlobal bg={`url(${homebg}) repeat-y center`} bgcolor='rgba(93,193,185,1)' bgsize='contain'>
    <div className='container'>
      <ContentContainerGlobal bgcolor='transparent' flex flexCol justify='space-between' align='center'>
        <LogoSection>
          <img src={logo2} alt="" height='80%'/>
          <BurgerMenu src={burgerMenu} alt="" height='40%'/>
        </LogoSection>
        <MainTitle>
          
        </MainTitle>
      </ContentContainerGlobal>
    </div>
  </BigContainerGlobal>
      <h1>Home</h1>
      <button onClick={() => { removeStorageLanguage() }}>remove</button>

    </>)
}
