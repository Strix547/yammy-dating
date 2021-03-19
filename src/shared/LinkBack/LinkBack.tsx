import React, { MouseEventHandler } from 'react'

import * as S from './LinkBack.styled'

interface ILinkBackProps {
  title: string
  onClick: MouseEventHandler<HTMLAnchorElement>
}

export const LinkBack = ({ title, onClick }: ILinkBackProps) => {
  return <S.LinkBack onClick={onClick}>{title}</S.LinkBack>
}
