import styled from 'styled-components'
import { Link } from '@reach/router'

export const SocialMedia = styled.div`
  width: 30%;
  height: 20%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
`
export const Copyright = styled.div`
  display: flex;
  width: 30%;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.5vh;
  text-align: center;

`
export const ResourcesText = styled(Link)`
  display: flex;
  width: 30%;

  justify-content: flex-end;
  align-items: center;
  color: white;
  font-size: 1.5vh;
  text-align: center;
`

export const LinkIcon = styled(Link)`
  height: 100%;
  display: flex;
`
