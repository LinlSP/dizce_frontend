import React, { useState } from 'react'

/// /////////////////////////////////////////////////////////////////////////////////Styles
import { vh } from '../height'
import {
  FocusTitle,
  FocusIcons,
  FIcon,
  FocusDescription,
  DTitle,
  DSubtitle,
  DPoints
} from './styles'
/// /////////////////////////////////////////////////////////////////////////////////Resources and Components
import family from '../../../assets/family.svg'
import business from '../../../assets/business.svg'
import individual from '../../../assets/individual.svg'
import personalized from '../../../assets/personalized.svg'

/// /////////////////////////////////////////////////////////////////////////////////Self

export const OurFocus = ({
  focus,
  secondarybgcolor,
  titles,
  ContentContainerGlobal,
  BigContainerGlobal
}) => {
  const [focusIcon, setFocusIcon] = useState(parseInt('0'))
  const focusIconsSrc = [family, business, individual, personalized]

  const onFocusChange = (event) => {
    const focusIconNumber = parseInt(event.target.id)
    setFocusIcon(focusIconNumber)
  }

  return (
    <div id='ourfocus'>
      <BigContainerGlobal bgcolor={secondarybgcolor}>
        <div className='container'>
          <ContentContainerGlobal
            flex
            flexCol
            extra={`padding: ${20 * vh}px 0;`}
          >
            <FocusTitle>{titles.first}</FocusTitle>
            <FocusIcons>
              {focusIconsSrc.map((source, index) => (
                <FIcon
                  key={index}
                  id={index}
                  src={source}
                  focusOn={focusIcon}
                  onClick={(event) => onFocusChange(event)}
                />
              ))}
            </FocusIcons>
            <FocusDescription>
              <DTitle>{focus[focusIcon].name}</DTitle>
              <div>
                <DSubtitle>{focus[focusIcon].text}</DSubtitle>
                <DPoints>
                  {focus[focusIcon].points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </DPoints>
              </div>
            </FocusDescription>
          </ContentContainerGlobal>
        </div>
      </BigContainerGlobal>
    </div>
  )
}
