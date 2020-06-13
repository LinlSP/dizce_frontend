import styled from 'styled-components'
import { Bounce, FadeIn, SlideLeft, SlideRight } from '../../styles/global/Animations'
import bg from '../../assets/bg.svg'

var vh = window.innerHeight*0.01


export const TotalContainer = styled.div`
  background: url(${bg}) no-repeat center;
  background-color: red;
  background-size: cover;
  height:${100*vh}px;
  min-height:100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (pointer:none), (pointer:coarse) {
    min-height: auto;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: ${90*vh}px;
  min-height:90vh;

  width: 100%;
  justify-content: space-between;
  @media (pointer:none), (pointer:coarse) {
    min-height: auto;
  }
`
export const LogoSection = styled.div`
  width: 100%;
  height: 6%;
  display: flex;
  justify-content: space-between;
  &:hover{
    ${Bounce}
  }
`
export const Title = styled.h1`
  width: 100%;

  font-size: ${7*vh}px;
  color: white;
  font-family: 'Lato', sans-serif;
  text-align: center;
  margin: 0;
  &:hover{
    cursor: context-menu;
  }
  ${props => props.slide ? SlideLeft({ time: '1s' }) : SlideRight({ time: '1s' })}
`
export const World = styled.div`
  background: ${props => `url(${props.sorc}) no-repeat center`};
  background-size: contain;
  height: 55%;
  width: 100%;
  display: flex;
  justify-content: center;
  ${props => props.slide ? SlideRight({ time: '1s' }) : SlideLeft({ time: '1s' })}


`
export const Languages = styled.div`
  height: 15%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

`
export const Lang = styled.button`
  font-family: 'Lato', sans-serif;
  border-radius: 5px;
  border: white solid 1px;
  background-color: transparent;
  color: white;
  font-size: 100%;
  width:30%;
  transition: 1s all ease;
  &:hover{
    background-color: black;
  }
`
export const GoButton = styled.img`
  height: 100%;
  background-color: transparent;
  display: ${props => props.seen};
  ${FadeIn}
  &:hover{
    cursor: pointer;
  }
`
