import React, { ChangeEvent, useState } from 'react'

import { Button, FormField, Checkbox, FormControlLabel, Link } from '../../../../ui'

import * as S from './LoginForm.styled'

export const LoginForm = () => {
  const [rememberMe, setRememberMe] = useState(false)

  const onRememberCheck = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setRememberMe(target.checked)
  }

  const onLoginForm = () => {}

  return (
    <S.LoginForm>
      <S.Row>
        <FormField name="emailOrPhone" placeholder="Email или телефон" />
        <FormField name="password" placeholder="Пароль" />
      </S.Row>

      <S.Row>
        <Button type="submit" onClick={onLoginForm}>
          Войти
        </Button>
      </S.Row>

      <S.RowBetween>
        <FormControlLabel
          label="Запомнить меня"
          control={<Checkbox checked={rememberMe} onChange={onRememberCheck} />}
        />
        <Link to="/recover-password">Забыли пароль?</Link>
      </S.RowBetween>
    </S.LoginForm>
  )
}
