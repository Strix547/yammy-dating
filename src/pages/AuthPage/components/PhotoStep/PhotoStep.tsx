import React from 'react'
import { Drop } from '../../../../shared/Drop/Drop'

import { SocialNetworks } from '../../../../shared/SocialNetworks'

import { Button, ProgressBar, Link } from '../../../../ui'
import { Dropzone } from '../../../../ui/Dropzone'

import * as S from './PhotoStep.styled'

import { ReactComponent as Upload } from '../../../../assets/icons/upload.svg'

interface IPhotoStepProps {}

export const PhotoStep = (props: IPhotoStepProps) => {
  return (
    <S.PhotoStep>
      <S.Text variant="h4">Загрузите фотографию</S.Text>

      <ProgressBar value={100} variant="determinate" />

      {/* <Dropzone title="Нажмите или перетащите фото в эту область" /> */}
      <Drop title="Нажмите или перетащите фото в эту область" icon={<Upload />} />

      <Button>Загрузить фото</Button>

      <Link to="#" onClick={() => {}}>
        Или войдите в систему и загрузите фото позже
      </Link>

      <S.SocialRow>
        <S.Text>Войти через социальные сети:</S.Text>
        <SocialNetworks onNetworkClick={() => {}} />
      </S.SocialRow>
    </S.PhotoStep>
  )
}
