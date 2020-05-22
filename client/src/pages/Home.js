import React, { useContext, useEffect , useState} from 'react'
import { Context } from '../Context'

/// //////////////////Styles
import {ContentContainerGlobal, BigContainerGlobal} from '../styles/global/Globalstyles'
import {
        LogoSection, MainTitle,LittleMainTitle,WorldIcon,MainButton,BurgerMenu, FirstLine, //mainscreen
        Question, Quote,Answer,AnswerImg,SliderButton, //slider
        FocusTitle,FocusIcons,FIcon,FocusDescription,DTitle,DSubtitle,DPoints//ourfocus
        } from '../styles/pages/StyleHome'
/// //////////////////Resources and Components
import {Loader} from '../components/Loader'
import homebg from '../assets/homebg.svg'
import logo2 from '../assets/logo2.svg'
import burgerMenu from '../assets/burgerMenu.svg'
import languageWorld from '../assets/languageWorld.svg'
import quote1 from '../assets/initquote.svg'
import quote2 from '../assets/endquote.svg'
import business from '../assets/business.svg'
import family from '../assets/family.svg'
import individual from '../assets/individual.svg'
import personalized from '../assets/personalized.svg'
import sliderbutton from '../assets/sliderButton.svg'

/// //////////////////Self
const vh = window.innerHeight*0.01
const pageName = 'home'
const defaultbgcolor= 'rgba(93,193,185,1)'
const secondarybgcolor = 'rgba(239,239,239,1)'
const bggradient=`linear-gradient(90deg, rgba(255,255,255,1) 0%, ${defaultbgcolor} 100%)`
const interpreter='https://res.cloudinary.com/d1zc3/image/upload/v1588988741/All/Home/Translator.png'


export const Home = () => {
  const {isLanguage, removeStorageLanguage, setError } = useContext(Context)
  const [textData, setTextData] = useState('')

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

  console.log(textData)

  if(textData === '') return  <Loader/>

  const {maintitle, questions, titles, focus, furthermore, sidepanel} = textData
  return (<>
  {/* ///////////////////////////////////////////////////////////////////////////// */}
  <div id='mainscreen'>
    <BigContainerGlobal bg={`url(${homebg}) repeat center`} bgcolor={defaultbgcolor} bgsize='cover' extra={`height: ${vh*140}px;`}>
      <div className='container'>
        <ContentContainerGlobal bgcolor='transparent' flex flexCol justify='space-between' align='center'>
          <LogoSection>
            <img src={logo2} alt="" height='80%'/>
            <BurgerMenu src={burgerMenu} alt="" height='40%'/>
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
            <img src={languageWorld} height='100%' alt=""/>
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
          <Question>
            <Quote src={quote1} extra='margin-right: 1px;'/>
              {questions[0].question}
          </Question>
            <Quote src={quote2}/>
        </ContentContainerGlobal>
      </div>
    </BigContainerGlobal>
    <BigContainerGlobal id='answer' bg={bggradient}  bgsize='contain'>
      <div className="container">
        <ContentContainerGlobal flex justify='center' align='center'>
          <Answer>
            {questions[0].answer}
            <AnswerImg src={interpreter} alt=""/>
          </Answer>
        </ContentContainerGlobal>
      </div>
    </BigContainerGlobal>
  </div>
  <div id='sliderbuttons'>
    <BigContainerGlobal bgcolor={secondarybgcolor}>
      <div className='container'>
        <ContentContainerGlobal flex justify='center' align='center'>
          <SliderButton src={sliderbutton} bgcolor='black'/>
          <SliderButton src={sliderbutton} bgcolor='white'/>
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
            <FIcon src={family}/>
            <FIcon src={business}/>
            <FIcon src={individual}/>
            <FIcon src={personalized}/>
          </FocusIcons>
          <FocusDescription>
            <DTitle>
              {focus[0].name}
            </DTitle>
            <div>
              <DSubtitle>
                {focus[0].text}
              </DSubtitle>
              <DPoints>
                <li>{focus[0].points.one}</li>
                <li>{focus[0].points.two}</li>
                <li>{focus[0].points.three}</li>
              </DPoints>
            </div>
          </FocusDescription>
        </ContentContainerGlobal>
      </div>
    </BigContainerGlobal>
  </div>
{/* ///////////////////////////////////////////////////////////////////////////// */}
  <div id='furthermore'>
    <BigContainerGlobal>
      <div className='container'>
        <ContentContainerGlobal>
          ef
        </ContentContainerGlobal>
      </div>
    </BigContainerGlobal>
  </div>
      <h1>Home</h1>
      <button onClick={() => { removeStorageLanguage() }}>remove</button>

    </>);
}
