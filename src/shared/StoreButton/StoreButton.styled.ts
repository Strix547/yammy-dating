import styled from 'styled-components'

export const StoreButton = styled.button`
  display: flex;
  align-items: center;
  padding: 10px 12px 10px 18px;
  background: #fff;
  font-family: 'Noto-Sans';
  color: #000;
  border: none;
  border-radius: 5px;
  transition: 0.3s;
  cursor: pointer;

  svg {
    flex-shrink: 0;
    fill: #000;
    transition: 0.3s;
  }

  & > span {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    text-align: left;
  }

  &:hover {
    color: #fff;
    background: #000;
    transition: 0.3s;

    svg {
      fill: #fff;
      transition: 0.3s;
    }
  }
`
