import React from 'react'

import { FormField, Button, ProgressBar } from '../../../../ui'

import * as S from './PasswordStep.styled'

interface IPasswordStepProps {}

export const PasswordStep = (props: IPasswordStepProps) => {
  return (
    <S.PasswordStep>
      <S.Text variant="h4">Придумайте пароль</S.Text>

      <ProgressBar value={60} variant="determinate" />

      <FormField name="password" placeholder="Пароль" />
      <FormField name="password-confirm" placeholder="Повторно введите пароль" />

      <Button>Продолжить</Button>
    </S.PasswordStep>
  )
}
