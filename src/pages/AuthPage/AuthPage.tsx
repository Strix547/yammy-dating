import React, { ChangeEvent, useState } from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'

import {
  LoginForm,
  RegisterForm,
  Footer,
  EmailStep,
  PasswordStep,
  CodeStep,
  PreferencesStep,
  PhotoStep
} from './components'

import { Tabs, Tab } from '../../ui'
import { SocialNetworks } from '../../shared/SocialNetworks'
import { StoreButton } from '../../shared/StoreButton'
import { LinkBack } from '../../shared/LinkBack'

import { ROUTES } from '../../core/routes'

import * as S from './AuthPage.styled'

import { ReactComponent as Logo } from '../../assets/img/svg/logo.svg'
import { ReactComponent as AppStore } from '../../assets/icons/app-store.svg'
import { ReactComponent as GooglePlay } from '../../assets/icons/google-play.svg'
import iphoneSrc from './img/iphone.png'

type TRoute = 'sign-in' | 'sign-up'

enum ERegisterStep {
  MainInfo,
  Email,
  Code,
  Password,
  Preferences,
  Photo
}

export const AuthPage = () => {
  const history = useHistory()

  const [registerStep, setRegisterStep] = useState<ERegisterStep>(5)
  const [value, setValue] = useState(ROUTES.SIGN_IN)

  const isntRegisterProcess = registerStep === 0

  const onTabChange = (newValue: TRoute) => {
    setValue(newValue)
    history.push(newValue)
  }

  const onNetworkClick = () => {}
  const toAppStore = () => {}
  const toGooglePlay = () => {}

  const toRegisterProcess = () => {
    setRegisterStep(1)
  }

  const authPageContent = (
    <S.Content>
      <img src={iphoneSrc} alt="iphone" />

      <S.Right>
        <Logo />

        <S.Row>
          <Tabs
            value={value}
            onChange={(e: ChangeEvent, newValue: TRoute) => {
              onTabChange(newValue)
            }}
          >
            <Tab label="Войти" value={ROUTES.SIGN_IN} />
            <Tab label="Зарегистрироваться" value={ROUTES.SIGN_UP} />
          </Tabs>
        </S.Row>

        <Switch>
          <Route path={ROUTES.SIGN_IN} component={LoginForm} />
          <Route path={ROUTES.SIGN_UP} component={() => <RegisterForm onRegister={toRegisterProcess} />} />
        </Switch>

        <S.SocialRow>
          <S.Text>Войти через социальные сети:</S.Text>
          <SocialNetworks onNetworkClick={onNetworkClick} />
        </S.SocialRow>

        <S.StoresRow>
          <StoreButton label="App Store" icon={<AppStore />} onClick={toAppStore} />
          <StoreButton label="Google Play" icon={<GooglePlay />} onClick={toGooglePlay} />
        </S.StoresRow>
      </S.Right>
    </S.Content>
  )

  const getRegisterContent = (step: ERegisterStep) => {
    const stepComponents = [<EmailStep />, <CodeStep />, <PasswordStep />, <PreferencesStep />, <PhotoStep />]
    const linkLabel = step === 1 ? 'На главную' : 'Назад'

    return (
      <S.RegisterContent>
        <Logo />

        <S.Wrapper>
          <LinkBack
            title={linkLabel}
            onClick={() => {
              setRegisterStep(step - 1)
            }}
          />

          {stepComponents[registerStep - 1]}
        </S.Wrapper>
      </S.RegisterContent>
    )
  }

  return (
    <S.AuthPage>
      {isntRegisterProcess ? authPageContent : getRegisterContent(registerStep)}

      <Footer />
    </S.AuthPage>
  )
}
