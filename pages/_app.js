import { createGlobalStyle, ThemeProvider } from 'styled-components'
import theme from '../src/theme'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`
// Remove essa parte do theme daqui e cria ele dentro do nosso código fonte. Depois importa ele nesse arquivo
// const theme = {
//   colors: {
//     primary: '#0070f3',
//   },
// }

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
