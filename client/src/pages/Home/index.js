import React, { useContext, useEffect , useState} from 'react'
import { Context } from '../../Context'

////////////////////////////////////////////////////////////////////////////////////Styles
import {ContentContainerGlobal, BigContainerGlobal} from '../../styles/global/Globalstyles'
import {
        LogoSection, MainTitle,LittleMainTitle,WorldIcon,WorldIconImage,MainButton,BurgerMenu, FirstLine,UpperMenu,UpperLink,SideMenu,SideMenuLink,SideMenuButton,SelectLangBox,LangInBox, //mainscreen
        Question, Quote,Answer,AnswerImg,SliderButton, //slider
        FocusTitle,FocusIcons,FIcon,FocusDescription,DTitle,DSubtitle,DPoints,//ourfocus
        FurtherTitle,Sections,Section1,Section2,Section3,FText,FImage,ImagesContainer//furthermore
        } from './styles'
////////////////////////////////////////////////////////////////////////////////////Resources and Components
import {Loader} from '../../components/Loader'
import homebg from '../../assets/homebg.svg'
import logo2 from '../../assets/logo2.png'
import burgerMenu from '../../assets/burgerMenu.svg'
import languageWorld from '../../assets/languageWorld.svg'
import quote1 from '../../assets/initquote.svg'
import quote2 from '../../assets/endquote.svg'
import family from '../../assets/family.svg'
import business from '../../assets/business.svg'
import individual from '../../assets/individual.svg'
import personalized from '../../assets/personalized.svg'
import sliderbutton from '../../assets/sliderButton.svg'
import lastbg from '../../assets/homelastbg.svg'
import Backbtn from '../../assets/gobtn.svg'


////////////////////////////////////////////////////////////////////////////////////Self

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

///cloudinary URl
const imagesSrcUrl = 'https://res.cloudinary.com/d1zc3/image/upload/v1590540428/All/Home'
///

const selfName = 'home'
const defaultbgcolor= 'rgba(93,193,185,1)'
const secondarybgcolor = 'rgba(239,239,239,1)'
const bggradient=`linear-gradient(90deg, rgba(255,255,255,1) 0%, ${defaultbgcolor} 100%)`
const interpreter=`${imagesSrcUrl}/Translator.png`
const translators = `${imagesSrcUrl}/Rechteck_1.png`
const focusIcons = [family ,business , individual, personalized]

export const Home = () => {
  const {isLanguage, setError, languages, setStorageLanguage, langToSave } = useContext(Context)
  const [textData, setTextData] = useState('')
  const [sideMenu, setSideMenu] = useState(false)
  const [langBox, setLangBox] = useState(false)
  const [firstslider, setFirstslider] = useState(true)
  const [focusIcon, setFocusIcon] = useState(parseInt('0'))
  const menuLinksTo = ['/about','/services','/contact','/legal']

  //////////////////Importing Text from JSON - function
  const importTextFromJson = () => {
    import(`../../languages/${isLanguage}/${selfName}.json`)
      .then(({ default: myData }) => {
        setTextData(myData);
      })
      .catch(error => {
        console.log(error)
        setError(true)
      });
  }
  ///////////

  useEffect(() => {
    importTextFromJson()

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

  //////////////////PAGE

  if(textData === '') return  <Loader/>

  const {maintitle, questions, titles, focus, furthermore, sidepanel} = textData
  return (<>
  {/* ///////////////////////////////////////////////////////////////////////////// */}
  <SideMenu on={sideMenu ? 1 : 0}>
    <div className='container' style={{display:'flex',flexDirection:'column', alignItems:'center', minHeight:'100vh',padding: '5vh 0'}}>
      <div style={{width:'80%', display:'flex',justifyContent:'flex-start', height:`${6*vh}px`, position:'absolute'}}>
        <SideMenuButton src={Backbtn} height='100%' alt="" onClick={()=>setSideMenu(false)}/>
      </div>
      {
        sidepanel.map((linkTitle,index)=>(
          <SideMenuLink key={index} to={menuLinksTo[index]}>
            {linkTitle}
          </SideMenuLink>
        ))
      }
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
              {
                sidepanel.map((linkTitle,index)=>(
                  <UpperLink key={index} to={menuLinksTo[index]}>
                    {linkTitle}
                  </UpperLink>
                ))
              }
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
          <MainButton to='/services'>
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
            <WorldIconImage name='language' onClick={()=>{setLangBox(!langBox)}} src={languageWorld} height='100%' alt=""/>
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
                {
                  focus[focusIcon].points.map((point,index)=>(
                    <li key={index}>{point}</li>
                  ))
                }
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
                {furthermore[0]}
              </FText>
              <div style={{width: '50%', display:'flex', justifyContent: 'center', alignItems:'center'}}>
                <FImage width='80%' src={`${imagesSrcUrl}/learnbook.jpg`}/>
              </div>

            </Section1>
            <Section2 >
            <div style={{width: '50%', display:'flex', justifyContent: 'center', alignItems:'center'}}>
              <FImage width='80%' src={`${imagesSrcUrl}/earth.png`}/>
            </div>
              <FText >
                {furthermore[1]}
              </FText>
            </Section2>
            <Section3>
              <FText width='90%' align> 
                {furthermore[2]}
              </FText>
              <ImagesContainer >
                {
                  ['alter','frau','boy-studies'].map((picName, index)=>(
                    <FImage key={index} width='30%' src={`${imagesSrcUrl}/${picName}.jpg`}/>
                  ))
                }
              </ImagesContainer>
            </Section3>
          </Sections>

        </ContentContainerGlobal>
      </div>
    </BigContainerGlobal>
  </div>

    </>);
}
