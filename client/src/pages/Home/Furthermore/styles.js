import styled from 'styled-components'
import { vh } from '../height'

const FurtherTitle = styled.div`
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${4 * vh}px;
  padding-top: ${20 * vh}px;
  margin-bottom: ${10 * vh}px;
`
const Sections = styled.div`
  width: 100%;
`
const FText = styled.div`
  width: ${(props) => (props.width ? props.width : '50%')};
  margin-bottom: ${5 * vh}px;
  font-size: ${2.3 * vh}px;
  text-align: ${(props) => (props.align ? 'center' : 'justify')};
`
const FImage = styled.img`
  border-radius: 10%;
`

const Section1 = styled.div`
  display: flex;
  margin: ${10 * vh}px 0;
  justify-content: space-between;
  align-items: center;
`
const Section2 = styled.div`
  display: flex;
  margin: ${10 * vh}px 0;
  justify-content: space-between;
  align-items: center;
`
const Section3 = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${10 * vh}px 0 0 0;
  padding-bottom: ${10 * vh}px;
  justify-content: center;
  align-items: center;
`
const ImagesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export {
  FurtherTitle,
  Sections,
  Section1,
  Section2,
  Section3,
  FText,
  FImage,
  ImagesContainer
}
