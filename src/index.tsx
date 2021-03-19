import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { StylesProvider } from '@material-ui/core/styles'

import { GlobalStyles } from './assets/styled/global/GlobalStyles'
import { ResetStyles } from './assets/styled/global/ResetStyles'
import { globalTheme } from './assets/styled/global/globalTheme'

import { App } from './components/App'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <StylesProvider injectFirst>
        <ThemeProvider theme={globalTheme}>
          <ResetStyles />
          <GlobalStyles />

          <App />
        </ThemeProvider>
      </StylesProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
