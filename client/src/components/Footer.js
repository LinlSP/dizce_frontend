import React,{useContext} from 'react'
import {Context} from '../Context'

/// //////////////////Styles
import { BigContainerGlobal, ContentContainerGlobal } from '../styles/global/Globalstyles'
import { SocialMedia, Copyright, ResourcesText, LinkIcon, RLink } from '../styles/components/StyleFooter'

/// //////////////////Resources and Components
import facebook from '../assets/facebook.svg'
import twitter from '../assets/twitter.svg'
import instagram from '../assets/instagram.svg'

/// //////////////////Self

///setting the height
const windowWidth = window.innerWidth

var defaultVh = 684
if(windowWidth > 350 && windowWidth < 1701){
  defaultVh = 784
}else if(windowWidth > 1700){
  defaultVh = window.innerHeight
}

var vh = defaultVh*0.01
///


export const Footer = () => {
  const {isLanguage} = useContext(Context)
  const socialLinks = ['twitter.com', 'instagram.com', 'facebook.com']
  const socialSources = [twitter, instagram, facebook]

  var resources;

  switch(isLanguage){
    case 'spanish':
      resources = 'Recursos';
      break;
    case 'german':
      resources = 'Ressourcen';
      break;
    default:
      resources = 'Resources';
  }

  return (
    <BigContainerGlobal bgcolor='black'>
      <div className='container'>
        <ContentContainerGlobal height={`${12*vh}px`} flex justify={'space-between'} align={'center'}>
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
          <ResourcesText>
            <RLink to='/resources'>
              {resources}
            </RLink>
          </ResourcesText>
        </ContentContainerGlobal>
      </div>
    </BigContainerGlobal>
  )
}
