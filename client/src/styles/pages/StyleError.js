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

export const Text = styled.div`
  text-align:center;
  display: flex;
  justify-content: center;
  color: white;
  font-size: ${5*vh}px;
  font-family: 'Lato', sans-serif;
`

export const Icon = styled.img`
  height: ${15*vh}px;
`