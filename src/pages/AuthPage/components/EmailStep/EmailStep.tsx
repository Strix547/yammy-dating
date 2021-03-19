import React from 'react'

import { FormField, Button, ProgressBar } from '../../../../ui'

import * as S from './EmailStep.styled'

interface IEmailStepProps {}

export const EmailStep = (props: IEmailStepProps) => {
  return (
    <S.EmailStep>
      <S.Text variant="h4">Введите данные для входа</S.Text>

      <ProgressBar value={20} variant="determinate" />

      <FormField name="emailOrPhone" placeholder="Email или телефон" />

      <Button>Продолжить</Button>
    </S.EmailStep>
  )
}
