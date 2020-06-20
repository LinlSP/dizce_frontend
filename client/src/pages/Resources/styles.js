import styled from 'styled-components'

/// setting the height
const windowWidth = window.innerWidth

var defaultVh = 684
if (windowWidth > 350 && windowWidth < 1701) {
  defaultVh = 784
} else if (windowWidth > 1700) {
  defaultVh = window.innerHeight
}

var vh = defaultVh * 0.01

const screenHeight = window.innerHeight * 0.01
///

const Container = styled.div`
  min-height: 95vh;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media (pointer: none), (pointer: coarse) {
    min-height: ${95 * screenHeight}px;
  }
`

const Item = styled.div`
  display: flex;
  border: ${1 * vh}px solid black;
  padding: ${1 * vh}px ${2 * vh}px;
  margin: ${2 * vh}px 0;
  height: auto;
  align-items: center;
  width: 100%;
  justify-content: space-around;
`
const ItemImg = styled.div`
  height: ${20 * vh}px;
  background: url(${(props) => props.src}) no-repeat center;
  background-size: contain;
  width: 45%;
`
const ItemLink = styled.a`
  font-size: ${2 * vh}px;
  word-wrap: break-word;
  width: 45%;
  color: black;
`
export { Container, Item, ItemImg, ItemLink }
