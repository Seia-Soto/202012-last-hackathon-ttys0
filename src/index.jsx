import * as React from 'react'
import ReactDOM from 'react-dom'

import { ChakraProvider } from '@chakra-ui/react'

import App from './App.jsx'

// NOTE: Specials;
import DarkMagic from './injects/DarkMagic'

// NOTE: Styles;
import theme from './styles/theme'

import './styles/body.css'
import './styles/fontOverrides.css'
import './styles/hangulWordBreakFixup.css'

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <DarkMagic />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

if (import.meta.hot) {
  import.meta.hot.accept()
}
