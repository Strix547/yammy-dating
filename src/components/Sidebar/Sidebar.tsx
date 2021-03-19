import React from 'react'

import { Link } from '../../ui'

import { ReactComponent as Logo } from '../../assets/img/svg/logo.svg'
import { ReactComponent as LoupeIcon } from '../../assets/icons/loupe.svg'
import { ReactComponent as UserIcon } from '../../assets/icons/user.svg'
import { ReactComponent as MessageIcon } from '../../assets/icons/message.svg'
import { ReactComponent as HeartIcon } from '../../assets/icons/heart.svg'
import { ReactComponent as SquaresIcon } from '../../assets/icons/squares.svg'
import { ReactComponent as LockIcon } from '../../assets/icons/lock.svg'
import { ReactComponent as InfoIcon } from '../../assets/icons/info.svg'

import * as S from './Sidebar.styled'

interface INavItem {
  icon: JSX.Element
  title: string
  path: string
  badgeCount?: number
}

export const Sidebar = () => {
  const items: INavItem[] = [
    { icon: <LoupeIcon />, title: 'Люди', path: '/people' },
    { icon: <UserIcon />, title: 'Профиль', path: '/profile' },
    { icon: <MessageIcon />, title: 'Сообщения', path: '/messages', badgeCount: 19 },
    { icon: <HeartIcon />, title: 'События', path: '/events', badgeCount: 79 },
    { icon: <SquaresIcon />, title: 'Лица', path: '/faces' },
    { icon: <LockIcon />, title: 'Условия', path: '/terms-of-service' },
    { icon: <InfoIcon />, title: 'О нас', path: '/about-us' }
  ]

  const createNavItem = (items: INavItem[]) => {
    return items.map(({ icon, title, path, badgeCount }) => (
      <S.NavItem>
        <Link to={path}>
          <S.Icon>{icon}</S.Icon>
          <S.Text as="span">{title}</S.Text>
          {badgeCount ? <S.Badge>{badgeCount}</S.Badge> : null}
        </Link>
      </S.NavItem>
    ))
  }

  return (
    <S.Sidebar>
      <Logo />

      <S.Nav>
        <ul>{createNavItem(items)}</ul>
      </S.Nav>
    </S.Sidebar>
  )
}
