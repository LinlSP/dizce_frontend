import React from 'react'
/// /////////////////////////////////////////////////////////////////////////////////Styles
import { BigContainerGlobal } from '../../styles/global/Globalstyles'
import { Container, PlaceHolder, OptionBox, Title, SubTitle } from './styles'
/// /////////////////////////////////////////////////////////////////////////////////Resources and Components
import bg from '../../assets/servicesBg.svg'
import { useInjectText } from '../../customHooks/useInjectText'
import { useEnableHeader } from '../../customHooks/useEnableHeader'

const freeBg =
  'https://res.cloudinary.com/d1zc3/image/upload/v1591983275/All/Services/Free/blurredbooks.jpg'
const storeBg =
  'https://res.cloudinary.com/d1zc3/image/upload/v1591983327/All/Services/Premium/book.jpg'
const personalizedBg =
  'https://res.cloudinary.com/d1zc3/image/upload/v1591983312/All/Services/Personalized/business.jpg'
/// /////////////////////////////////////////////////////////////////////////////////Self

export const Services = () => {
  const bgImages = [freeBg, storeBg, personalizedBg]
  const routes = ['/free', '', '/personalized']
  const boxStyles = [
    {
      text: 'white',
      bg: 'rgba(0,0,0,.7)'
    },
    {
      text: 'black',
      bg: 'rgba(255,255,255,.7)'
    },
    {
      text: 'white',
      bg: 'rgba(0,0,0,.7)'
    }
  ]
  const selfName = 'services'
  /// ////////////////onMount hooks
  const textData = useInjectText(selfName)
  useEnableHeader()

  /// ////////////////PAGE

  if (textData === '') return <PlaceHolder bg={bg} />

  const { services } = textData

  return (
    <>
      <BigContainerGlobal bg={`url(${bg}) no-repeat center`} bgsize='cover'>
        <div className='container'>
          <Container>
            {services.map((boxText, index) => (
              <OptionBox
                bg={bgImages[index]}
                available={index === 1 ? 0 : 1}
                key={index}
                to={'/services' + routes[index]}
              >
                <Title
                  color={boxStyles[index].text}
                  bgcolor={boxStyles[index].bg}
                >
                  {boxText.type}
                </Title>
                <SubTitle
                  color={boxStyles[index].text}
                  bgcolor={boxStyles[index].bg}
                >
                  {boxText.sub}
                </SubTitle>
              </OptionBox>
            ))}
          </Container>
        </div>
      </BigContainerGlobal>
    </>
  )
}
