import { useState } from 'react'
import styled, { css } from 'styled-components'
import { Autocomplete as MUIAutocomplete, AutocompleteProps as MUIAutocompleteProps } from '@material-ui/lab'
import { Paper as MUIPaper, PaperProps } from '@material-ui/core'

import { FormField } from '../FormField'

import { styledScrollbar } from '../../assets/styled/mixins/styledScrollbar'

import arrowSrc from '../../assets/icons/arrow.svg'

export const Paper = styled(({ ...props }: PaperProps) => <MUIPaper {...props} />)`
  margin: 0;
  border-radius: 5px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  border-top: none;
  box-shadow: none;

  .listbox {
    margin: 5px;
    padding: 0;

    ${styledScrollbar}
  }

  .option {
    margin-right: 5px;
    padding: 5px 15px;
    font-family: 'Noto-Sans';
    font-size: 12px;
    color: #000;
    letter-spacing: 0;
  }
`

export const StyledAutocomplete = styled.div<{ isOpen: boolean }>`
  position: relative;

  .root {
    position: relative;

    &::after {
      content: '';
      position: absolute;
      width: 12px;
      height: 7px;
      top: 50%;
      right: 17px;
      background: url(${arrowSrc}) 90% 50% no-repeat;
      transform: ${({ isOpen }) => (isOpen ? 'translateY(-50%) rotate(180deg)' : 'translateY(-50%)')};
      transition: 0.3s;
      pointer-events: none;
    }
  }

  ${FormField} {
    ${({ isOpen }) =>
      isOpen &&
      css`
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
      `}
  }
`

export const Autocomplete = ({ ...props }: MUIAutocompleteProps<string, false, false, false>) => {
  const [isOpen, setOpen] = useState(false)

  return (
    <StyledAutocomplete isOpen={isOpen}>
      <MUIAutocomplete
        {...props}
        classes={{ root: 'root', option: 'option', listbox: 'listbox' }}
        open={isOpen}
        onOpen={() => {
          setOpen(true)
        }}
        onClose={() => {
          setOpen(false)
        }}
        PaperComponent={Paper}
        noOptionsText="Ничего не найдено"
      />
    </StyledAutocomplete>
  )
}
