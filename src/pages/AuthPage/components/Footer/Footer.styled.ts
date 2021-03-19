import styled from 'styled-components'

import { Link } from '../../../../ui'

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;

  @media screen and (max-height: 792px) {
    margin-top: 50px;
  }
`

export const Left = styled.div`
  display: flex;

  & > * {
    color: #b5b5b5;

    &:not(:last-child) {
      margin-right: 30px;
    }
  }
`

export const PageList = styled.ul`
  display: flex;

  li {
    ${Link} {
      color: #000;
      text-decoration: none;
    }

    &:not(:last-child) {
      margin-right: 30px;
    }
  }
`
