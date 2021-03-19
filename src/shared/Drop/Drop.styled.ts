import styled from 'styled-components'

import { Text } from '../../assets/styled/components/Text'

export { Text }

export const Drop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 140px;
  border: 2px dashed ${({ theme }) => theme.colors.lightGrey};
  border-radius: 10px;

  ${Text} {
    margin-top: 8px;
    color: ${({ theme }) => theme.colors.grey};
  }
`

export const Icon = styled.div`
  margin-top: 50px;
`
