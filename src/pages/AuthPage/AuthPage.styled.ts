import styled from 'styled-components'

import { FormField } from '../../ui'
import { Text } from '../../assets/styled/components/Text'

import facesLeftSrc from './img/faces-left.png'
import facesRightSrc from './img/faces-right.png'

export { Text } from '../../assets/styled/components/Text'

export const AuthPage = styled.div`
  width: ${({ theme }) => theme.sizes.wrapper}px;
  margin: auto;
`

export const Content = styled.div`
  display: flex;
  justify-content: center;
`

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 380px;
  width: 100%;
  margin-top: 10px;
  margin-left: 50px;

  & > svg:first-child {
    margin-bottom: 30px;
  }
`

export const Row = styled.div`
  margin-bottom: 20px;

  ${FormField}:not(:last-child) {
    margin-bottom: 10px;
  }
`

export const SocialRow = styled.div`
  ${Text} {
    margin-bottom: 10px;
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

export const RegisterContent = styled.div``

export const LinkBack = styled.a``
