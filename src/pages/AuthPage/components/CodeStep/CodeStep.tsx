import React from 'react'

import { FormField, Button, ProgressBar, Link } from '../../../../ui'

import * as S from './CodeStep.styled'

interface ICodeStepProps {}

export const CodeStep = (props: ICodeStepProps) => {
  return (
    <S.CodeStep>
      <S.Text variant="h4">Проверьте Вашу почту</S.Text>

      <ProgressBar value={40} variant="determinate" />

      <S.Text>
        Мы отправили Вам сообщение на указанную почту. Пожалуйста, проверьте почту и введите указаный 4-х значный код.
      </S.Text>

      <S.Row>
        <FormField name="code1" />
        <FormField name="code2" />
        <FormField name="code3" />
        <FormField name="code4" />
      </S.Row>

      <Button>Продолжить</Button>

      <Link to="#" onClick={() => {}}>
        Не получили письмо?
      </Link>
    </S.CodeStep>
  )
}
