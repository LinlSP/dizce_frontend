import React,{useState, useEffect, useContext} from 'react'
import { Context } from '../Context'
import { useLocation } from "@reach/router"

/// //////////////////Styles
import {Container, LinksContainer,MenuLogoLink,ChangeLang,Menu,
  PagesMenuBox,TitleInMenuBox,BackBtnLinks,BackBtnLanguages,LanguagesBox,LangInBox}
from '../styles/components/StyleHeader'
/// //////////////////Resources and Components
import {Loader} from './Loader'
import logo from '../assets/logo2.svg'
import langWorld from '../assets/languageWorld.svg'
import menu from '../assets/burgerMenu.svg'
import backbtn from '../assets/gobtn.svg'
/// //////////////////Self
///setting the height
const windowWidth = window.innerWidth

var defaultVh = 684
if(windowWidth > 350 && windowWidth < 1701){
  defaultVh = 784
}else if(windowWidth > 1700){
  defaultVh = window.innerHeight
}

var vh = defaultVh*0.01
///

const selfName = 'header'
const toPages = ['/about','/services','/contact','/legal']

export const Header = (props) =>{
  const {languages, langToSave, setStorageLanguage, isLanguage} = useContext(Context)
  const [textData, setTextData] = useState('')
  const [menuOn, setMenuOn] = useState(false)
  const [languagesMenu,setLanguagesMenu] = useState(false)
  const [activeMenu, setActiveMenu] = useState('')
  const location = useLocation()
  
  
  useEffect(() => {
    import(`../languages/${props.language}/${selfName}.json`)
    .then(({default: myData}) => {
      setTextData(myData);
      })
      .catch(error=>{
        console.log(error)
        setError(true)
      });
      
      
    }, [])
  
    const activateLinks = () =>{
      setMenuOn(true);
      setActiveMenu('links');
    }
    const activateLanguages = () =>{
      setLanguagesMenu(true);
      setActiveMenu('languages')
    }
    const deactivateLinks = () =>{
      setMenuOn(false);
      setActiveMenu('')
    }
    const deactivateLanguages = () =>{
      setLanguagesMenu(false);
      setActiveMenu('')
    }


  if(textData === '') return <Loader/>

  const {pagename} = textData
  const currentPageIndex = toPages.indexOf(location.pathname)
  return(<>
    <Container activated={activeMenu}>
      <div className="container">
        <LanguagesBox on={languagesMenu ? 1 : 0}>
          <BackBtnLanguages src={backbtn} alt=''  onClick={()=>deactivateLanguages()}/>
          {
            languages.map((language,index)=>(
              <LangInBox thelanguage={langToSave[index]} currentlang={isLanguage} key={index} onClick={()=>setStorageLanguage(langToSave[index])}>
                {language}
              </LangInBox>
            ))
          }
        </LanguagesBox>
        <LinksContainer activated={activeMenu}>
          <MenuLogoLink to='/'>
            <img height='100%' src={logo} alt=""/>
          </MenuLogoLink>
            <div style={{height: "40%"}}>
              <Menu height="100%" src={menu} alt='' onClick={()=>activateLinks()}/>
            </div>
            <div style={{height: "50%"}}>
              <ChangeLang height='100%'  name='language' src={langWorld} onClick={()=>activateLanguages()} alt='' />
            </div>
        </LinksContainer>
        <PagesMenuBox on={menuOn ? 1 : 0}>
            <BackBtnLinks src={backbtn} alt="" onClick={()=>deactivateLinks()}/>
            {
              pagename.map((name, index)=>(
                  <TitleInMenuBox theindex={index} page={currentPageIndex} to={toPages[index]} key={index}>
                    {name}
                  </TitleInMenuBox>
              ))
            }
        </PagesMenuBox>
      </div>
    </Container>
  </>)
}