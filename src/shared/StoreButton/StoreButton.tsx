import React from 'react'

import { Text } from '../../assets/styled/components/Text'

import * as S from './StoreButton.styled'

interface IStoreButtonProps {
  icon: JSX.Element
  label: string
  onClick: () => void
}

export const StoreButton = ({ icon, label, onClick }: IStoreButtonProps) => {
  return (
    <S.StoreButton onClick={onClick}>
      {icon}

      <span>
        <Text variant="h6" tag="span">
          Доступно для загрузки
        </Text>
        <Text variant="h4" tag="span">
          {label}
        </Text>
      </span>
    </S.StoreButton>
  )
}
