import styled from 'styled-components'
import MUITabs from '@material-ui/core/Tabs'
import MUITab from '@material-ui/core/Tab'

export const Tabs = styled(({ ...props }) => <MUITabs classes={{ indicator: 'indicator' }} {...props} />)`
  .root {
    flex: 1;
    font-size: 14px;
    letter-spacing: 0;
  }

  .indicator {
    height: 1px;
    background: ${({ theme }) => theme.colors.main};
  }
`

export const Tab = styled(({ ...props }) => (
  <MUITab classes={{ root: 'root', wrapper: 'wrapper' }} disableRipple {...props} />
))`
  .wrapper {
    font-family: 'Noto-Sans';
    font-weight: 400;
    text-transform: capitalize;
  }
`
