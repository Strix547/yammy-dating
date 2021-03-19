import styled from 'styled-components'

import { PaperStep } from '../../AuthPage.styled'

import { Text } from '../../../../assets/styled/components'
import { Link } from '../../../../ui'
import { SocialNetworks } from '../../../../shared/SocialNetworks/SocialNetworks.styled'

export { Text }

export const PhotoStep = styled(PaperStep)`
  display: flex;
  flex-direction: column;

  ${Link} {
    margin-left: auto;
    margin-right: auto;
  }
`

export const SocialRow = styled.div`
  text-align: center;

  ${Text} {
    margin-bottom: 10px;
  }

  ${SocialNetworks} {
    justify-content: center;
  }
`
