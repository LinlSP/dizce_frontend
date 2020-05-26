import styled from 'styled-components'
import { Link } from '@reach/router'
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

export const SocialMedia = styled.div`

  width: 30%;
  height: 25%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
`
export const Copyright = styled.div`
  display: flex;
  width: 30%;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: ${2*vh}px;
  text-align: center;
  font-weight:normal;


`
export const ResourcesText = styled(Link)`
  display: flex;
  width: 30%;
  font-weight:normal;
  justify-content: flex-end;
  align-items: center;
  color: white;
  font-size: ${2*vh}px;
  text-align: center;

`

export const LinkIcon = styled(Link)`
  height: 100%;
  display: flex;

`
