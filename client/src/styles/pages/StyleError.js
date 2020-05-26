import styled from 'styled-components'

///setting the height
const windowWidth = window.innerWidth

var defaultVh = 784

if(windowWidth > 900 && windowWidth < 1201){
  defaultVh = 900

}else if(windowWidth > 1200 && windowWidth < 1801){
  defaultVh = 1050

}else if(windowWidth > 1800){
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