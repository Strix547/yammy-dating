import styled from 'styled-components'

import { PaperStep } from '../../AuthPage.styled'

import { Text } from '../../../../assets/styled/components'
import { FormControlLabel } from '../../../../ui'

export { Text }

export const PreferencesStep = styled(PaperStep)`
  ${Text}:nth-of-type(2) {
    margin-bottom: 20px;
  }

  ${FormControlLabel} {
    display: block;

    &:not(:last-of-type) {
      margin-bottom: 10px;
    }
  }
`
