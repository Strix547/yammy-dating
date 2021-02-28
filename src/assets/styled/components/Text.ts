import styled, { css } from 'styled-components'

// type TFontWeight = 300 | 400 | 500 | 600 | 700
type THeaders = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
type TTag = THeaders | 'p' | 'span'
type TVariant = THeaders | 'subheader' | undefined

interface ITextProps {
  variant?: TVariant
  tag?: TTag
}

const getVariantStyles = (variant: TVariant) => {
  switch (variant) {
    case 'h1':
      return css`
        font-size: 36px;
        font-weight: 500;
      `
    case 'h2':
      return css`
        font-size: 28px;
        font-weight: 500;
      `
    case 'h3':
      return css`
        font-size: 22px;
      `
    case 'h4':
      return css`
        font-size: 18px;
      `
    case 'h5':
      return css`
        font-size: 12px;
      `
    case 'h6':
      return css`
        font-size: 10px;
      `
    case 'subheader':
      return css`
        font-size: 8px;
      `
    default:
      return css`
        font-size: 14px;
      `
  }
}

export const Text = styled.p.attrs(({ tag }: { tag: TTag }) => ({
  as: tag
}))<ITextProps>`
  ${({ variant }) => getVariantStyles(variant)}
`
