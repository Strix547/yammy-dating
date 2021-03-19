import styled from 'styled-components'
import MUIFormControlLabel from '@material-ui/core/FormControlLabel'

export const FormControlLabel = styled(({ ...props }) => (
  <MUIFormControlLabel classes={{ root: 'root', label: 'label' }} {...props} />
))`
  margin-left: 0;
  margin-right: 0;

  .label {
    margin-left: 10px;
    font-family: 'Noto-Sans';
    font-size: 14px;
  }
`
