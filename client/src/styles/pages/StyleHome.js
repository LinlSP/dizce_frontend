import styled from 'styled-components'

const LogoSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 8vh;
  width: 100%;
  margin-bottom: 1vh;
  margin-top: 1vh;
`

const BurgerMenu = styled.img`
&:hover{
  cursor: pointer;
}
`

const MainTitle = styled.div`
  color: white;

`
const LittleMainTitle = styled.div`
  color: white;

`
const MainButton = styled.button`
  background-color: black;
  color: white

`
const WorldIcon = styled.div`
`
const SideMenu = styled.div`
`

export {LogoSection, MainTitle,LittleMainTitle,WorldIcon, MainButton, SideMenu,BurgerMenu}