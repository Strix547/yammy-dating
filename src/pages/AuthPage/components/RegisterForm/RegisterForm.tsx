import React, { useState } from 'react'
import { AutocompleteRenderInputParams } from '@material-ui/lab'

import { Button, FormField, Autocomplete } from '../../../../ui'

import * as S from './RegisterForm.styled'

interface IAutocomplete {
  name: string
  options: string[]
  placeholder: string
  inputValue: string
  onChange: (newVal: string) => void
}

interface IRegisterFormProps {
  onRegister(): void
}

export const RegisterForm = ({ onRegister }: IRegisterFormProps) => {
  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')

  const currYear = new Date().getFullYear()
  const maxValidAge = 70
  const minValidAge = 18

  const getDaysNumberInMonth = (month: string, year: string) => {
    const yearInNumber = Number(year)

    if (month === '') return 31

    switch (month) {
      case 'Январь':
      case 'Март':
      case 'Май':
      case 'Июль':
      case 'Август':
      case 'Октябрь':
      case 'Декабрь':
        return 31
      case 'Февраль':
        const isLeapYear = yearInNumber % 4 === 0
        return isLeapYear ? 29 : 28
      default:
        return 30
    }
  }

  const createDays = (month: string, year: string) => {
    return new Array(getDaysNumberInMonth(month, year)).fill(null).map((item, i) => String(i + 1))
  }

  const createMonths = (year: string) => {
    const months = [
      'Январь',
      'Февраль',
      'Март',
      'Апрель',
      'Май',
      'Июнь',
      'Июль',
      'Август',
      'Сентябрь',
      'Октябрь',
      'Ноябрь',
      'Декабрь'
    ]
    const minValidYear = currYear - minValidAge
    if (Number(year) !== minValidYear) return months

    const currMonth = new Date().getMonth() + 1
    return months.slice(0, currMonth)
  }

  const createYears = () => {
    const years = new Array(maxValidAge - minValidAge).fill(null).map((item, i) => String(currYear - minValidAge - i))
    return years
  }

  const createAutcomplete = ({ name, options, placeholder, inputValue, onChange }: IAutocomplete) => {
    return (
      <Autocomplete
        id={name}
        options={options}
        inputValue={inputValue}
        renderInput={(params: AutocompleteRenderInputParams) => (
          <div ref={params.InputProps.ref}>
            <FormField name={name} placeholder={placeholder} {...params.inputProps} />
          </div>
        )}
        onInputChange={(e, newValue) => {
          onChange(newValue)
        }}
      />
    )
  }

  return (
    <S.RegisterForm>
      <S.RowName>
        <FormField name="name" placeholder="Ваше имя" />
        <FormField name="last-name" placeholder="Ваша фамилия" />
      </S.RowName>

      <S.Text>Дата рождения</S.Text>

      <S.Row>
        {createAutcomplete({
          name: 'day',
          options: createDays(month, year),
          placeholder: 'День',
          inputValue: day,
          onChange: (newValue) => {
            setDay(newValue)
          }
        })}

        {createAutcomplete({
          name: 'month',
          options: createMonths(year),
          placeholder: 'Месяц',
          inputValue: month,
          onChange: (newValue) => {
            setMonth(newValue)
          }
        })}

        {createAutcomplete({
          name: 'year',
          options: createYears(),
          placeholder: 'Год',
          inputValue: year,
          onChange: (newValue) => {
            setYear(newValue)
          }
        })}
      </S.Row>

      <Button
        onClick={() => {
          onRegister()
        }}
      >
        Продолжить
      </Button>
    </S.RegisterForm>
  )
}
