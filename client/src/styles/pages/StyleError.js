import styled from 'styled-components'
const vh = window.innerHeight*0.01

export const Text = styled.div`
  text-align:center;
  display: flex;
  justify-content: center;
  color: white;
  font-size: ${5*vh};
  font-family: 'Lato', sans-serif;
  @media only screen and (min-width: 768px) {

  }
`

export const Icon = styled.img`
  height: ${15*vh};
`