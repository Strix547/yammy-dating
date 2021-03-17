import styled from 'styled-components'
import arrowSrc from '../../assets/icons/arrow.svg'

export const LinkBack = styled.a`
  position: relative;
  display: inline-block;
  padding-left: 20px;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    width: 12px;
    height: 7px;
    margin-top: -3.5px;
    background: url(${arrowSrc}) no-repeat;
    transform: rotate(90deg);
  }
`
