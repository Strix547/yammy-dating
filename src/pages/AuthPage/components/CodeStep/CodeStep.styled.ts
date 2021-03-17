import styled from 'styled-components'

import { PaperStep } from '../../AuthPage.styled'

import { Text } from '../../../../assets/styled/components'
import { Button, Link } from '../../../../ui'

export { Text }

export const CodeStep = styled(PaperStep)`
  display: flex;
  flex-direction: column;

  ${Text} {
    line-height: 22px;
  }

  ${Button} {
    margin-bottom: 10px;
  }

  ${Link} {
    margin: 0 auto;
  }
`

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 40px);
  grid-gap: 15px;
  justify-content: center;
`
