import styled from 'styled-components'

import { FormField } from '../../ui'
import { SocialNetworks } from '../../common/SocialNetworks/SocialNetworks.styled'

import facesLeftSrc from './img/faces-left.png'
import facesRightSrc from './img/faces-right.png'

export const AuthPage = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 380px;
  width: 100%;
  margin-left: 50px;

  & > svg:first-child {
    margin-top: 10px;
    margin-bottom: 30px;
  }

  ${FormField}:not(:last-child) {
    margin-bottom: 10px;
  }
`

export const Row = styled.div`
  margin-bottom: 20px;
`

export const RowBetween = styled(Row)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const SocialRow = styled.div`
  margin-top: 10px;

  ${SocialNetworks} {
    margin-top: 10px;
  }
`

export const StoresRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: auto;
`

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: ${`url(${facesLeftSrc}) 0 50% no-repeat, url(${facesRightSrc}) 100% 50% no-repeat`};
  z-index: -1;
`
