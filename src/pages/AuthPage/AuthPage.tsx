import React, { useState } from 'react'

import { Tabs, Tab, Button, FormField, Checkbox, FormControlLabel, Link } from '../../ui'
import { SocialNetworks } from '../../common/SocialNetworks'
import { StoreButton } from '../../common/StoreButton'
import { Text } from '../../assets/styled/components/Text'

import * as S from './AuthPage.styled'

import iphoneSrc from './img/iphone.png'
import { ReactComponent as Logo } from '../../assets/img/svg/logo.svg'
import { ReactComponent as AppStore } from '../../assets/icons/app-store.svg'
import { ReactComponent as GooglePlay } from '../../assets/icons/google-play.svg'

export const AuthPage = () => {
  const [value, setValue] = useState(0)

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue)
  }

  return (
    <S.AuthPage>
      <img src={iphoneSrc} alt="iphone" />

      <S.Content>
        <Logo />

        <S.Row>
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Войти" />
            <Tab label="Зарегистрироваться" />
          </Tabs>
        </S.Row>

        <S.Row>
          <FormField name="emailOrPhone" placeholder="Email или телефон" />
          <FormField name="password" placeholder="Пароль" />
        </S.Row>

        <S.Row>
          <Button>Войти</Button>
        </S.Row>

        <S.RowBetween>
          <FormControlLabel label="Запомнить меня" control={<Checkbox />} />
          <Link to="/password">Забыли пароль?</Link>
        </S.RowBetween>

        <S.SocialRow>
          <Text>Войти через социальные сети:</Text>
          <SocialNetworks
            onNetworkClick={(network) => {
              console.log(network)
            }}
          />
        </S.SocialRow>

        <S.StoresRow>
          <StoreButton label="App Store" icon={<AppStore />} onClick={() => {}} />
          <StoreButton label="Google Play" icon={<GooglePlay />} onClick={() => {}} />
        </S.StoresRow>
      </S.Content>

      <S.Background />
    </S.AuthPage>
  )
}
