import styled from 'styled-components'

import { Link } from '../../ui'
import { Text } from '../../assets/styled/components/Text'

export { Text }

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
`

export const Nav = styled.nav`
  flex-grow: 1;
  margin-top: 30px;

  ul {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  width: 25px;
  height: 25px;
  margin-right: 10px;

  svg {
    transition: 0.3s;
  }
`

export const NavItem = styled.li`
  &:nth-child(6) {
    margin-top: auto;
  }

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  &:hover {
    ${Link} ${Text} {
      color: ${({ theme }) => theme.colors.main};
      transition: 0.3s;
    }

    ${Icon} svg {
      fill: ${({ theme }) => theme.colors.main};
      transition: 0.3s;
    }
  }

  ${Link} {
    display: flex;
    align-items: center;
    height: 36px;
    text-decoration: none;

    ${Text} {
      color: ${({ theme }) => theme.colors.darkGrey};
      transition: 0.3s;
    }
  }
`

export const Badge = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  margin-left: 10px;
  background-color: ${({ theme }) => theme.colors.main};
  font-size: 10px;
  color: #fff;
  border-radius: 7px;
`
