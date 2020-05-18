import styled, { createGlobalStyle } from 'styled-components'

const Globalstyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
    overflow-x: hidden;

  }
  body{
    overflow-x: hidden;
    font-family: 'Lato', sans-serif;

  }
  p{
    margin: 0
  }
  div{
    font-family: 'Lato', sans-serif;

  }
`
const BigContainerGlobal = styled.div`
  background: ${props=>props.bg};
  background-size: ${props => props.bgsize ? props.bgsize: 'auto'};
  background-color: ${props => props.bgcolor ? props.bgcolor: 'white'};
  @media only screen and (min-width: 768px) {

  }

`
const ContentContainerGlobal = styled.div`
  ${props => {
 return (`
  height: ${props.height ? props.height : 'auto'};
  display: ${props.flex ? 'flex' : 'block'};
  flex-direction: ${props.flexCol ? 'column' : 'row'};
  justify-content: ${props.justify};
  align-items: ${props.align};
  background-color: ${props.bgcolor ? props.bgcolor: 'transparent'};
  `
  )
}}
  @media only screen and (min-width: 768px) {

}
`


export {Globalstyles,BigContainerGlobal,ContentContainerGlobal}