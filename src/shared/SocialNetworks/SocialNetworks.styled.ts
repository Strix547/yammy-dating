import styled from 'styled-components'

export const SocialNetworks = styled.ul`
  display: flex;

  li {
    height: 24px;
    list-style-type: none;

    button {
      height: 100%;
      padding: 0;
      border: none;
      background: transparent;
      cursor: pointer;

      &:focus {
        outline: none;
      }
    }

    &:not(:last-child) {
      margin-right: 10px;
    }
  }
`
