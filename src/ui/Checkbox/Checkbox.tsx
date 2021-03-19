import styled from 'styled-components'
import MUICheckbox from '@material-ui/core/Checkbox'

import { ReactComponent as CheckIcon } from '../../assets/icons/checkmark.svg'

export const Checkbox = styled(({ ...props }) => (
  <MUICheckbox
    classes={{ root: 'root', icon: 'icon', checked: 'checked', checkedIcon: 'checked-icon' }}
    checkedIcon={<CheckIcon fill="#fff" />}
    disableRipple
    {...props}
  />
))`
  width: 16px;
  height: 16px;
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  border-radius: 5px;
  padding: 0;
  box-sizing: border-box;
  transition: none;

  svg {
    display: none;
  }

  &.checked {
    background: ${({ theme }) => theme.colors.main};
    border-color: ${({ theme }) => theme.colors.main};
    transition: none;

    svg {
      display: block;
    }
  }
`
