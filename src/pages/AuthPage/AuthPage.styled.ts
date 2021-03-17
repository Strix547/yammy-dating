import styled from 'styled-components/macro'

import { FormField } from '../../ui'
import { Text, Paper } from '../../assets/styled/components'
import { LinkBack } from '../../shared/LinkBack/LinkBack.styled'

import facesLeftSrc from './img/faces-left.png'
import facesRightSrc from './img/faces-right.png'

export { Text } from '../../assets/styled/components/Text'

export const AuthPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: ${({ theme }) => theme.sizes.wrapper}px;
  width: 100%;
  margin: 0 auto;
  padding: 50px 15px;
  box-sizing: border-box;
`

export const Content = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin: auto 0;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    width: 380px;
    height: 720px;
    transform: translateY(-50%);
  }

  &::before {
    left: -190px;
    background: url(${facesLeftSrc});
  }

  &::after {
    right: -190px;
    background: url(${facesRightSrc});
  }

  @media screen and (max-width: 1200px) {
    &::before,
    &::after {
      display: none;
    }
  }
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

export const RegisterContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const Wrapper = styled.div`
  align-self: center;
  width: 435px;
  margin: auto 0;

  ${LinkBack} {
    margin-bottom: 10px;
  }
`

export const PaperStep = styled(Paper)`
  & > *:not(:last-child) {
    margin-bottom: 30px;
  }

  ${Text}:first-child {
    margin-bottom: 20px;
    text-align: center;
  }

  & > ${FormField}:not(:last-of-type) {
    margin-bottom: 10px;
  }
`
