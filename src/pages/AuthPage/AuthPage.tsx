import React, { ChangeEvent, Fragment, useState } from 'react'
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

import { Tabs, Tab, Link } from '../../ui'
import { SocialNetworks } from '../../shared/SocialNetworks'
import { StoreButton } from '../../shared/StoreButton'

import { ROUTES } from '../../core/routes'

import * as S from './AuthPage.styled'

import { ReactComponent as Logo } from '../../assets/img/svg/logo.svg'
import { ReactComponent as AppStore } from '../../assets/icons/app-store.svg'
import { ReactComponent as GooglePlay } from '../../assets/icons/google-play.svg'
import iphoneSrc from './img/iphone.png'
import { Paper } from '../../assets/styled/components/Paper'

type TRoute = 'sign-in' | 'sign-up'
type TRegisterStep = 'main-info' | 'email' | 'code' | 'password' | 'preferences' | 'photo'

export const AuthPage = () => {
  const history = useHistory()

  const [registerStep, setRegisterStep] = useState<TRegisterStep>('main-info')
  const [value, setValue] = useState(ROUTES.SIGN_IN)

  const isntRegisterProcess = registerStep === 'main-info'

  const onTabChange = (newValue: TRoute) => {
    setValue(newValue)
    history.push(newValue)
  }

  const onNetworkClick = () => {}
  const toAppStore = () => {}
  const toGooglePlay = () => {}

  const toEmailStep = () => {
    setRegisterStep('email')
  }

  const toPrevStep = (step: TRegisterStep) => {
    setRegisterStep(step)
  }

  const authPageContent = (
    <Fragment>
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
            <Route path={ROUTES.SIGN_UP} component={() => <RegisterForm onRegister={toEmailStep} />} />
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

      <S.Background />
    </Fragment>
  )

  const getRegisterContent = (step: TRegisterStep) => {
    let content = null
    let prevStep: TRegisterStep = 'main-info'
    const linkLabel = step === 'email' ? 'На главную' : 'Назад'

    switch (step) {
      case 'email':
        content = <EmailStep />
        prevStep = 'main-info'
        break
      case 'code':
        content = <CodeStep />
        prevStep = 'email'
        break
      case 'password':
        content = <PasswordStep />
        prevStep = 'code'
        break
      case 'preferences':
        content = <PreferencesStep />
        prevStep = 'password'
        break
      case 'photo':
        content = <PhotoStep />
        prevStep = 'preferences'
        break
    }

    return (
      <S.RegisterContent>
        <Logo />

        <S.LinkBack
          href="/"
          onClick={() => {
            toPrevStep(prevStep)
          }}
        >
          {linkLabel}
        </S.LinkBack>

        <Paper>{content}</Paper>
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
