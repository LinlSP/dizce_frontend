import styled from 'styled-components'
import {Bounce, FadeIn, Slide} from '../global/Animations'
import bg from '../../assets/bg.svg'

export const TotalContainer = styled.div`
  background: url(${bg}) center;
  background-color: red;
  background-size: contain;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
  width: 100%;
  justify-content: space-between;
`
export const Logo = styled.div`
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
  font-size: min(4vw,80px);
  color: white;
  font-family: 'Lato', sans-serif;
  text-align: center;
  margin: 0;
  &:hover{
    cursor: context-menu;
  }
  ${props=>{if(props.slide){return Slide({time:'.5s'})}} }
`
export const World = styled.div`
  background: ${props=>`url(${props.sorc}) no-repeat center`};
  background-size: contain;
  height: 55%;
  width: 100%;
  display: flex;
  justify-content: center;
  ${props=>{if(props.slide){return Slide({time:'1s'})}} }

`
export const Languages = styled.div`
  height: 15%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

`
export const Lng = styled.button`
  font-family: 'Lato', sans-serif;
  border-radius: 5px;
  border: white solid 1px;
  background-color: transparent;
  color: white;
  font-size: min(2vw, 40px);
  width:20%;
  transition: 1s all ease;
  &:hover{
    background-color: black;
  }
`
export const GoButton = styled.img`
  height: 100%;
  background-color: transparent;
  display: ${props=>props.seen};
  ${FadeIn}
  &:hover{
    cursor: pointer;
  }
`

