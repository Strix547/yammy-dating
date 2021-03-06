import { DefaultTheme } from 'styled-components'

const colors = {
  main: '#F90040',
  lightGrey: '#ededed',
  grey: '#cccccc',
  darkGrey: '#808080',
  green: '#2ECC71'
} as const

const gradients = {
  main: 'linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 100%), #F90040'
} as const

const sizes = {
  wrapper: 1170
}

export const globalTheme: DefaultTheme = {
  colors,
  gradients,
  sizes
}
