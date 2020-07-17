import React from 'react'
/// /////////////////////////////////////////////////////////////////////////////////Styles
import { PlaceHolder, Container, Term, Title, SeparatingLine } from './styles'
/// /////////////////////////////////////////////////////////////////////////////////Resources and Components
import { useEnableHeader } from '../../customHooks/useEnableHeader'
import { useInjectText } from '../../customHooks/useInjectText'

/// /////////////////////////////////////////////////////////////////////////////////Self

export const Legal = () => {
  const selfName = 'legal'
  /// ////////////////onMount hooks
  const textData = useInjectText(selfName)
  useEnableHeader()

  if (textData === '') return <PlaceHolder />

  const { privacy, modificationDate, conditions } = textData
  const { titles, content } = privacy
  const { titlesC, contentC } = conditions

  return (
    <div style={{ background: 'rgba(198, 235, 239, 1)' }}>
      <Container className='container'>
        {titles.map((title, index) => (
          <Term key={index}>
            <Title>{title}</Title>
            <br />
            {content[index].split('/n').map((paragraph, index) => (
              <span key={index}>
                {paragraph}
                <br />
              </span>
            ))}
          </Term>
        ))}
        <SeparatingLine />
        {titlesC.map((title, index) => (
          <Term key={index}>
            <Title>{title}</Title>
            <br />
            {contentC[index].split('/n').map((paragraph, index) => (
              <span key={index}>
                {paragraph}
                <br />
              </span>
            ))}
          </Term>
        ))}

        <Term>
          {modificationDate}:
          <br />
          17/06/2020
        </Term>
      </Container>
    </div>
  )
}
