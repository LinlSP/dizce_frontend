import React from 'react'
import {BigContainerGlobal, ContentContainerGlobal} from '../styles/global/Globalstyles'
import {SocialMedia, Copyright, Resources} from '../styles/components/Sfooter'

export const Footer = () =>{
  return(
    <BigContainerGlobal bgcolor={'black'}>
      <div className='container'>
        <ContentContainerGlobal bgcolor={'transparent'} height={'9vh'} flex>
          <SocialMedia>
            <p>
              TWI
            </p>
            <p>
              FCB
            </p>
            <p>
              INS
            </p>
          </SocialMedia>
          <Copyright>
            © 2020 Copyright Dizce
          </Copyright>
          <Resources>
            Media resources
          </Resources>
        </ContentContainerGlobal>
      </div>
    </BigContainerGlobal>
  )
}