import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/deafult'
import { Globalstyle } from './styles/global'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <Globalstyle />
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
