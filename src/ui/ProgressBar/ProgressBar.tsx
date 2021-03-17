import styled from 'styled-components'
import MUILinearProgress from '@material-ui/core/LinearProgress'

export const ProgressBar = styled(({ ...props }) => (
  <MUILinearProgress classes={{ root: 'root', bar: 'bar' }} {...props} />
))`
  background-color: #f7f7f7;
  border-radius: 5px;

  .bar {
    background-color: ${({ theme }) => theme.colors.green};
  }
`
