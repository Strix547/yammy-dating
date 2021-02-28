import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'

export const Link = styled(RouterLink)`
  color: ${({ theme }) => theme.colors.grey};

  &:hover {
    text-decoration: none;
  }
`
