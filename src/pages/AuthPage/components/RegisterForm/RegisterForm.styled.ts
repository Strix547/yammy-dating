import styled from 'styled-components'

export { Text } from '../../../../assets/styled/components/Text'

export const Row = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr 100px;
  grid-gap: 10px;
  margin-top: 10px;
  margin-bottom: 20px;
`

export const RegisterForm = styled.form`
  margin-bottom: 30px;
`

export const RowName = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  margin-bottom: 10px;
`
