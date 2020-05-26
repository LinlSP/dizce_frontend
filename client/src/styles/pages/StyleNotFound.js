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
  flex-direction: column;
  justify-content: center;
  color: white;
  font-size: ${4.5*vh}px;

`
export const BrokenLogo = styled.img`
  height: ${12*vh}px;

`