import styled from 'styled-components'

export const FormField = styled.input`
  width: 100%;
  height: 45px;
  padding: 14px 20px;
  font-family: 'Noto-Sans';
  font-size: 14px;
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  border-radius: 10px;
  outline: none;
  box-sizing: border-box;

  &::placeholder {
    color: ${({ theme }) => theme.colors.grey};
    opacity: 1;
  }
`
