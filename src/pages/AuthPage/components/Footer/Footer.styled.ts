import styled from 'styled-components'

import { Link } from '../../../../ui'

export const Footer = styled.footer`
  position: absolute;
  left: 50%;
  bottom: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1170px;
  transform: translateX(-50%);
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
