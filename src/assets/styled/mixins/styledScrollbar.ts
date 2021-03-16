import { css } from 'styled-components'

export const styledScrollbar = () => css`
  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background: #f7f7f7;
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.main};
    border-radius: 5px;
  }
`
