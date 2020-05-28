import React, { useContext, useEffect , useState} from 'react'
import { Context } from '../Context'

/// //////////////////Styles
import {ContentContainerGlobal, BigContainerGlobal} from '../styles/global/Globalstyles'
import {
        LogoSection, MainTitle,LittleMainTitle,WorldIcon,WorldIconImage,MainButton,BurgerMenu, FirstLine,UpperMenu,UpperLink,SideMenu,SideMenuLink,SideMenuButton,SelectLangBox,LangInBox, //mainscreen
        Question, Quote,Answer,AnswerImg,SliderButton, //slider
        FocusTitle,FocusIcons,FIcon,FocusDescription,DTitle,DSubtitle,DPoints,//ourfocus
        FurtherTitle,Sections,Section1,Section2,Section3,FText,FImage,ImagesContainer//furthermore
        } from '../styles/pages/StyleHome'
/// //////////////////Resources and Components
import {Loader} from '../components/Loader'
import homebg from '../assets/homebg.svg'
import logo2 from '../assets/logo2.svg'
import burgerMenu from '../assets/burgerMenu.svg'
import languageWorld from '../assets/languageWorld.svg'
import quote1 from '../assets/initquote.svg'
import quote2 from '../assets/endquote.svg'
import family from '../assets/family.svg'
import business from '../assets/business.svg'
import individual from '../assets/individual.svg'
import personalized from '../assets/personalized.svg'
import sliderbutton from '../assets/sliderButton.svg'
import lastbg from '../assets/homelastbg.svg'
import Backbtn from '../assets/gobtn.svg'


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

const pageName = 'home'
const defaultbgcolor= 'rgba(93,193,185,1)'
const secondarybgcolor = 'rgba(239,239,239,1)'
const bggradient=`linear-gradient(90deg, rgba(255,255,255,1) 0%, ${defaultbgcolor} 100%)`
const interpreter='https://res.cloudinary.com/d1zc3/image/upload/v1588988741/All/Home/Translator.png'
const translators = 'https://res.cloudinary.com/d1zc3/image/upload/v1590540428/All/Home/Rechteck_1.png'
const focusIcons = [family ,business , individual, personalized]

export const Home = () => {
  const {isLanguage, setError, languages, setStorageLanguage, langToSave } = useContext(Context)
  const [textData, setTextData] = useState('')
  const [sideMenu, setSideMenu] = useState(false)
  const [langBox, setLangBox] = useState(false)
  const [firstslider, setFirstslider] = useState(true)
  const [focusIcon, setFocusIcon] = useState(parseInt('0'))

  
  useEffect(() => {
    import(`../languages/${isLanguage}/${pageName}.json`)
      .then(({default: myData}) => {
        setTextData(myData);
      })
      .catch(error=>{
        console.log(error)
        setError(true)
      });


  }, [])

  const changeLanguage = (index, callback) =>{
    setStorageLanguage(langToSave[index]);
    callback;
  }

  const onSliderChange = (value) =>{
    setFirstslider(value);
  }

  const onFocusChange = (event) =>{
    const focusIconNumber = parseInt(event.target.id);
    setFocusIcon(focusIconNumber)
  }


  if(textData === '') return  <Loader/>

  const {maintitle, questions, titles, focus, furthermore, sidepanel} = textData
  return (<>
  {/* ///////////////////////////////////////////////////////////////////////////// */}
  <SideMenu on={sideMenu ? 1 : 0}>
    <div className='container' style={{display:'flex',flexDirection:'column', justifyContent:'space-between', alignItems:'center', minHeight:'100vh',padding: '5vh 0'}}>
      <div style={{width:'80%', display:'flex',justifyContent:'flex-start', height:`${6*vh}px`, position:'absolute'}}>
        <SideMenuButton src={Backbtn} height='100%' alt="" onClick={()=>setSideMenu(false)}/>
      </div>
      <SideMenuLink to='/about'>
        {sidepanel.one}
      </SideMenuLink>
      <SideMenuLink to='/services'>
        {sidepanel.two}
      </SideMenuLink>
      <SideMenuLink to='/contact'>
        {sidepanel.three}
      </SideMenuLink>
      <SideMenuLink to='/legal'>
        {sidepanel.four}
      </SideMenuLink>
    </div>
  </SideMenu>
  <div id='mainscreen'>
    <BigContainerGlobal bg={`url(${homebg}) repeat center`} bgcolor={defaultbgcolor} bgsize='cover'>
      <div className='container'>
        <ContentContainerGlobal bgcolor='transparent' flex flexCol justify='space-between' align='center'>
          <LogoSection>
            <img src={logo2} alt="" height='80%'/>
            <BurgerMenu src={burgerMenu} alt="" height='40%' onClick={()=>setSideMenu(true)}/>
            <UpperMenu>
              <UpperLink to='/about'>
                {sidepanel.one}
              </UpperLink>
              <UpperLink to='/services'>
                {sidepanel.two}
              </UpperLink>
              <UpperLink to='/contact'>
                {sidepanel.three}
              </UpperLink>
              <UpperLink to='/legal'>
                {sidepanel.four}
              </UpperLink>
            </UpperMenu>
          </LogoSection>
          <MainTitle >
            <FirstLine>
              {maintitle.big1}
              <LittleMainTitle>
                {maintitle.mini}
              </LittleMainTitle>
            </FirstLine>
            {maintitle.big2}
          </MainTitle>
          <MainButton>
            {maintitle.button}
          </MainButton>
          <WorldIcon>
            <SelectLangBox on={langBox ? 1 : 0}>
              {
                languages.map((language,index)=>(
                  <LangInBox key={index} onClick={()=>{changeLanguage(index,location.reload())}}>
                    {language}
                  </LangInBox>
                ))
              }
            </SelectLangBox>
            <WorldIconImage onClick={()=>{setLangBox(!langBox)}} src={languageWorld} height='100%' alt=""/>
          </WorldIcon>
        </ContentContainerGlobal>
      </div>
    </BigContainerGlobal>
  </div>
  {/* ///////////////////////////////////////////////////////////////////////////// */}
  <div id='slider'>
    <BigContainerGlobal id='question' bgcolor={defaultbgcolor}>
      <div className='container'>
        <ContentContainerGlobal flex justify='center' align='flex-end' extra={`padding: ${4*vh}px 0 ${4*vh}px 0;`}>
          <Question change={firstslider ? 1 : 0}>
            <Quote src={quote1} extra='margin-right: 1px;'/>
              {firstslider ? questions[0].question : questions[1].question}
          </Question>
            <Quote change={firstslider ? 1 : 0} src={quote2}/>
        </ContentContainerGlobal>
      </div>
    </BigContainerGlobal>
    <BigContainerGlobal id='answer' bg={bggradient}  bgsize='contain'>
      <div className="container">
        <ContentContainerGlobal flex justify='center' align='center'>
          <Answer change={firstslider ? 1 : 0}>
            {firstslider ? questions[0].answer : questions[1].answer}
            <AnswerImg src={firstslider ? interpreter : translators} alt=""/>
          </Answer>
        </ContentContainerGlobal>
      </div>
    </BigContainerGlobal>
  </div>
  <div id='sliderbuttons'>
    <BigContainerGlobal bgcolor={secondarybgcolor}>
      <div className='container'>
        <ContentContainerGlobal flex justify='center' align='center'>
          <SliderButton src={sliderbutton} bgcolor={()=>(firstslider ? 'black':'white')} onClick={()=>onSliderChange(true)}/>
          <SliderButton src={sliderbutton} bgcolor={()=>(firstslider ? 'white' : 'black')} onClick={()=>onSliderChange(false)}/>
        </ContentContainerGlobal>
      </div>
    </BigContainerGlobal>
  </div>
  {/* ///////////////////////////////////////////////////////////////////////////// */}
  <div id='ourfocus'>
    <BigContainerGlobal bgcolor={secondarybgcolor}>
      <div className='container'>
        <ContentContainerGlobal flex flexCol extra={`padding: ${20*vh}px 0;`}>
          <FocusTitle>
            {titles.first}
          </FocusTitle>
          <FocusIcons>
            {
              focusIcons.map((source, index)=>(
                <FIcon key={index} id={index} src={source} focusOn={focusIcon} onClick={(event)=>onFocusChange(event)}/>
              ))
            }
          </FocusIcons>
          <FocusDescription>
            <DTitle>
              {focus[focusIcon].name}
            </DTitle>
            <div>
              <DSubtitle>
                {focus[focusIcon].text}
              </DSubtitle>
              <DPoints>
                <li>{focus[focusIcon].points.one}</li>
                <li>{focus[focusIcon].points.two}</li>
                <li>{focus[focusIcon].points.three}</li>
              </DPoints>
            </div>
          </FocusDescription>
        </ContentContainerGlobal>
      </div>
    </BigContainerGlobal>
  </div>
{/* ///////////////////////////////////////////////////////////////////////////// */}
  <div id='furthermore'>
    <BigContainerGlobal bg={`url(${lastbg}) repeat center`} bgsize='cover'>
      <div className='container'>
        <ContentContainerGlobal >
          <FurtherTitle>
            {titles.second}
          </FurtherTitle>
          <Sections>
            <Section1>
              <FText >
                {furthermore.one}
              </FText>
              <div style={{width: '50%', display:'flex', justifyContent: 'center', alignItems:'center'}}>
                <FImage width='80%' src='https://res.cloudinary.com/d1zc3/image/upload/v1588993595/All/Home/learnbook.jpg'/>
              </div>

            </Section1>
            <Section2 >
            <div style={{width: '50%', display:'flex', justifyContent: 'center', alignItems:'center'}}>
              <FImage width='80%' src='https://res.cloudinary.com/d1zc3/image/upload/v1588988953/All/Home/earth.png'/>
            </div>
              <FText >
                {furthermore.two}
              </FText>
            </Section2>
            <Section3>
              <FText width='90%' align> 
                {furthermore.three}
              </FText>
              <ImagesContainer >
                <FImage width='30%' src='https://res.cloudinary.com/d1zc3/image/upload/v1588993595/All/Home/alter.jpg'/>
                <FImage width='30%' src='https://res.cloudinary.com/d1zc3/image/upload/v1588993595/All/Home/frau.jpg'/>
                <FImage width='30%' src='https://res.cloudinary.com/d1zc3/image/upload/v1588993595/All/Home/boy-studies.jpg'/>
              </ImagesContainer>
            </Section3>
          </Sections>

        </ContentContainerGlobal>
      </div>
    </BigContainerGlobal>
  </div>

    </>);
}
