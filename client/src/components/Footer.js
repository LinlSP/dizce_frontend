import React from 'react'

/// //////////////////Styles
import { BigContainerGlobal, ContentContainerGlobal } from '../styles/global/Globalstyles'
import { SocialMedia, Copyright, ResourcesText, LinkIcon } from '../styles/components/StyleFooter'

/// //////////////////Resources and Components
import facebook from '../assets/facebook.svg'
import twitter from '../assets/twitter.svg'
import instagram from '../assets/instagram.svg'

/// //////////////////Self

export const Footer = () => {
  const socialLinks = ['twitter.com', 'instagram.com', 'facebook.com']
  const socialSources = [twitter, instagram, facebook]
  return (
    <BigContainerGlobal bgcolor='black'>
      <div className='container'>
        <ContentContainerGlobal height='12vh' flex justify={'space-between'} align={'center'}>
          <SocialMedia>
            {
              socialSources.map((socialNetwork, index) => (
                <LinkIcon to={socialLinks[index]} key={index}>
                  <img src={socialNetwork} alt='' height='100%' />
                </LinkIcon>
              ))
            }
          </SocialMedia>
          <Copyright>
            © 2020 Copyright Dizce
          </Copyright>
          <ResourcesText to='/resources'>
              Media Resources
          </ResourcesText>
        </ContentContainerGlobal>
      </div>
    </BigContainerGlobal>
  )
}
