import styled from 'styled-components'
import { Link } from '@reach/router'
const vh = window.innerHeight*0.01

export const SocialMedia = styled.div`

  width: 30%;
  height: 25%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;

  @media only screen and (min-width: 768px) {
    /* height: 40%; */

  }
`
export const Copyright = styled.div`
  display: flex;
  width: 30%;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: ${2*vh}px;
  text-align: center;
  @media only screen and (min-width: 768px) {
    /* height: 40%; */

  }

`
export const ResourcesText = styled(Link)`
  display: flex;
  width: 30%;

  justify-content: flex-end;
  align-items: center;
  color: white;
  font-size: ${2*vh}px;
  text-align: center;
  @media only screen and (min-width: 768px) {
    /* height: 40%; */

  }

`

export const LinkIcon = styled(Link)`
  height: 100%;
  display: flex;
  @media only screen and (min-width: 768px) {
    /* height: 40%; */

  }

`
