import styled from 'styled-components'

import { PaperStep } from '../../AuthPage.styled'

import { Text } from '../../../../assets/styled/components'
import { Link } from '../../../../ui'

export { Text }

export const PhotoStep = styled(PaperStep)`
  display: flex;
  flex-direction: column;

  ${Link} {
    margin: 0 auto;
  }
`
