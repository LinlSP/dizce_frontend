import styled from 'styled-components'
import { SlideLeft, SlideRight } from '../../../styles/global/Animations'
import { vh } from '../height'

const Question = styled.div`
  color: white;
  display: flex;
  text-align: center;
  font-size: ${3 * vh}px;
  font-weight: bold;
  ${(props) =>
    props.change ? SlideLeft({ time: '1.5s' }) : SlideRight({ time: '1.5s' })}
  ${(props) => props.extra}
`
const Quote = styled.img`
  position: relative;
  display: flex;
  height: ${2 * vh}px;
  ${(props) =>
    props.change ? SlideLeft({ time: '1.5s' }) : SlideRight({ time: '1.5s' })}

  ${(props) => props.extra}
`
const Answer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: black;
  font-weight: 300;
  text-align: center;
  width: 90%;
  font-size: ${2.3 * vh}px;
  height: ${80 * vh}px;
  padding-top: ${4 * vh}px;
  ${(props) =>
    props.change ? SlideRight({ time: '1.5s' }) : SlideLeft({ time: '1.5s' })}

  @media only screen and (min-width: 800px) {
    flex-direction: row;
    width: 100%;
    height: auto;
    padding-top: 0;
  }
`

const AnswerImg = styled.img`
  height: 75%;
  @media only screen and (min-width: 800px) {
    height: 90%;
  }
`
const SliderButton = styled.img`
  height: ${3.5 * vh}px;
  margin: ${2 * vh}px;
  border-radius: 50%;
  background-color: ${(props) => props.bgcolor};
  &:hover {
    cursor: pointer;
  }
`

export { Question, Quote, Answer, AnswerImg, SliderButton }
