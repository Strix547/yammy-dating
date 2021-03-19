import React from 'react'

import * as S from './Drop.styled'

interface IDropProps {
  title: string
  icon: any
}

export const Drop = ({ title, icon }: IDropProps) => {
  return (
    <S.Drop>
      <S.Icon>{icon}</S.Icon>

      <S.Text>{title}</S.Text>
    </S.Drop>
  )
}
