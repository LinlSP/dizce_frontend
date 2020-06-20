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

const PlaceHolder = styled.div`
  background: rgba(198, 235, 239, 1);
  height: 95vh;
  @media (pointer: none), (pointer: coarse) {
    height: ${95 * screenHeight}px;
  }
`
const Container = styled.div`
  min-height: 95vh;
  padding: ${3 * vh}px ${1 * vh}px;
  @media (pointer: none), (pointer: coarse) {
    min-height: ${95 * screenHeight}px;
  }
`

const PreferencesZone = styled.div``
const BackButton = styled.div``
const ItemsSrc = styled.div``
const FiltersZone = styled.div``

const SeparatingLine = styled.hr`
  background: black;
  width: 100%;
  height: ${1 * vh}px;
`

const ResultZone = styled.div`
  padding: ${2 * vh}px ${1 * vh}px;
`

const Item = styled.div``

const ItemImg = styled.div``
const ItemTitle = styled.div``
const ItemDescription = styled.div``

export {
  PlaceHolder,
  Container,
  PreferencesZone,
  BackButton,
  ItemsSrc,
  FiltersZone,
  SeparatingLine,
  ResultZone,
  Item,
  ItemImg,
  ItemTitle,
  ItemDescription
}
