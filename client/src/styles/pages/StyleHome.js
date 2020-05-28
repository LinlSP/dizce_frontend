import styled from 'styled-components'
import {SlideLeft, SlideRight } from '../global/Animations'
import {Link} from '@reach/router'
///setting the height
const windowWidth = window.innerWidth
const windowHeight = window.innerHeight

var defaultVh = 684
if(windowWidth > 350 && windowWidth < 1701){
  defaultVh = 784
}else if(windowWidth > 1700){
  defaultVh = window.innerHeight
}

var vh = defaultVh*0.01
///

//////////////////////////////////////mainscreen
const LogoSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${8*vh}px;
  width: 100%;
  margin-bottom: ${1*vh}px;
  margin-top: ${1*vh}px;
`

const BurgerMenu = styled.img`
  filter:invert(1);
  transition: .5s all ease;
&:hover{
  filter:invert(0);
  cursor: pointer;
}
@media only screen and (min-width: 1200px) {
    display:none;
}
`
const SideMenu = styled.div`
  min-height:100vh;
  min-width:100vw;
  background-color:rgba(0,0,0,.9);
  position:fixed;
  z-index:+1;
  transform:translateX(100vw);
  transition: 1s ease all;
  ${props=>props.on ? 'transform:translateX(0);' : ''}
  @media only screen and (min-width: 1200px) {
  display:none;
  }


`
const SideMenuLink = styled(Link)`
  z-index:2;
  display:flex;
  justify-content:center;
  align-items:center;
  color:white;
  font-size:${3*vh}px;
  text-transform:uppercase;
  transition:1s all ease;
  &:hover{
    color:white;
  cursor:pointer;
  font-weight:bold;
  text-decoration:none;
  }

`

const SideMenuButton = styled.img`
height:100%;
transform:rotate(180deg);
&:hover{
  cursor:pointer;
}
`

const UpperMenu = styled.div`
@media only screen and (max-width: 1199px) {
display:none;
}
display:flex;
width:50%;
flex-wrap:wrap;
justify-content:space-between;
align-items:center;
`
const UpperLink = styled(Link)`
color:white;
transition: .5s all ease;
font-size:${2*vh}px;

&:hover{
  color:black;
  text-decoration:none;
}

`


const MainTitle = styled.div`
  margin-top: ${15*vh}px;
  margin-bottom: ${15*vh}px;
  display: flex;
  color: white;
  justify-content:center;
  font-size: ${6*vh}px;
  font-weight: bold;
  flex-direction: column;

`

const FirstLine = styled.div`
  color: white;
  display: flex;
  font-size: ${6*vh}px;
  font-weight: bold;

`

const LittleMainTitle = styled.div`
  color: white;
  margin-left: ${2*vh}px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: white;
  font-size: ${3*vh}px;
  font-weight: lighter;

`
const MainButton = styled.button`
  background-color: black;
  color: white;
  border: black;
  border-radius: ${4*vh}px;
  font-size: ${4*vh}px;
  padding: 0 ${3*vh}px ;
  margin-bottom: ${15*vh}px;
  font-weight: 300;
  transition: .5s all ease;
  &:hover{
    background-color:white;
    color:black;
  }

`
const WorldIcon = styled.div`
  height: ${6*vh}px;
  display: flex;
  width:100%;
  justify-content: flex-start;
  margin-bottom:${30*vh}px;
`
const WorldIconImage = styled.img`
  transition: .5s all ease;
  filter:invert(1);
  &:hover{
    cursor:pointer;
    filter:invert(0);
  }
`

const SelectLangBox = styled.div`
transform-origin:left top;
position:absolute;
transform:scale(0);
transition:.5s all ease;
margin-left:${6*vh}px;
margin-top:${3*vh}px;
${props=>props.on ? 'transform:scale(1);' : ''}
overflow-y: scroll;
height:${17.5*vh}px;
`
const LangInBox = styled.div`
padding:${1*vh}px ${2*vh}px;
font-size:${2.6*vh}px;
color:white;
background-color:rgba(0,0,0,.5);
display:flex;
justify-content:center;
align-items:center;
transition:1s all ease;
&:hover{
  background-color:rgba(0,0,0,1);
  cursor: pointer;
}
`
//////////////////////////////////////slider
const Question = styled.div`
  color: white;
  display:flex;
  text-align:center;
  font-size: ${3*vh}px;
  font-weight: bold;
  ${props=>props.change ?
    SlideLeft({time:'1.5s'})
    :
    SlideRight({time:'1.5s'})
  }
  ${props=>props.extra}
`
const Quote = styled.img`
  position: relative;
  display:flex;
  height:${2*vh}px;
  ${props=>props.change ?
    SlideLeft({time:'1.5s'})
    :
    SlideRight({time:'1.5s'})
  }

  ${props=>props.extra}
`
const Answer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:space-between;
  align-items:center;
  color: black;
  font-weight:300;
  text-align:center;
  width:90%;
  font-size:${2.3*vh}px;
  height: ${80*vh}px;
  padding-top: ${4*vh}px;
  ${props=>props.change ?
    SlideRight({time:'1.5s'})
    :
    SlideLeft({time:'1.5s'})
  }

  @media only screen and (min-width: 800px) {
    flex-direction:row;
    width:100%;
    height:auto;
    padding-top:0;
}

`

const AnswerImg = styled.img`
  height: 75%;
  @media only screen and (min-width: 800px) {
    height:90%;
}

`
const SliderButton = styled.img`
  height: ${3.5*vh}px;
  margin: ${2*vh}px;
  border-radius:50%;
  background-color: ${props=>props.bgcolor};
  &:hover{
    cursor:pointer;
  }
`

//////////////////////////////////////ourfocus

const FocusTitle = styled.div`
  color: black;
  display:flex;
  justify-content:center;
  align-items:center;
  font-size: ${4*vh}px;
`
const FocusIcons = styled.div`
  display: flex;
  flex-wrap:wrap;
  justify-content:space-between;
  align-items:center;
  padding-top:${10*vh}px;
  padding-bottom:${10*vh}px;
`
const FIcon = styled.img`
height: ${8*vh}px;
opacity:.4;
transition:1s all ease;

${props=>{
  if(parseInt(props.id) === props.focusOn) return `
  opacity:1;
  height: ${10*vh}px;

  `
}}
&:hover{
  cursor:pointer;
}
`
const FocusDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:space-between;
  align-items:center;
  border-top: ${1*vh}px solid black;
  border-bottom: ${1*vh}px  solid black;
`
const DTitle = styled.div`
  font-size:${6*vh}px;
  font-weight:bold;
  margin-bottom:${8*vh}px;
  margin-top:${4*vh}px;
`
const DSubtitle = styled.div`
  font-size:${2.5*vh}px;
  margin-bottom:${4*vh}px;
`
const DPoints = styled.ul`
  font-size:${2*vh}px;
  margin-bottom:${8*vh}px;

`
//////////////////////////////////////furthermore

const FurtherTitle = styled.div`
  color: black;
  display:flex;
  justify-content:center;
  align-items:center;
  font-size: ${4*vh}px;
  padding-top:${20*vh}px;
  margin-bottom:${10*vh}px;
`
const Sections = styled.div`
  width:100%;
`
const FText = styled.div`
width:${props=>props.width ? props.width : '50%'};
margin-bottom:${5*vh}px;
font-size:${2.3*vh}px;
text-align:${props=>props.align ? 'center': 'justify'};
`
const FImage = styled.img`
  border-radius: 10%;
`

const Section1 = styled.div`
  display:flex;
  margin:${10*vh}px 0;
  justify-content:space-between;
  align-items:center;
`
const Section2 = styled.div`
  display:flex;
  margin:${10*vh}px 0;
  justify-content:space-between;
  align-items:center;


`
const Section3 = styled.div`
  display:flex;
  flex-direction:column;
  margin:${10*vh}px 0 0 0;
  padding-bottom:${10*vh}px;
  justify-content:center;
  align-items:center;

`
const ImagesContainer = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  width:100%;
`

export {
  LogoSection,MainTitle,LittleMainTitle,WorldIcon,WorldIconImage,MainButton,BurgerMenu,FirstLine,UpperMenu,UpperLink,SideMenu,SideMenuLink,SideMenuButton,SelectLangBox,LangInBox,
  Question,Quote,Answer,AnswerImg,SliderButton,
  FocusTitle,FocusIcons,FIcon,FocusDescription,DTitle,DSubtitle,DPoints,
  FurtherTitle,Section1,Section2,Section3,Sections,FText,FImage,ImagesContainer
}