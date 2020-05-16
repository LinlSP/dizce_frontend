import styled, { createGlobalStyle } from 'styled-components'

export const Globalstyles = createGlobalStyle`
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
export const BigContainerGlobal = styled.div`
  ${props => {
 return (`
  background: ${props.bgcolor};
  `
  )
}}
`
export const ContentContainerGlobal = styled.div`
  ${props => {
 return (`
  background: ${props.bgcolor};
  height: ${props.height};
  display: ${props.flex ? 'flex' : 'block'};
  flex-direction: ${props.flexCol ? 'column' : 'row'};
  `
  )
}}
  justify-content: space-between;
  align-items: center;
`
