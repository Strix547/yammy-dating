import React from 'react'

import { Link } from '../../../../ui'

import * as S from './Footer.styled'

export const Footer = () => {
  return (
    <S.Footer>
      <S.Left>
        <p>2020 © Yammy</p>
        <p>Все права защищены</p>
        <p>Русский</p>
      </S.Left>

      <S.PageList>
        <li>
          <Link to="/about-service">О сервисе</Link>
        </li>
        <li>
          <Link to="/advantages">Преимущества</Link>
        </li>
        <li>
          <Link to="/terms-of-service">Условия использования</Link>
        </li>
        <li>
          <Link to="/privacy-policy">Конфиденциальность</Link>
        </li>
      </S.PageList>
    </S.Footer>
  )
}
