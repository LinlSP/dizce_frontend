import styled, { createGlobalStyle } from 'styled-components'
const vh = window.innerHeight*0.01

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
  ${props =>(`
    background: ${props.bg};
    background-size: ${props.bgsize};
    background-color: ${props.bgcolor};
    ${props.extra}
  `)}

  @media only screen and (min-width: 768px) {

  }

`
const ContentContainerGlobal = styled.div`
  ${props => {
 return (`
  height: ${props.height};
  display: ${props.flex ? 'flex' : 'block'};
  flex-direction: ${props.flexCol ? 'column' : 'row'};
  justify-content: ${props.justify};
  align-items: ${props.align};
  background-color: ${props.bgcolor};
  ${props.extra}
  `
  )
}}
  @media only screen and (min-width: 768px) {

}
`


export {Globalstyles,BigContainerGlobal,ContentContainerGlobal}