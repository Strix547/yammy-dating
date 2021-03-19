import styled from 'styled-components'

export const Button = styled.button`
  width: 100%;
  min-height: 44px;
  padding: 12px 20px;
  font-family: 'Noto-Sans';
  font-size: 14px;
  color: #fff;
  background: ${({ theme }) => theme.gradients.main};
  border: none;
  border-radius: 10px;
  outline: none;
  cursor: pointer;

  &:hover {
    background: linear-gradient(180deg, hsla(0, 0%, 100%, 0), hsla(0, 0%, 100%, 0)), #f90040;
  }
`
