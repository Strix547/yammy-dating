import React from 'react'

import { FormControlLabel, Button, ProgressBar, Link } from '../../../../ui'

import * as S from './PhotoStep.styled'

interface IPhotoStepProps {}

export const PhotoStep = (props: IPhotoStepProps) => {
  return (
    <S.PhotoStep>
      <S.Text variant="h4">Загрузите фотографию</S.Text>

      <ProgressBar value={100} variant="determinate" />

      <Button>Загрузить фото</Button>

      <Link to="#" onClick={() => {}}>
        Или войдите в систему и загрузите фото позже
      </Link>
    </S.PhotoStep>
  )
}
