import React from 'react'

import { FormControlLabel, Button, ProgressBar, Checkbox } from '../../../../ui'

import * as S from './PreferencesStep.styled'

interface IPreferencesStepProps {}

export const PreferencesStep = (props: IPreferencesStepProps) => {
  return (
    <S.PreferencesStep>
      <S.Text variant="h4">Укажите ваши предпочтения</S.Text>

      <ProgressBar value={80} variant="determinate" />

      <S.Text>Кого вы предпочитаете?</S.Text>

      <FormControlLabel label="Мужчин" control={<Checkbox name="male" />} />
      <FormControlLabel label="Женщин" control={<Checkbox name="female" />} />
      <FormControlLabel label="Геев" control={<Checkbox name="gay" />} />
      <FormControlLabel label="Лесбиянок" control={<Checkbox name="lesbi" />} />
      <FormControlLabel label="Трансгендеров" control={<Checkbox name="trans" />} />

      <Button>Продолжить</Button>
    </S.PreferencesStep>
  )
}
