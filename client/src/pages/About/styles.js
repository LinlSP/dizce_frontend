import styled from 'styled-components'

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


export const PlaceHolder = styled.div`
  background:rgba(198,235,239,1);
  height:95vh;
`

export const Container = styled.div`
  min-height:95vh;
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  @media only screen and (max-width: 770px) {
  justify-content:none;
  flex-direction:column;
  align-items:center;
  }

`
export const QuestionWrapper = styled.div`
  background: radial-gradient(circle at 50%, rgba(191,181,34,0.8) 50%, transparent 50%);
  color:white;
  white-space:nowrap;
  font-size:${4*vh}px;
  display:flex;
  flex-direction:column;
  font-weight:300;
  justify-content:center;
  align-items:center;
  width:50%;
  @media only screen and (max-width: 770px) {
  margin:${5*vh}px 0;
  width:100%;
  min-height:44vh;
  }

`
export const BrandName = styled.div`
  font-weight:bold;
  font-size:${5*vh}px;
`

export const AnswerWrapper = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width:50%;
  @media only screen and (max-width: 770px) {
  margin-bottom:${5*vh}px;
  width:100%;
  flex-direction:row;
  }

`

export const Answer = styled.div`
  padding:${10*vh}px 0;
  color:black;
  display:flex;
  width:50%;
  font-weight:350;
  font-size: ${2*vh}px;
  text-align:justify;
  @media only screen and (max-width: 770px) {
  text-align:left;
  width:auto;
  padding:0 ${1*vh}px;
  }

`
export const BigIcon = styled.img`
  height:${20*vh}px;
  @media only screen and (max-width: 770px) {
  height:${10*vh}px;
  }

`