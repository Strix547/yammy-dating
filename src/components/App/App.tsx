import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { AuthPage } from '../../pages/AuthPage'
import { Sidebar } from '../Sidebar/Sidebar'

export const App = () => {
  return (
    <Switch>
      <Sidebar />
      {/* <Route path="/" component={AuthPage} /> */}
    </Switch>
  )
}
