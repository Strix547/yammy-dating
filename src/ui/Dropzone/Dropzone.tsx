import React from 'react'
import { useDropzone } from 'react-dropzone'

import * as S from './Dropzone.styled'

interface IDropzoneProps {
  title: string
}

export const Dropzone = ({ title }: IDropzoneProps) => {
  const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject } = useDropzone({ accept: 'image/*' })

  return (
    <S.Dropzone {...getRootProps({ isDragActive, isDragAccept, isDragReject })}>
      <input {...getInputProps()} />
      <S.Text>{title}</S.Text>
    </S.Dropzone>
  )
}
