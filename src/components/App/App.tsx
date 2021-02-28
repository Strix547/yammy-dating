import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { AuthPage } from '../../pages/AuthPage'

export const App = () => {
  return (
    <Switch>
      <Route path="/" component={AuthPage} />
    </Switch>
  )
}
